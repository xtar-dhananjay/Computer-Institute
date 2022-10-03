<?php

    
    include '../Config.php';

    $Img = $_FILES['StudentImg'];
    $FullName = $_POST['FullName'];
    $FatherName = $_POST['FatherName'];
    $DateBirth = $_POST['DateBirth'];
    $Qualification = $_POST['Qualification'];
    $Gender = $_POST['Gender'];
    $Phone = $_POST['Phone'];
    $Email = $_POST['Email'];
    $Address = $_POST['Address'];

    // For Student ID
    date_default_timezone_set("Asia/Calcutta");
    $Date = date("dmY");
    $Time =  date("his");
    $StudentID = $Date. $Time. rand(11,99);

    // Admission Date
    $AdmissionDate = date("d/m/Y");

    $ImgName = $Img["name"];
    $NewName = 'Sut'. '_' .rand(). '_'. date("Y-m-d"). '_' .$ImgName;
    $Path = '../../Img/Students/' . $NewName;
    $ImgExtan = pathinfo($ImgName, PATHINFO_EXTENSION);
    $ValidExtan = array('jpeg', 'png', 'jpg');

    if (in_array($ImgExtan, $ValidExtan)) {
        if (move_uploaded_file($Img['tmp_name'], $Path)) {
           $InserQuery = " INSERT INTO `students`(`Student_Img`, `Student_ID`, `Student_Name`, `Father_Name`, `Gander`, `Education`, `DOB`, `Admission_Date`, `Phone`, `Email`, `Address`) VALUES (:NewName,:StudentID,:FullName,:FatherName,:Gender,:Qualification,:DateBirth,:AdmissionDate,:Phone,:Email,:Address) ";

           $Statement = $Con -> prepare($InserQuery); 
           $Statement -> bindParam(':NewName', $NewName);
           $Statement -> bindParam(':StudentID', $StudentID);
           $Statement -> bindParam(':FullName', $FullName);
           $Statement -> bindParam(':FatherName', $FatherName);
           $Statement -> bindParam(':Gender', $Gender);
           $Statement -> bindParam(':Qualification', $Qualification);
           $Statement -> bindParam(':DateBirth', $DateBirth);
           $Statement -> bindParam(':AdmissionDate', $AdmissionDate);
           $Statement -> bindParam(':Phone', $Phone);
           $Statement -> bindParam(':Email', $Email);
           $Statement -> bindParam(':Address', $Address);

           if ($Statement -> execute()) {
                echo json_encode(array('Status' => 'Success'));
           }

        }else{
            echo json_encode(array('Status' => 'Image Not Moved'));
        }  
    }else{
        echo json_encode(array('Status' => 'Extanstion Problem'));
    }










?>