<?php

    include('../Config.php');

    if (isset($_GET['StudentID'])) {
        $StudentID = $_GET['StudentID'];
        
        $SelectQuery = " SELECT * FROM `students` WHERE SN = :StudentID";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindParam(":StudentID", $StudentID);
        $Statement -> execute();
        
        $Data = [];
        
        if ($Statement -> rowCount() > 0) {
            
            while ($Student = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $Data[]= $Student;  
            }
            
        }else{
            $Data['Empty'] = 'Empty';
        }
        
        echo json_encode($Data);
        
    }




?>