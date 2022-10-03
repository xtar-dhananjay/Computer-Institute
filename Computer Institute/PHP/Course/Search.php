<?php

    include '../../Admin/PHP/Config.php';

    if (isset($_GET['SearchTerm'])) {
        $Search = $_GET['SearchTerm'];
        
        $SelectQuery = " SELECT Course_ID, Img, CourseTitle, Price, NFA, Rating FROM course WHERE CourseTitle LIKE '%' :Search '%' ORDER BY Course_ID DESC ";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindparam(':Search', $Search);
        $Statement -> execute();
    
        $OutPut = [];
    
        if ($Statement -> rowCount() > 0) {
    
            while ($Data = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $OutPut[]= $Data;  
            }
    
        }else{
            $OutPut['Status'] = 'Empty';
        }
    
        echo json_encode($OutPut);
    }




?>