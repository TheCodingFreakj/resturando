<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type, Accept");
// echo "khkl";
 var_dump($_POST['submit']);
// isset($_POST['name']) 
// || isset($_POST['email'])
//  || isset($_POST['phone']) 
//  || isset($_POST['date'])
//  || isset($_POST['guests'])
//  || isset($_POST['time'])
// If form is submitted 

    // Get the submitted form data 
    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $date = $_POST['date']; 
    $phone = $_POST['phone']; 
    $guests = $_POST['guests']; 
    $time = $_POST['time']; 
    
    // Check whether submitted data is not empty 
    if(!empty($name) && !empty($phone) && !empty($email) && !empty($time)&& !empty($guests)&& !empty($date)){ 
        include "./config.php"; 
   
          

                 
                // Insert form data in the database 
                $sqlQ = "INSERT INTO reservations (email,date,name,time, guests, phone) VALUES (?,?,?,?,?,?)"; 
                $stmt = $conn->prepare($sqlQ); 
                $stmt->bind_param("ssssss", $email, $date, $name, $time, $guests, $phone); 
                $insert = $stmt->execute(); 
                 
                if($insert){ 
                    $response['status'] = 1; 
                    $response['message'] = 'Form data submitted successfully!'; 
                } 
      
      
    }else{ 
         $response['message'] = 'Please fill all the mandatory fields (name and email).'; 
    } 

// Return response 
echo json_encode($response);
