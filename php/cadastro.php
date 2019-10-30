<?php
        $email =(isset($_POST['email-form-ins'])) ? $_POST['email-form-ins'] : null;

        if(!empty($email)){

            $string = file_get_contents("cadastro.json");
            $json = json_decode($string, true);
            
            $json["emails"][] =  $email;
            
            $file = fopen('cadastro.json','w');

            fwrite($file, json_encode($json));
            fclose($file);
        }

?>