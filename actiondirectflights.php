<?php
use PHPMailer\PHPMailer\PHPMailer;

// if(isset($POST['mpname']) && isset($POST['mpemail'])){

// $name = $POST['name'];
$email = $_POST['email'];
$body = nl2br(htmlentities($_POST['body'],ENT_QUOTES, "UTF-8"));

require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

$mail = new PHPMailer;


//SMTP settings
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'dfncyprus@gmail.com';                 // SMTP username
$mail->Password = 'D1rectflights!';                           // SMTP password
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';                            // Enable encryption, 'ssl' also accepted

//email settings
$mail->isHTML(true);                                  // Set email format to HTML
$mail->setFrom('dfncyprus@gmail.com');
$mail->addAddress($email);     // Add a recipient
$mail->addCC($email);
$mail->Subject = "Direct Flights to North Cyprus";
$mail->Body = $body;

    if($mail->send())
        $response = "Success";
        else
        $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;    
        exit(json_encode(array("response" => $response)));


?>