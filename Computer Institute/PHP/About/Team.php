<?php

    include '../../Admin/PHP/Config.php';

    $SelectQuery = " SELECT * FROM `team` ORDER BY Team_ID DESC  ";
    $Statement = $Con -> prepare($SelectQuery);
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