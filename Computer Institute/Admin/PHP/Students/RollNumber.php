<?php

    include('../Config.php');
        
    $SelectQuery = " SELECT SN FROM `students` ";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> execute();
    
    $Data = '';
    
    if ($Statement -> rowCount() > 0) {
        
        while ($Student = $Statement -> fetch(PDO::FETCH_ASSOC)) {
            $Data = $Student['SN'];  
        }
        
    }
    
    echo json_encode(array('Count' => $Data));
        




?>