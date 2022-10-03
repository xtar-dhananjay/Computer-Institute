<?php

    include('../Config.php');
    
    $Map = $_POST['Map'];
    $Email = $_POST['Email'];
    $Phone1 = $_POST['Phone1']; 
    $Phone2 = $_POST['Phone2']; 
    $Timing = $_POST['Timing']; 
    $Address = $_POST['Address']; 
    $UpdateID = $_POST['UpdateID']; 

    $UpdateQuery = " UPDATE `contactinfo` SET `CInfo_Map`=:Map,`CInfo_Email`=:Email,`CInfo_Phone1`=:Phone1,`CInfo_Phone2`=:Phone2,`CInfo_Timing`=:Timing,`CInfo_Address`=:Address WHERE CInfo_ID = :UpdateID ";
    $Statement = $Con -> prepare($UpdateQuery);
    $Statement -> bindParam(':UpdateID', $UpdateID);
    $Statement -> bindParam(':Map', $Map);
    $Statement -> bindParam(':Email', $Email);
    $Statement -> bindParam(':UpdateID', $UpdateID);
    $Statement -> bindParam(':Phone1', $Phone1);
    $Statement -> bindParam(':Phone2', $Phone2);
    $Statement -> bindParam(':Timing', $Timing);
    $Statement -> bindParam(':Address', $Address);

    if ($Statement -> execute()) {
        echo json_encode(array("Status" => "Success"));
    }else{
        echo json_encode(array("Status" => "Error"));
    }


?>