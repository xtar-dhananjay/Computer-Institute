<?php

    include('../Config.php');

    $Img = $_FILES['Img'];
    $Name = $_POST['Name'];
    $Course = $_POST['Course'];
    
    $ImgName = $Img["name"];
    $NewName = 'Pro'. '_' .rand(). '_'. date("Y-m-d"). '_' .$ImgName;
    $Path = '../../Img/Team/' . $NewName;
    $ImgExtan = pathinfo($ImgName, PATHINFO_EXTENSION);
    $ValidExtan = array('jpeg', 'png', 'jpg');

    if (in_array($ImgExtan, $ValidExtan)) {
        if (move_uploaded_file($Img['tmp_name'], $Path)) {
            $InserQuery = " INSERT INTO `team`(`Team_Img`, `Team_Name`, `Team_Position`) VALUES (:NewName,:Name,:Course) ";
    
            $Statement = $Con -> prepare($InserQuery);
            $Statement -> bindParam(":NewName", $NewName);
            $Statement -> bindParam(":Name", $Name);
            $Statement -> bindParam(":Course", $Course);
    
            if ($Statement -> execute()) {
                echo json_encode(array('Status' => 'Success'));
            }
    
    
        }else{
            echo json_encode(array('Status' => 'Image Not Moved'));
        }  
    }else{
        echo json_encode(array('Status' => 'Extanstion Problem'));
    }
        




?>