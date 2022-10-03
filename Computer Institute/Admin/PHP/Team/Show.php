<?php

    include('../Config.php');

    $SelectQuery = " SELECT * FROM `team` ORDER BY Team_ID DESC ";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
    
        while ($Team = $Statement -> fetch(PDO::FETCH_ASSOC)) {
            $Data[]= $Team;  
        }

    }else{
        $Data['Status'] = 'Empty';
    }

    echo json_encode($Data);



?>