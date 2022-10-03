<?php

    include('../Config.php');

     

    if (isset($_GET['DeleteID'])) {
        $DeleteID = $_GET['DeleteID'];

        $NotDelete = array(117, 108, 107);

        if (in_array($DeleteID, $NotDelete)) {
            echo json_encode(array('Status' => 'BestCourse'));
        }else{
            $SelectQuery1 = " SELECT * FROM course Where Course_ID = :DeleteImg";
            $Statement1 = $Con -> prepare($SelectQuery1);
            $Statement1 -> bindParam(":DeleteImg", $DeleteID);
            $Statement1 -> execute();
            $Data = $Statement1 -> fetch(PDO::FETCH_ASSOC);
            $Img = $Data['Img'];
            unlink('../../Img/Course/' .$Img);
    
            $SelectQuery = " DELETE FROM `course` Where Course_ID = :DeleteID ";
            $Statement = $Con -> prepare($SelectQuery);
            $Statement -> bindParam(":DeleteID", $DeleteID);
            if ($Statement -> execute()) {
                echo json_encode(array('Status' => 'Success'));
            }else{
                echo json_encode(array('Status' => 'Error'));
            }
        }

    }








?>