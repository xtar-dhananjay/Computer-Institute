<?php

    include '../../Admin/PHP/Config.php';

    $SelectQuery = " SELECT * FROM `feature` "; 
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
        while($Feature = $Statement -> fetch(PDO::FETCH_ASSOC)){
            $Data[] = $Feature;
        }
    }else{
        $Data["Status"] = ["Empty"];
    }

    echo json_encode($Data);






?>