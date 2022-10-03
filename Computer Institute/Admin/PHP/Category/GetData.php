<?php

    include('../Config.php');

    $Input = file_get_contents('php://input');
    $ApiData = json_decode($Input, true);
    $CategoryID = $ApiData['EditId'];

    $SelectQuery = " SELECT * FROM `category` WHERE Category_ID = :CategoryID";
    $Statement = $Con -> prepare($SelectQuery);
    $Statement -> bindParam(":CategoryID", $CategoryID);
    $Statement -> execute();

    $Data = [];

    if ($Statement -> rowCount() > 0) {
    
        while ($Category = $Statement -> fetch(PDO::FETCH_ASSOC)) {
            $Data[]= $Category;  
        }

    }else{
        $Data['Empty'] = ['Empty'];
    }

    echo json_encode($Data);





?>