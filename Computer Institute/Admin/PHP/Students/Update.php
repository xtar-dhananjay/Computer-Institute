<?php

        
    include '../Config.php';

    $Img = $_FILES['File'];
    $SN = $_POST['SN'];
    $OldImg = $_POST['OldImg'];
    $FullName = $_POST['FullName'];
    $FatherName = $_POST['FatherName'];
    $DateBirth = $_POST['DateBirth'];
    $SelectQual = $_POST['SelectQual'];
    $SelectGender = $_POST['SelectGender'];
    $PhoneNumber = $_POST['PhoneNumber'];
    $Email = $_POST['Email'];
    $Address = $_POST['Address'];

    $ImgName = $Img["name"];
    $UplaodImg = false;
    $ExValid = true;


    if ($ImgName !== ''){

        $NewName = 'Pro'. '_' .rand(). '_'. date("Y-m-d"). '_' .$ImgName;
        $Path = '../../Img/Students/' . $NewName;
        $ImgExtan = pathinfo($ImgName, PATHINFO_EXTENSION);
        $ValidExtan = array('jpeg', 'png', 'jpg');
        if (in_array($ImgExtan, $ValidExtan)) {

            if (move_uploaded_file($Img['tmp_name'], $Path)) {
                $UplaodImg = true;        
            }
        }else{
            $ExValid = false;
        }
    }

    $UpdateQuery = " UPDATE `students` SET `Student_Img`=:NewName,`Student_Name`=:FullName,`Father_Name`=:FatherName,`Gander`=:SelectGender,`Education`=:SelectQual,`DOB`=:DateBirth,`Phone`=:PhoneNumber,`Email`=:Email,`Address`=:Address WHERE SN = :SN ";

    $Statement = $Con -> prepare($UpdateQuery);
    $Statement -> bindParam(':FullName', $FullName);
    $Statement -> bindParam(':FatherName', $FatherName);
    $Statement -> bindParam(':SelectGender', $SelectGender);
    $Statement -> bindParam(':SelectQual', $SelectQual);
    $Statement -> bindParam(':DateBirth', $DateBirth);
    $Statement -> bindParam(':PhoneNumber', $PhoneNumber);
    $Statement -> bindParam(':Email', $Email);
    $Statement -> bindParam(':Address', $Address);
    $Statement -> bindParam(':SN', $SN);
    
    $Statement -> bindParam(':NewName', $NewName);

    if ($ImgName !== '') {
        if ($ExValid == true) {
            if ($UplaodImg == true) {
                $Statement -> bindParam(':NewName', $NewName);
                unlink('../../Img/Students/'.$OldImg);
            }
        }else{
            echo json_encode(array('Status' => 'Extanstion Problem'));
            exit();
        }
    }else{
        $Statement -> bindParam(':NewName', $OldImg);
    }

    if ($Statement -> execute()) {
        echo json_encode(array('Status' => 'Success'));
    }else{
        echo json_encode(array('Status' => 'Error'));
    }







?>