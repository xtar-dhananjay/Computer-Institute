<?php

    include '../Config.php';

    $Img = $_FILES['Img'];
    $OldImg = $_POST['OldImg'];
    $UpdateID = $_POST['UpdateID'];
    $Name = $_POST['Name'];
    $Username = strtolower($_POST['Username']);
    $Role = $_POST['Role'];
    

    $ImgName = $Img["name"];
    $UplaodImg = false;
    $ExValid = true;


    if ($ImgName !== ''){

        $NewName = 'Pro'. '_' .rand(). '_'. date("Y-m-d"). '_' .$ImgName;
        $Path = '../../Img/Users/' . $NewName;
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
    
    $UdpateQuery = " UPDATE `users` SET `UserImg`=:NewName,`UserFullName`=:Name,`UserName`=:Username,`User_Role`=:Role WHERE User_ID = :UpdateID ";

    $Statement = $Con -> prepare($UdpateQuery);
    $Statement -> bindParam(":Name", $Name);
    $Statement -> bindParam(":Username", $Username);
    $Statement -> bindParam(":Role", $Role);
    $Statement -> bindParam(":UpdateID", $UpdateID);
    
    if ($ImgName !== '') {
        if ($ExValid == true) {
            if ($UplaodImg == true) {
                $Statement -> bindParam(":NewName", $NewName);
                unlink('../../Img/Users/'.$OldImg);
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