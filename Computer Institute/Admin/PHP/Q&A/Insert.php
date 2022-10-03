<?php

    include('../Config.php');

    $Question = $_POST['Question'];
    $Answer = $_POST['Answer'];

    $CheckName = " SELECT * FROM `qn` WHERE Question = :CheckQuestion ";
    $Statement = $Con -> prepare($CheckName);
    $Statement -> bindParam(':CheckQuestion', $Question );
    $Statement -> execute();
    if ($Statement -> rowCount() > 0) {
        echo json_encode(array("Status" => "Already Added"));
    }else{
        $InsertQuery = " INSERT INTO `qn`(`Question`, `Answer`) VALUES (:Question,:Answer) ";
        $StateMent = $Con -> prepare($InsertQuery);
        $StateMent -> bindParam(":Question", $Question);
        $StateMent -> bindParam(":Answer", $Answer);
    
        if ($StateMent -> execute()) {
            echo json_encode(array("Status" => "Success"));
        }else{
            echo json_encode(array("Status" => "Error"));
        }
    }


?>