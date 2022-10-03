<?php

    include('../Config.php');

    $Img = $_FILES['Img'];
    $Name = $_POST['Name'];
    $Username = strtolower($_POST['Username']);
    $Password = md5($_POST['Password']);
    $Role = $_POST['Role'];

    
    $CheckName = " SELECT * FROM `users` WHERE UserName = :UserName ";
    $Statement = $Con -> prepare($CheckName);
    $Statement -> bindParam(':UserName', $Username);
    $Statement -> execute();
    
    if ($Statement -> rowCount() > 0) {
        echo json_encode(array("Status" => "Already Added"));
    }else{
        $ImgName = $Img["name"];
        $NewName = 'Pro'. '_' .rand(). '_'. date("Y-m-d"). '_' .$ImgName;
        $Path = '../../Img/Users/' . $NewName;
        $ImgExtan = pathinfo($ImgName, PATHINFO_EXTENSION);
        $ValidExtan = array('jpeg', 'png', 'jpg');
        if (in_array($ImgExtan, $ValidExtan)) {
            if (move_uploaded_file($Img['tmp_name'], $Path)) {
                $InserQuery = " INSERT INTO `users`(`UserImg`, `UserFullName`, `UserName`, `UserPassword`, `User_Role`) VALUES (:NewName,:Name,:Username,:Password,:Role) ";
        
                $Statement = $Con -> prepare($InserQuery);
                $Statement -> bindParam(":NewName", $NewName);
                $Statement -> bindParam("Name", $Name);
                $Statement -> bindParam("Username", $Username);
                $Statement -> bindParam("Password", $Password);
                $Statement -> bindParam("Role", $Role);
        
                if ($Statement -> execute()) {
                    echo json_encode(array('Status' => 'Success'));
                }
        
        
            }else{
                echo json_encode(array('Status' => 'Image Not Moved'));
            }  
        }else{
            echo json_encode(array('Status' => 'Extanstion Problem'));
        }
    }


?>