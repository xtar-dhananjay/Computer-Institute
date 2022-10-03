<?php

    include '../../Admin/PHP/Config.php';


    $Best = 'Best';
    $SelectQuery = " SELECT * FROM `course` WHERE BestCourse = :Best ORDER BY Course_ID DESC"; 
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> bindParam(":Best", $Best);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
        while($BestCourse = $Statement -> fetch(PDO::FETCH_ASSOC)){
            $Data[] = $BestCourse;
        }
    }else{
        $Data["Status"] = 'Empty';
    }

    echo json_encode($Data);






?>