<?php

    include '../Config.php';

    $Img = $_FILES['Img'];
    $StudentID = $_POST['StudentID'];
    $OldImg = $_POST['OldImg'];
    $Name = $_POST['Name'];
    $Course = $_POST['Course'];
    

    $ImgName = $Img["name"];
    $UplaodImg = false;
    $ExValid = true;


    if ($ImgName !== ''){

        $NewName = 'Pro'. '_' .rand(). '_'. date("Y-m-d"). '_' .$ImgName;
        $Path = '../../Img/Team/' . $NewName;
        $ImgExtan = pathinfo($ImgName, PATHINFO_EXTENSION);
        $ValidExtan = array('jpeg', 'png', 'jpg');
        if (in_array($ImgExtan, $ValidExtan)) {

            if (move_uploaded_file($Img['tmp_name'], $Path)) {
                $UplaodImg = true;        
            }
        }else{
            $ExValid = false;
        }
    }
    
    $UdpateQuery = " UPDATE `team` SET `Team_Img`=:NewName,`Team_Name`=:Name,`Team_Position`=:Course WHERE Team_ID = :StudentID ";

    $Statement = $Con -> prepare($UdpateQuery);
    $Statement -> bindParam(":StudentID", $StudentID);
    $Statement -> bindParam(":Name", $Name);
    $Statement -> bindParam(":Course", $Course);
    
    if ($ImgName !== '') {
        if ($ExValid == true) {
            if ($UplaodImg == true) {
                $Statement -> bindParam(":NewName", $NewName);
                unlink('../../Img/Team/'.$OldImg);
            }
        }else{
            echo json_encode(array('Status' => 'Extanstion Problem'));
            exit();
        }
    }else{
        $Statement -> bindParam(":NewName", $OldImg);
    }

    if ($Statement -> execute()) {
        echo json_encode(array('Status' => 'Success'));
    }else{
        echo json_encode(array('Status' => 'Error'));
    }









?>