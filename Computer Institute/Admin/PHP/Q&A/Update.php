<?php

    include('../Config.php');
    
    $Question = $_POST['Question'];
    $Answer = $_POST['Answer'];
    $UdpateID = $_POST['UpdateID']; 

    $UpdateQuery = " UPDATE `qn` SET `Question`=:Question,`Answer`=:Answer WHERE QN_ID = :UdpateID ";
    $Statement = $Con -> prepare($UpdateQuery);
    $Statement -> bindParam(':Question', $Question);
    $Statement -> bindParam(':Answer', $Answer);
    $Statement -> bindParam(':UdpateID', $UdpateID, PDO::PARAM_INT);

    if ($Statement -> execute()) {
        echo json_encode(array("Status" => "Success"));
    }else{
        echo json_encode(array("Status" => "Error"));
    }


?>