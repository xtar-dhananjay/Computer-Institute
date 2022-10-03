<?php

        
    include('../Config.php');

    $Input = file_get_contents('php://input');
    $ApiData = json_decode($Input, true);
    $CategoryID = $ApiData['DeleteID'];

    $SelectQuery = " DELETE FROM `category` Where Category_ID = :CategoryID ";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> bindParam(":CategoryID", $CategoryID);
    if ($Statement -> execute()) {
        echo json_encode(array('Status' => 'Success'));
    }else{
        echo json_encode(array('Status' => 'Error'));
    }





?>