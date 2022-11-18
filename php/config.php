<?php
$host = "sql12.freesqldatabase.com";
$userName = "sql12578844";
$password = "RSDdHTjqJf";
$dbName = "sql12578844";
// Create database connection
$conn = new mysqli($host, $userName, $password, $dbName);

// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>

