<?php

    include('../../Admin/PHP/Config.php');

    $TotalViewID = 1;
    $SelectTotalView = " SELECT * FROM `totalviews` WHERE TotalViews_ID = :TotalViewID1 ";
    $Statement = $Con -> prepare($SelectTotalView);
    $Statement -> bindParam(':TotalViewID1', $TotalViewID);
    $Statement -> execute();
    $Data = $Statement -> fetch(PDO::FETCH_ASSOC);
    $Views = $Data['TotalViews_Count'];
    if (isset($Views)) {
        $NewViews = $Views + 1;
        $InsertQuery = " UPDATE `totalviews` SET `TotalViews_Count`=:NewViews WHERE TotalViews_ID = :TotalViewID ";
        $StateMent = $Con -> prepare($InsertQuery);
        $StateMent -> bindParam(":NewViews", $NewViews);
        $StateMent -> bindParam(":TotalViewID", $TotalViewID);
        $StateMent -> execute();
    
    }






?>