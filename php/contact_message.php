<?php

$message = (isset($_POST)) ? $_POST : null;

if(!empty($message))
{
    $string = file_get_contents("contact_message.json");

    $json = json_decode($string, true);

    $json["mensagens"][] = $message;

    $file = fopen('contact_message.json', 'w');

    fwrite($file, json_encode($json));

    fclose($file);
}
?>