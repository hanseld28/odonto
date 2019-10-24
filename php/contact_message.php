<?php


//echo var_dump($_POST);



$arq_json = json_encode($_POST);


//echo $arq_json;



/*
$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$descricao = $_POST['descricao'];

echo $nome;
*/



$name = 'contact_message.txt';
$file = fopen($name, 'a');
fwrite($file, $arq_json);

fclose($file);

?>