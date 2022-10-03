<?php

    include('../Config.php');

        
    $SelectQuery = " SELECT * FROM `course` ";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();
    $TotalData = $Statement -> rowCount();

    echo json_encode(array('TotalData' => $TotalData));




?>