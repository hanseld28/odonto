<?php


//echo var_dump($_POST);


$arq_json = (isset($_POST)) ? json_encode($_POST) : null;

if(!empty($arq_json))
{
    $name = 'contact_message.txt';
    $file = fopen($name, 'a');
    fwrite($file, $arq_json);
    fclose($file);
}
?>