<?php

    include '../../Admin/PHP/Config.php';

    $Limit = 6;
    if (isset($_GET['Page'])) {
        $Page = $_GET['Page'];
        if ($Page == '') {
            $Page = 0;
        }

        if ($Page == 0) {
            $Limit = 9;
        }
            
        $SelectQuery = " SELECT Course_ID, Img, CourseTitle, Price, NFA, Rating FROM course ORDER BY Course_ID DESC LIMIT $Page, $Limit ";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> execute();

        $Data = [];

        if ($Statement -> rowCount() > 0) {

            while ($Courses = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $Data[]= $Courses;  
            }

        }else{
            $Data['Status'] = 'Empty';
        }
        echo json_encode($Data);
        
        
        
    }
    
    // echo json_encode(array('Data' => $_GET['Page']));
?>

