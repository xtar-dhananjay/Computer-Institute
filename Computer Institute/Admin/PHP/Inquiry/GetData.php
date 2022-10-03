<?php

    include('../Config.php');

    $Limit = 10;
    if (isset($_GET['Page'])) {
        $Page = $_GET['Page'];
        if ($Page == '') {
            $Page = 0;
        }

        if ($Page == 0) {
            $Limit = 15;
        }
        $SelectQuery = " SELECT * FROM `inquiry` ORDER BY Message_ID DESC LIMIT $Page, $Limit ";
        $Statement = $Con -> prepare($SelectQuery);
        $Statement -> execute();

        $Data = [];

        if ($Statement -> rowCount() > 0) {
        
            while ($InquiryMessage = $Statement -> fetch(PDO::FETCH_ASSOC)) {
                $Data[]= $InquiryMessage;  
            }

        }else{
            $Data['Status'] = 'Empty';
        }

        echo json_encode($Data);
    }



?>