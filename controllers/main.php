<?php
include('way2sms.php');
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$message = $_POST['message'];

if(sendWay2SMS($message)){
	echo 'send';
}

?>