<?php

    include('Admin/PHP/Config.php');

    $Sql_Title = " SELECT InstituteName FROM `about` WHERE About_ID = :title_id "; 
    $Title_Stat = $Con -> prepare($Sql_Title);
    $title_id = 1;
    $Title_Stat -> bindParam(':title_id', $title_id);
    $Title_Stat -> execute();
    $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
    $InstituteName = $Title_Data['InstituteName'];
    $MainName = $InstituteName;

    $PageName = basename($_SERVER['PHP_SELF']);    
    $Title = '';

    switch($PageName){
        case 'Course.php':
            $Title = 'All Courses';
        break;
        case 'About.php':
            $Sql_Title = " SELECT InstituteName FROM `about` WHERE About_ID = :title_id "; 
            $Title_Stat = $Con -> prepare($Sql_Title);
            $title_id = 1;
            $Title_Stat -> bindParam(':title_id', $title_id);
            $Title_Stat -> execute();
            $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
            $InstituteName = $Title_Data['InstituteName'];
            $Title = $Title_Data['InstituteName']. ' About';
        break;
        case 'Contact.php':
            $Sql_Title = " SELECT InstituteName FROM `about` WHERE About_ID = :title_id "; 
            $Title_Stat = $Con -> prepare($Sql_Title);
            $title_id = 1;
            $Title_Stat -> bindParam(':title_id', $title_id);
            $Title_Stat -> execute();
            $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
            $InstituteName = $Title_Data['InstituteName'];
            $Title = 'Contact '. $InstituteName .' Team';
        break;
        case 'CourseDetails.php':
            if (isset($_GET['CourseID'])) {
                $Sql_Title = " SELECT CourseTitle FROM `course` WHERE Course_ID = :title_id "; 
                $Title_Stat = $Con -> prepare($Sql_Title);
                $UpdateID = $_GET['CourseID'];
                $Title_Stat -> bindParam(':title_id', $UpdateID);
                $Title_Stat -> execute();
                $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
                $CourseTitle = $Title_Data['CourseTitle'];
                $Title = $CourseTitle;
            }else{
                header('location: Course.php');
            }
        break;
        case 'EnrollForm.php':
            $Title = 'Course Enroll Form';
        break;
        case 'BestStudents.php':
            $Title = 'Best Students';
        break;
        case 'CertificateChecker.php':
            $Title = 'Check your Certificate';
        break;
        default:
            $Sql_Title = " SELECT InstituteName FROM `about` WHERE About_ID = :title_id "; 
            $Title_Stat = $Con -> prepare($Sql_Title);
            $title_id = 1;
            $Title_Stat -> bindParam(':title_id', $title_id);
            $Title_Stat -> execute();
            $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
            $InstituteName = $Title_Data['InstituteName'];
            $Title = $InstituteName. ' | Home';
        break;
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="Img/Favicon.png">
    <link rel="stylesheet" href="Css/Root.css">
    <link rel="stylesheet" href="Css/Header.css">
    <link rel="icon" type="image/x-icon" href="Img/Favicon.png">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" 
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous">
    </script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title><?php echo $Title; ?></title>
</head>
<body>
    <header id="Main-Header-1">
        <div id="Main-Header-2">
            <div class="Logo">
                <a href="index.php"><?php echo $MainName; ?></a>
                <span id="MenuBtn" class="material-icons">menu</span>
            </div>
            <div class="Pages">
                <ul id="ManuBar">
                    <li class="ActivePage"><a href="index.php">Home</a></li>
                    <li><a href="Course.php">Course</a></li>
                    <li><a href="About.php">About</a></li>
                    <li><a href="Contact.php">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
    <script src="Js/Header.js"></script>
</body>
</html>