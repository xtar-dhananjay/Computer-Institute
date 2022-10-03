<?php

    include('../Config.php');

    if (isset($_GET['DeleteID'])) {
        $DeleteID = $_GET['DeleteID'];

        $SelectQuery1 = " SELECT * FROM topstudent Where TopStudent_ID = :DeleteImg";
        $Statement1 = $Con -> prepare($SelectQuery1);
        $Statement1 -> bindParam(":DeleteImg", $DeleteID);
        $Statement1 -> execute();
        $Data = $Statement1 -> fetch(PDO::FETCH_ASSOC);
        $Img = $Data['TopStudent_Img'];
        unlink('../../Img/TopStudents/' .$Img);

        $SelectQuery = " DELETE FROM `topstudent` Where TopStudent_ID = :DeleteID ";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindParam(":DeleteID", $DeleteID);
        if ($Statement -> execute()) {
            echo json_encode(array('Status' => 'Success'));
        }else{
            echo json_encode(array('Status' => 'Error'));
        }
    }








?>