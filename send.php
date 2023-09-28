<?php
// Define the path to the JSON file
$jsonFilePath = "programa.json";

// Get data from the POST request
$data = json_decode(file_get_contents("php://input"), true);

if ($data !== null) {
    // Read the existing JSON file content
    $existingData = json_decode(file_get_contents($jsonFilePath), true);

    if ($existingData !== null) {
        // Update the JSON data with the new values
        foreach ($data as $key => $value) {
            $existingData[$key] = $value;
        }

        // Encode the updated data back to JSON format
        $jsonData = json_encode($existingData, JSON_PRETTY_PRINT);

        if (file_put_contents($jsonFilePath, $jsonData)) {
            echo json_encode(["message" => "Data saved successfully."]);
        } else {
            echo json_encode(["error" => "Failed to save data."]);
        }
    } else {
        echo json_encode(["error" => "Invalid JSON data in the file."]);
    }
} else {
    echo json_encode(["error" => "Invalid POST data."]);
}
?>
