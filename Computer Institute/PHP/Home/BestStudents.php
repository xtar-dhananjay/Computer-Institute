<?php

    include '../../Admin/PHP/Config.php';

    $Page = 0;
    $Limit = 3;

    $SelectQuery = " SELECT * FROM `topstudent` ORDER BY TopStudent_ID DESC LIMIT $Page, $Limit  ";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
    
        while ($BestStudents = $Statement -> fetch(PDO::FETCH_ASSOC)) {
            $Data[]= $BestStudents;  
        }

    }else{
        $Data['Status'] = 'Empty';
    }

    echo json_encode($Data);



?>