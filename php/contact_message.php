<?php

$message = (isset($_POST)) ? $_POST : null;

if(!empty($message))
{
    $string = file_get_contents("contact_message.json");

    $json = json_decode($string, true);

<<<<<<< HEAD
    $json["mensagens"][] = $message;

    $file = fopen('contact_message.json', 'w');

    fwrite($file, json_encode($json));

=======
$arq_json = (isset($_POST)) ? json_encode($_POST) : null;

if(!empty($arq_json))
{
    $name = 'contact_message.txt';
    $file = fopen($name, 'a');
    fwrite($file, $arq_json);
>>>>>>> a729dabea7f3cfd28008aadbde4e1b491d4f6688
    fclose($file);
}
?>