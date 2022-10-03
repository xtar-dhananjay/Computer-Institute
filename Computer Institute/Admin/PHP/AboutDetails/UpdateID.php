<?php

    include('../Config.php');
    
    $AboutTitle1 = $_POST['AboutTitle1'];
    $AboutDesc1 = $_POST['AboutDesc1'];
    $AboutTitle2 = $_POST['AboutTitle2']; 
    $AboutDesc2 = $_POST['AboutDesc2']; 
    $HomeDesc = $_POST['HomeDesc']; 
    $InstituteName = $_POST['InstituteName']; 
    $Copyright = $_POST['Copyright']; 
    $UpdateID = $_POST['UpdateID']; 

    $UpdateQuery = " UPDATE `about` SET `AboutTitle1`=:AboutTitle1,`AboutDesc1`=:AboutDesc1,`AboutTitle2`=:AboutTitle2,`AboutDesc2`=:AboutDesc2,`HomeAbout`=:HomeDesc,`InstituteName`=:InstituteName,`CopyRight`=:Copyright WHERE About_ID =  :UpdateID";
    $Statement = $Con -> prepare($UpdateQuery);
    $Statement -> bindParam(':AboutTitle1', $AboutTitle1);
    $Statement -> bindParam(':AboutDesc1', $AboutDesc1);
    $Statement -> bindParam(':AboutTitle2', $AboutTitle2);
    $Statement -> bindParam(':AboutDesc2', $AboutDesc2);
    $Statement -> bindParam(':HomeDesc', $HomeDesc);
    $Statement -> bindParam(':InstituteName', $InstituteName);
    $Statement -> bindParam(':Copyright', $Copyright);
    $Statement -> bindParam(':UpdateID', $UpdateID);

    if ($Statement -> execute()) {
        echo json_encode(array("Status" => "Success"));
    }else{
        echo json_encode(array("Status" => "Error"));
    }


?>