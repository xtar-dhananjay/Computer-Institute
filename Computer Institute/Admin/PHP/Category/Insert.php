<?php

    include('../Config.php');

    $Input = file_get_contents('php://input');
    $Data = json_decode($Input, true);
    $CategoryName = $Data['CategoryName'];

    $CheckName = " SELECT * FROM `category` WHERE Category_Name = :Category ";
    $Statement = $Con -> prepare($CheckName);
    $Statement -> bindParam(':Category', $CategoryName);
    $Statement -> execute();
    if ($Statement -> rowCount() > 0) {
        echo json_encode(array("Status" => "Already Added"));
    }else{
        $InsertQuery = "INSERT INTO `category`(`Category_Name`) VALUES (:CategoryName)";
        $StateMent = $Con -> prepare($InsertQuery);
        $StateMent -> bindParam(":CategoryName", $CategoryName);
    
        if ($StateMent -> execute()) {
            echo json_encode(array("Status" => "Success"));
        }else{
            echo json_encode(array("Status" => "Error"));
        }
    }
        




?>