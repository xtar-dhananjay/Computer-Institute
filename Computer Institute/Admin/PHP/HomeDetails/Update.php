<?php

    include('../Config.php');
    
    $Feature = $_POST['Feature'];
    $UpdateID = $_POST['UpdateID'];

    $UpdateQuery = " UPDATE `feature` SET `Feature`=:Feature WHERE Feature_ID = :UpdateID ";
    $Statement = $Con -> prepare($UpdateQuery);
    $Statement -> bindParam(':Feature', $Feature);
    $Statement -> bindParam(':UpdateID', $UpdateID);

    if ($Statement -> execute()) {
        echo json_encode(array("Status" => "Success"));
    }else{
        echo json_encode(array("Status" => "Error"));
    }


?>