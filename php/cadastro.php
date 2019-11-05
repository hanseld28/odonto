<?php

$email =(isset($_POST['email'])) ? $_POST['email'] : null;

if(!empty($email)) {

    $string = file_get_contents("cadastro.json");
    $mailist = json_decode($string, true);

    $mailist["emails"][] = $email;
    
    $file = fopen('cadastro.json','w');

    fwrite($file, json_encode($mailist));
    fclose($file);
}
?>