<?php

    include('../Config.php');

    $Input = file_get_contents('php://input');
    $InputData = json_decode($Input, true);
    $CourseName = implode (", ",$InputData['CourseName']);
    $CourseDates = implode (", ",$InputData['CourseDates']);
    $Batchs = implode (", ",$InputData['Batchs']);
    $RollNos = implode (", ",$InputData['RollNos']);
    $CertifiNo = implode (", ",$InputData['CertifiNo']);
    $StudentID = $InputData['StudentID'];

    
    $InsertQuery = "UPDATE `students` SET `Course_Name`=:CourseName,`Coursoe_Date`=:CourseDates,`Batch`=:Batchs,`Roll_No`=:RollNos,`Certificate_ID`=:CertifiNo WHERE SN = :StudentID";
    $StateMent = $Con -> prepare($InsertQuery);
    $StateMent -> bindParam(":CourseName", $CourseName);
    $StateMent -> bindParam(":CourseDates", $CourseDates);
    $StateMent -> bindParam(":Batchs", $Batchs);
    $StateMent -> bindParam(":RollNos", $RollNos);
    $StateMent -> bindParam(":CertifiNo", $CertifiNo);
    $StateMent -> bindParam(":StudentID", $StudentID);

    if ($StateMent -> execute()) {
        echo json_encode(array("Status" => "Success"));
    }else{
        echo json_encode(array("Status" => "Error"));
    }



?>