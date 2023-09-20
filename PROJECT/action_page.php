<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $question = $_POST["name"]; // Change "name" to match your input field name
    $options = $_POST["options"]; // Assuming you have a field for options (comma-separated)
    
    // Process the data (you can perform any necessary actions here)
    
    // For this example, we'll simply print the submitted data
    echo "Question: " . $question . "<br>";
    echo "Options: " . $options . "<br>";
} else {
    // Redirect or display an error message if the form was not submitted properly
    echo "Form not submitted.";
}
?>
