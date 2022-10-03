<?php

    include('../Config.php');

    if (isset($_GET['UpdateID'])) {
        $UpdateID = $_GET['UpdateID'];
        
        $SelectQuery = " SELECT * FROM `feature` WHERE Feature_ID = :UpdateID";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindParam(":UpdateID", $UpdateID);
        $Statement -> execute();
        
        $Data = [];
        
        if ($Statement -> rowCount() > 0) {
            
            while ($Feature = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $Data[]= $Feature;  
            }
            
        }else{
            $Data['Empty'] = 'Empty';
        }
        
        echo json_encode($Data);
        
    }




?>