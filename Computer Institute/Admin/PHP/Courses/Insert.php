<?php

    include '../Config.php';

    $Img = $_FILES['Img'];
    $CourseTitle = $_POST['CourseTitle'];
    $CoursePrice = $_POST['CoursePrice'];
    $CourseAdmitions = $_POST['CourseAdmitions'];
    $CourseRatings = $_POST['CourseRatings'];
    $ClassDuration = $_POST['ClassDuration'];
    $WeeklyHoliday = $_POST['WeeklyHoliday'];
    $CourseDuration = $_POST['CourseDuration'];
    $FeePay = $_POST['FeePay'];
    $CourseDescription = $_POST['CourseDescription'];
    $Contents = $_POST['Contents'];

    $ImgName = $Img["name"];
    $NewName = 'Pro'. '_' .rand(). '_'. date("Y-m-d"). '_' .$ImgName;
    $Path = '../../Img/Course/' . $NewName;
    $ImgExtan = pathinfo($ImgName, PATHINFO_EXTENSION);
    $ValidExtan = array('jpeg', 'png', 'jpg');

    if (in_array($ImgExtan, $ValidExtan)) {
        if (move_uploaded_file($Img['tmp_name'], $Path)) {
            $InserQuery = " INSERT INTO `course`(`Img`, `CourseTitle`, `Price`, `NFA`, `Rating`, `ClassDuration`, `WeeklyHoliday`, `CourseDuration`, `FeePay`, `Description`, `Content`) VALUES (:NewName,:CourseTitle,:CoursePrice,:CourseAdmitions,:CourseRatings,:ClassDuration,:WeeklyHoliday,:CourseDuration,:FeePay,:CourseDescription,:Contents) ";
    
            $Statement = $Con -> prepare($InserQuery);
            $Statement -> bindParam(":NewName", $NewName);
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