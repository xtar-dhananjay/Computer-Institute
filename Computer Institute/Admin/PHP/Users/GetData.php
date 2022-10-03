<?php

    include('../Config.php');

    if (isset($_GET['UpdateID'])) {
        $UpdateID = $_GET['UpdateID'];
        
        $SelectQuery = " SELECT User_ID, UserImg, UserFullName, UserName, User_Role FROM `users` WHERE User_ID = :UpdateID";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindParam(":UpdateID", $UpdateID);
        $Statement -> execute();
        
        $Data = [];
        
        if ($Statement -> rowCount() > 0) {
            
            while ($Users = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $Data[]= $Users;  
            }
            
        }else{
            $Data['Empty'] = 'Empty';
        }
        
        echo json_encode($Data);
        
    }




?>