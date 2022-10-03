<?php

    include('../Config.php');
    session_start();
    
    $Username = strtolower($_POST['Username']);
    $Password = $_POST['Password'];

    $CheckUsername = " SELECT * FROM `users` WHERE UserName = :Username ";
    $Statement = $Con -> prepare($CheckUsername);
    $Statement -> bindParam(':Username', $Username);
    $Statement -> execute();
    if ($Statement -> rowCount() > 0) {
        $Data = $Statement -> fetch(PDO::FETCH_ASSOC);
        $DataUserName = $Data['UserName'];
        $DataPassWord = $Data['UserPassword'];
        if (md5($Password) == $DataPassWord) {
            $_SESSION['UserImg'] = $Data['UserImg'];
            $_SESSION['UserRole'] = $Data['User_Role'];
            if (isset($_SESSION['UserImg']) AND isset($_SESSION['UserRole'])) {
                echo json_encode(array("Status" => 'Sucess'));
            }
            
        }else{
            echo json_encode(array("Status" => 'Wrong Password'));

        }
    }else{
        echo json_encode(array("Status" => 'Invalid Username'));

    }
    



?>