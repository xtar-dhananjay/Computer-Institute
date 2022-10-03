<?php

    include('../Config.php');

    $Input = file_get_contents('php://input');
    $ApiData = json_decode($Input, true);
    $CategoryID = $ApiData['UpdateID'];
    $CategoryName = $ApiData['CategoryName'];

    $SelectQuery = " UPDATE `category` SET `Category_Name`= :CategoryName WHERE Category_ID = :CategoryID ";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> bindParam(":CategoryID", $CategoryID);
    $Statement -> bindParam(":CategoryName", $CategoryName);
    
    $Data = '';

    if ($Statement -> execute()) {
        $Data = json_encode(array("Status" => "Success"));
    }else{
        $Data = json_encode(array("Status" => "Error"));
    }

    echo $Data;





?>