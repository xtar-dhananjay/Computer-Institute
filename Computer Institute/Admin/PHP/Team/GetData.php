<?php

    include('../Config.php');

    if (isset($_GET['UpdateID'])) {
        $UpdteID = $_GET['UpdateID'];
        
        $SelectQuery = " SELECT * FROM `team` WHERE Team_ID = :UpdteID";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindParam(":UpdteID", $UpdteID);
        $Statement -> execute();
        
        $Data = [];
        
        if ($Statement -> rowCount() > 0) {
            
            while ($Team = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $Data[]= $Team;  
            }
            
        }else{
            $Data['Empty'] = 'Empty';
        }
        
        echo json_encode($Data);
        
    }




?>