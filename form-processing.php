#!/usr/bin/env php
<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$dbname = 'contactform.db';

$db = new SQLite3($dbname);


$title = $_POST['title'];
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$emailErr = " ";
$request = $_POST['request'];
$dataprivacy = $_POST['dataprivacy'];
$descriptiontext = $_POST['descriptiontext'];

$db->exec("INSERT INTO contacts(title,fullname,email,request,dataprivacy) VALUES ('$title','$fullname','$email','$request','$dataprivacy')");

if ($descriptiontext != '') {
    $lastid = $db->lastInsertRowID();
    $db->exec("INSERT INTO descriptiontext(id,descriptiontext) VALUES ($lastid, '$descriptiontext')");
}


// echo $_POST['title'];
// echo $_POST['fullname'];
// echo $_POST['email'];
// echo $_POST['request'];
// echo $_POST['dataprivacy'];
// echo $_POST['descriptiontext'];



    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }



    /*
