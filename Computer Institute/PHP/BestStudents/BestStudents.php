<?php

    include '../../Admin/PHP/Config.php';

    $Limit = 6;
    if (isset($_GET['Page'])) {
        $Page = $_GET['Page'];
        if ($Page == '') {
            $Page = 0;
        }

        $SelectQuery = " SELECT * FROM `topstudent` ORDER BY TopStudent_ID DESC LIMIT $Page, $Limit ";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> execute();

        $Data = [];

        if ($Statement -> rowCount() > 0) {
        
            while ($TopStudents = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $Data[]= $TopStudents;  
            }

        }else{
            $Data['Status'] = 'Empty';
        }

        echo json_encode($Data);
    }



?>