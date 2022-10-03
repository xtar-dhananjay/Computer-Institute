<?php

    include '../Config.php';

    $Img = $_FILES['NewImg'];
    $CourseTitle = $_POST['CourseTitle'];
    $CoursePrice = $_POST['CoursePrice'];
    $CourseAdmitions = $_POST['CourseAdmitions'];
    $CourseRatings = $_POST['CourseRatings'];
    $ClassDuration = $_POST['ClassDuration'];
    $WeeklyHoliday = $_POST['WeeklyHoiday'];
    $CourseDuration = $_POST['CourseDuration'];
    $FeePay = $_POST['FeePay'];
    $CourseDescription = $_POST['CourseDescription'];
    $Contents = $_POST['Contents'];
    $OldImg = $_POST['OldImg'];
    $CourseID = $_POST['CourseID'];

    $ImgName = $Img["name"];
    $UplaodImg = false;
    $ExValid = true;


    if ($ImgName !== ''){

        $NewName = 'Pro'. '_' .rand(). '_'. date("Y-m-d"). '_' .$ImgName;
        $Path = '../../Img/Course/' . $NewName;
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
    
    $InserQuery = " UPDATE `course` SET `Img`=:NewName,`CourseTitle`=:CourseTitle,`Price`=:CoursePrice,`NFA`=:CourseAdmitions,`Rating`=:CourseRatings,`ClassDuration`=:ClassDuration,`WeeklyHoliday`=:WeeklyHoliday,`CourseDuration`=:CourseDuration,`FeePay`=:FeePay,`Description`=:CourseDescription,`Content`=:Contents WHERE Course_ID = :CourseID ";

    $Statement = $Con -> prepare($InserQuery);
    $Statement -> bindParam(":CourseTitle", $CourseTitle);
    $Statement -> bindParam(":CoursePrice", $CoursePrice);
    $Statement -> bindParam(":CourseAdmitions", $CourseAdmitions);
    $Statement -> bindParam(":CourseRatings", $CourseRatings);
    $Statement -> bindParam(":ClassDuration", $ClassDuration);
    $Statement -> bindParam(":WeeklyHoliday", $WeeklyHoliday);
    $Statement -> bindParam(":CourseDuration", $CourseDuration);
    $Statement -> bindParam(":FeePay", $FeePay);
    $Statement -> bindParam(":CourseDescription", $CourseDescription);
    $Statement -> bindParam(":Contents", $Contents);
    $Statement -> bindParam(":CourseID", $CourseID);
    
    if ($ImgName !== '') {
        if ($ExValid == true) {
            if ($UplaodImg == true) {
                $Statement -> bindParam(":NewName", $NewName);
                unlink('../../Img/Course/'.$OldImg);
            }
        }else{
            echo json_encode(array('Status' => 'Extanstion Problem'));
            exit();
        }
    }else{
        $Statement -> bindParam(":NewName", $OldImg);
    }

    if ($Statement -> execute()) {
        echo json_encode(array('Status' => 'Success'));
    }else{
        echo json_encode(array('Status' => 'Error'));
    }









?>