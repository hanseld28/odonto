<?php

$appointment = (isset($_POST)) ? $_POST : null;


if(!empty($appointment))
{
    $string = file_get_contents("appointment_scheduling.json");

    $json = json_decode($string, true);

    $json["consultas"][] = $appointment;

    $file = fopen('appointment_scheduling.json', 'w');

    fwrite($file, json_encode($json));

    fclose($file);
}
?>