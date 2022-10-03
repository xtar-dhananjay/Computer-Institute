<?php

    include('../Config.php');

    if (isset($_GET['UpdateID'])) {
        $UpdateID = $_GET['UpdateID'];
        
        $SelectQuery = " SELECT * FROM `qn` WHERE QN_ID = :UpdateID";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindParam(":UpdateID", $UpdateID);
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