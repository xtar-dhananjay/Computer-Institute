<?php

    include '../../Admin/PHP/Config.php';

    $SelectQuery = " SELECT * FROM `qn` ORDER BY QN_ID DESC"; 
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
        while($QN = $Statement -> fetch(PDO::FETCH_ASSOC)){
            $Data[] = $QN;
        }
    }else{
        $Data["Status"] = "Empty";
    }

    echo json_encode($Data);






?>