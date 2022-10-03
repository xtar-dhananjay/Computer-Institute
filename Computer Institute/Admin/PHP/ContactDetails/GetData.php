<?php

    include('../Config.php');

    $UpdteID = 1;
    
    $SelectQuery = " SELECT * FROM `contactinfo` WHERE CInfo_ID = :UpdteID";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> bindParam(":UpdteID", $UpdteID);
    $Statement -> execute();
    
    $Data = [];
    
    if ($Statement -> rowCount() > 0) {
        
        while ($ContactDetails = $Statement -> fetch(PDO::FETCH_ASSOC)) {
            $Data[]= $ContactDetails;  
        }
        
    }else{
        $Data['Empty'] = 'Empty';
    }
    
    echo json_encode($Data);
        





?>