<?php
// Set the content type to JSON
header('Content-Type: application/json');

// Define the path to the JSON file
$jsonFilePath = 'programa.json';

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $jsonData = file_get_contents('php://input');

    // Decode the JSON data into a PHP array
    $dataToSave = json_decode($jsonData, true);

    if ($dataToSave !== null) {
        // Read the existing JSON file content
        $existingData = file_get_contents($jsonFilePath);

        // Decode the existing JSON data into a PHP array
        $existingDataArray = json_decode($existingData, true);

        if ($existingDataArray !== null) {
            // Merge the new data with the existing data
            $existingDataArray[] = $dataToSave;

            // Encode the merged data back to JSON format
            $jsonToWrite = json_encode($existingDataArray, JSON_PRETTY_PRINT);

            // Write the JSON data back to the file, overwriting the existing content
            if (file_put_contents($jsonFilePath, $jsonToWrite) !== false) {
                // Data successfully saved
                echo json_encode(['status' => 'success', 'message' => 'Data saved successfully']);
            } else {
                // Error writing to the file
                echo json_encode(['status' => 'error', 'message' => 'Error saving data']);
            }
        } else {
            // Error decoding existing data
            echo json_encode(['status' => 'error', 'message' => 'Error decoding existing data']);
        }
    } else {
        // Error decoding JSON from request body
        echo json_encode(['status' => 'error', 'message' => 'Error decoding JSON from request body']);
    }
} else {
    // Request method is not POST
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
