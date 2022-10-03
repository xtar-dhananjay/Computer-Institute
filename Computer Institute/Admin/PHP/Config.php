<?php

    $DataBase = "institute";
    $Server = "localhost";
    $Username = "root";
    $Password = "";


    // Build connection with database
    $Mysql = "mysql:host={$Server};dbname={$DataBase}";
    $Con = new PDO($Mysql, $Username, $Password);


?>