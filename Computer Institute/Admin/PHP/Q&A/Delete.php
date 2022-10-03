<?php

        
    include('../Config.php');

    if (isset($_GET['DeleteID'])) {
        $DeleteID = $_GET['DeleteID'];
    
        $DeleteQuery = " DELETE FROM `qn` Where QN_ID = :DeleteID ";
        $Statement = $Con -> prepare($DeleteQuery);
        $Statement -> bindParam(":DeleteID", $DeleteID);
        if ($Statement -> execute()) {
            echo json_encode(array('Status' => 'Success'));
        }else{
            echo json_encode(array('Status' => 'Error'));
        }

    }






?>