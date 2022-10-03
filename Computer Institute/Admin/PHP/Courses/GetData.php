<?php

    include('../Config.php');

    if (isset($_GET['UpDateID'])) {
        $CourseID = $_GET['UpDateID'];
        
        $SelectQuery = " SELECT * FROM `course` WHERE Course_ID = :CourseID";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindParam(":CourseID", $CourseID);
        $Statement -> execute();
        
        $Data = [];
        
        if ($Statement -> rowCount() > 0) {
            
            while ($Course = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $Data[]= $Course;  
            }
            
        }else{
            $Data['Empty'] = 'Empty';
        }
        
        echo json_encode($Data);
        
    }




?>