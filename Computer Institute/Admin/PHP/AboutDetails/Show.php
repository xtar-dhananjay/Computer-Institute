<?php

    include '../Config.php';

    $SelectQuery = " SELECT * FROM `about` ORDER BY About_ID DESC"; 
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
        while($AboutDetails = $Statement -> fetch(PDO::FETCH_ASSOC)){
            $Data[] = $AboutDetails;
        }
    }else{
        $Data["Status"] = ["Empty"];
    }

    echo json_encode($Data);






?>