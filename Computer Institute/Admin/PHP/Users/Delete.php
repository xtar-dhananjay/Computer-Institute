<?php

    include('../Config.php');

    if (isset($_GET['DeleteID'])) {
        $DeleteID = $_GET['DeleteID'];

        $SelectQuery1 = " SELECT * FROM users Where User_ID = :DeleteImg";
        $Statement1 = $Con -> prepare($SelectQuery1);
        $Statement1 -> bindParam(":DeleteImg", $DeleteID);
        $Statement1 -> execute();
        $Data = $Statement1 -> fetch(PDO::FETCH_ASSOC);
        $Img = $Data['UserImg'];
        unlink('../../Img/Users/' .$Img);

        $SelectQuery = " DELETE FROM `users` Where User_ID = :DeleteID ";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindParam(":DeleteID", $DeleteID);
        if ($Statement -> execute()) {
            echo json_encode(array('Status' => 'Success'));
        }else{
            echo json_encode(array('Status' => 'Error'));
        }
    }








?>