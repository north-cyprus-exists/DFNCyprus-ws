<?php


use PHPMailer\PHPMailer\PHPMailer;

// if(isset($POST['mpname']) && isset($POST['mpemail'])){
    
$name = $_POST['name'];
$email = $_POST['email'];
$mpemail = $_POST['mpemail'];
$body = nl2br(htmlentities($_POST['body'],ENT_QUOTES, "UTF-8"));
$sub = $name.' - Support the lifting of disembarkation in Turkey for flights to North Cyprus';

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
$mail->setFrom('dfncyprus@gmail.com', $name);
$mail->addAddress($email);     // Add a recipient
//$mail->addCC('dfncyprus@gmail.com'); 
// $mail->addReplyTo('dfncyprus@gmail.com');
$mail->Subject = $sub;
$mail->Body = $body;

// if (!$mail->send()) {
//     echo 'Mailer Error: ' . $mail->ErrorInfo;
// } else {
//     echo 'Message sent!';
// }


  if($mail->send()){
           $status = "success";
            $response = "Email is sent!";
        } else {
           $status = "failed";
            $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;    
            exit(json_encode(array("status" => $status,"response" => $response)));
       }

?>