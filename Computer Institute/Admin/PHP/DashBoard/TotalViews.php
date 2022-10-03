<?php

    include('../Config.php');
    
    $TotalViewID = 1;
    $SelectTotalView = " SELECT * FROM `totalviews` WHERE TotalViews_ID = :TotalViewID1 ";
    $Statement = $Con -> prepare($SelectTotalView);
    $Statement -> bindParam(':TotalViewID1', $TotalViewID);
    $Statement -> execute();
    $Data = $Statement -> fetch(PDO::FETCH_ASSOC);
    $Views = $Data['TotalViews_Count'];
    echo json_encode(array("TotalData" => $Views));



?>