<?php

    include '../Config.php';

    $SelectQuery = " SELECT * FROM `category` ORDER BY Category_ID DESC"; 
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
        while($Category = $Statement -> fetch(PDO::FETCH_ASSOC)){
            $Data[] = $Category;
        }
    }else{
        $Data["Status"] = ["Empty"];
    }

    echo json_encode($Data);






?>