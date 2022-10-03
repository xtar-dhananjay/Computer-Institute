<?php

        
    include '../../Admin/PHP/Config.php';

    if (isset($_GET['SearchTerm'])) {
        
        $Search = $_GET['SearchTerm'];
            
        
        $SelectQuery = " SELECT SN, Course_Name, Student_Name, Phone, Email, Address, Certificate_ID, Student_Img FROM students WHERE Certificate_ID LIKE '%' :Search '%' ";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> bindparam(':Search', $Search);
        $Statement -> execute();

        $OutPut = [];

        if ($Statement -> rowCount() > 0) {

            while ($Data = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $OutPut[]= $Data;  
            };
            $OutPut[0]['UserCertificateID'] = $Search;
        }else{
            $OutPut['Status'] = 'Empty';
        }

        echo json_encode($OutPut);
        
    }





?>