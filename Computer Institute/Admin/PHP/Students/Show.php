<?php

    include '../Config.php';
    $Limit = 10;
    if (isset($_GET['Page'])) {
        $Page = $_GET['Page'];
        if ($Page == '') {
            $Page = 0;
        }

        if ($Page == 0) {
            $Limit = 20;
        }
            
        $SelectQuery = " SELECT SN, Student_ID, Student_Name, Phone FROM students ORDER BY SN DESC LIMIT $Page, $Limit ";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> execute();

        $Data = [];

        if ($Statement -> rowCount() > 0) {

            while ($Students = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $Data[]= $Students;  
            }

        }else{
            $Data['Status'] = 'Empty';
        }
        echo json_encode($Data);
        
        
        
    }
    
    // echo json_encode(array('Data' => $_GET['Page']));
?>