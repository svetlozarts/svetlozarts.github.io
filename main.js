document.addEventListener("DOMContentLoaded", function() {
    // Update the path to your programa.json file
    const programaJsonPath = "programa.json";
    const saveChangesUrl = 'send.php'; // Replace with the actual path


    // Function to extract unique class values
    function extractClassValues(data) {
        const classSet = new Set();

        data.forEach(item => {
            const keys = Object.keys(item);
            classSet.add(keys[0]);
        });

        return Array.from(classSet);
    }

    // Function to extract unique hour values
    function extractHourValues(data) {
        const hourSet = new Set();

        data.forEach(item => {
            const keys = Object.keys(item);
            hourSet.add(item[keys[0]]);
        });

        return Array.from(hourSet);
    }

    // Function to extract unique day values
    function extractDayValues(data) {
        const daySet = new Set();

        data.forEach(item => {
            const keys = Object.keys(item);
            for (let i = 1; i <= 5; i++) {
                const dayKey = keys[i];
                if (dayKey) {
                    daySet.add(dayKey);
                }
            }
        });

        return Array.from(daySet);
    }

    // Function to populate a <select> element with options
    function populateSelect(selectId, values) {
        const select = document.getElementById(selectId);
        values.forEach(value => {
            const option = document.createElement("option");
            option.value = value;
            option.text = value;
            select.appendChild(option);
        });
    }

    // Update the subject input's placeholder based on the selected values
    function updateSubjectPreview() {
        const selectedClass = document.getElementById("class").value;
        const selectedHour = document.getElementById("hour").value;
        const selectedDay = document.getElementById("day").value;

        

        fetch(programaJsonPath)
            .then(response => response.json())
            .then(data => {
                let selectedSubject = "Select a day";

                for (const dayKey in data) {
                    if (data[dayKey][selectedClass] && data[dayKey][selectedClass] === selectedHour) {
                        selectedSubject = data[dayKey][selectedDay]; // Get the corresponding subject
                        break;
                    }
                }

                document.getElementById("subject").setAttribute("placeholder", selectedSubject);
            })
            .catch(error => {
                console.error("Error loading JSON data:", error);
            });
    }

    // Extract and populate the class, hour, and day select elements
    fetch(programaJsonPath)
        .then(response => response.json())
        .then(data => {
            const classValues = extractClassValues(data);
            const hourValues = extractHourValues(data);
            const dayValues = extractDayValues(data);

            populateSelect("class", classValues);
            populateSelect("hour", hourValues);
            populateSelect("day", dayValues);

            // Listen for changes in the select elements
            document.getElementById("class").addEventListener("change", updateSubjectPreview);
            document.getElementById("hour").addEventListener("change", updateSubjectPreview);
            document.getElementById("day").addEventListener("change", updateSubjectPreview);

            window.addEventListener("load", updateSubjectPreview);
        })
        .catch(error => {
            console.error("Error loading JSON data:", error);
        });

    // Handle form submission
    document.getElementById("scheduleForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const inputSubject = document.getElementById("subject").value; // Get the input field's value

        // Create an object with the subject data to save
        const dataToSave = {
            subject: inputSubject
        };

        // Send the data to the PHP script using a fetch POST request
        fetch(saveChangesUrl, {
            method: 'POST',
            body: JSON.stringify(dataToSave),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(result => {
            // Handle the response from the server (e.g., show a success message or handle errors)
            console.log(result);

            // Clear the input field after successful submission
            document.getElementById("subject").value = '';
        })
        .catch(error => {
            console.error('Error saving data:', error);
        });
    });
});
