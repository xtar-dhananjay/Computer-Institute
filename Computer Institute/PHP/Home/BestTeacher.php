<?php

    include '../../Admin/PHP/Config.php';

    $Best = 'Best'; 
    $SelectQuery = " SELECT * FROM `team` WHERE BestTeachers = :Best ORDER BY Team_ID DESC";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> bindParam(":Best", $Best);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
    
        while ($BestTeachers = $Statement -> fetch(PDO::FETCH_ASSOC)) {
            $Data[]= $BestTeachers;  
        }

    }else{
        $Data['Status'] = 'Empty';
    }

    echo json_encode($Data);



?>