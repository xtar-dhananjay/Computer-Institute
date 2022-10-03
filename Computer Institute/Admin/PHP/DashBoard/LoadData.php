<?php

    include '../Config.php';

    $SelectQuery = " SELECT * FROM `inquiry` ORDER BY Message_ID DESC"; 
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
        while($Inquiry = $Statement -> fetch(PDO::FETCH_ASSOC)){
            $Data[] = $Inquiry;
        }
    }else{
        $Data["Status"] = "Empty";
    }

    echo json_encode($Data);






?>