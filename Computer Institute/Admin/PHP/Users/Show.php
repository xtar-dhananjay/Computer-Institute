<?php

    include '../Config.php';

    $SelectQuery = " SELECT * FROM `users` ORDER BY User_ID DESC"; 
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
        while($Users = $Statement -> fetch(PDO::FETCH_ASSOC)){
            $Data[] = $Users;
        }
    }else{
        $Data["Status"] = ["Empty"];
    }

    echo json_encode($Data);






?>