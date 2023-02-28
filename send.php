<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
  
    $to = "paul.giroux87@gmail.com"; // Replace with your email address
    $subject = "New message from Portfolio : $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
  
    if (mail($to, $subject, $body)) {
      header("Location: /contact.html?success=1");
    } else {
        header("Location: /contact.html?success=0");
    }
  }
?>