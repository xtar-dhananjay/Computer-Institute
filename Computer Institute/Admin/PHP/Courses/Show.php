<?php

    include '../Config.php';
    $Limit = 5;
    if (isset($_GET['Page'])) {
        $Page = $_GET['Page'];
        if ($Page == '') {
            $Page = 0;
        }

        if ($Page == 0) {
            $Limit = 15;
        }
            
        $SelectQuery = " SELECT * FROM course ORDER BY Course_ID DESC LIMIT $Page, $Limit ";
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
















<?php

    // include '../Config.php';

    // $SelectQuery = " SELECT * FROM `course` ORDER BY Course_ID DESC "; 
    // $Statement = $Con -> prepare($SelectQuery);
    // $Statement -> execute();

    // $Data = [];

    // if ($Statement -> rowCount() > 0) {
    //     while($Courses = $Statement -> fetch(PDO::FETCH_ASSOC)){
    //         $Data[] = $Courses;
    //     }
    // }else{
    //     $Data["Status"] = ["Empty"];
    // }

    // echo json_encode($Data);






?>


