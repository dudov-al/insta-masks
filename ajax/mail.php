<?php
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $subject = "=?utf-8?B?".base64_encode("Заявка на маску")."?=";
    $headers = "From: $name $phone $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail('vivaldi@e.email', $subject, $message, $headers);
    echo $success;
?>