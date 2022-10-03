<?php

    include('../Config.php');

    $Input = file_get_contents('php://input');
    $InputData = json_decode($Input, true);
    $Search = $InputData['Search'];
    $SearchField = $InputData['SearchField'];
        
    
    $SelectQuery = " SELECT SN, Student_ID, Student_Name, Phone FROM students WHERE {$SearchField} LIKE '%' :Search '%' ORDER BY SN DESC ";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> bindparam(':Search', $Search);
    $Statement -> execute();

    $OutPut = [];

    if ($Statement -> rowCount() > 0) {

        while ($Data = $Statement -> fetch(PDO::FETCH_ASSOC)) {
            $OutPut[]= $Data;  
        }

    }else{
        $OutPut['Empty'] = 'Empty';
    }

    echo json_encode($OutPut);




?>