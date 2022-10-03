
<?php
    
    session_start(); 
    include 'PHP/Config.php';
    
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
        case 'DashBoard.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Sql_Title = " SELECT InstituteName FROM `about` WHERE About_ID = :title_id "; 
            $Title_Stat = $Con -> prepare($Sql_Title);
            $title_id = 1;
            $Title_Stat -> bindParam(':title_id', $title_id);
            $Title_Stat -> execute();
            $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
            $InstituteName = $Title_Data['InstituteName'];
            $Title = $InstituteName. ' DashBoard';
        break;
        case 'Course.php':
            $Title = 'All Courses';
        break;
        case 'UploadCourse.php':
            $Title = 'Add New Course';
        break;
        case 'UpdateCourse.php':
            if (isset($_GET['UpdateID'])) {
                $Sql_Title = " SELECT CourseTitle FROM `course` WHERE Course_ID = :title_id "; 
                $Title_Stat = $Con -> prepare($Sql_Title);
                $UpdateID = $_GET['UpdateID'];
                $Title_Stat -> bindParam(':title_id', $UpdateID);
                $Title_Stat -> execute();
                $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
                $CourseTitle = $Title_Data['CourseTitle'];
                $Title = 'Update ' . $CourseTitle;
            }else{
                header('location: Course.php');
            }
        break;
        case 'Category.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'All Course Category';
        break;
        case 'Students.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'All Students';
        break;
        case 'Admission.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'New Admission';
        break;
        case 'StudentProfile.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            if (isset($_GET['StudentID'])) {
                $Sql_Title = " SELECT Student_Name FROM `students` WHERE SN = :title_id "; 
                $Title_Stat = $Con -> prepare($Sql_Title);
                $StudentID = $_GET['StudentID'];
                $Title_Stat -> bindParam(':title_id', $StudentID);
                $Title_Stat -> execute();
                $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
                $StudentName = $Title_Data['Student_Name'];
                $Title = $StudentName. ' Profile';
            }else{
                header('location: Students.php');
            }
        break;
        case 'UpdateAdmission.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            if (isset($_GET['StudentID'])) {
                $Sql_Title = " SELECT Student_Name FROM `students` WHERE SN = :title_id "; 
                $Title_Stat = $Con -> prepare($Sql_Title);
                $StudentID = $_GET['StudentID'];
                $Title_Stat -> bindParam(':title_id', $StudentID);
                $Title_Stat -> execute();
                $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
                $StudentName = $Title_Data['Student_Name'];
                $Title = 'Update '. $StudentName . ' Profile';
            }else{
                header('location: Students.php');
            }
        break;
        case 'Q&A.php':
            $Title = 'All Q&A';
        break;
        case 'Inquiry.php':
            $Title = 'All Inquiry';
        break;
        case 'Contact.php':
            $Title = 'All Contact';
        break;
        case 'Users.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'All Users';
        break;
        case 'Settings.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'Settings';
        break;
        case 'About.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'Update About';
        break;
        case 'ContactDetails.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'Update Contact Details';
        break;
        case 'AboutDetails.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'Update About Details';
        break;
        case 'TopStudent.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'All Best Student';
        break;
        case 'Teacher.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Sql_Title = " SELECT InstituteName FROM `about` WHERE About_ID = :title_id "; 
            $Title_Stat = $Con -> prepare($Sql_Title);
            $title_id = 1;
            $Title_Stat -> bindParam(':title_id', $title_id);
            $Title_Stat -> execute();
            $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
            $InstituteName = $Title_Data['InstituteName'];
            $Title = $InstituteName. ' Team Members';
        break;
        case 'HomeDetails.php':
            if ($_SESSION['UserRole'] == 'Normal User') {
                header('location: Course.php');
            }
            $Title = 'Update Edvantage Section';
        break;
        // case ''
        default:
            $Sql_Title = " SELECT InstituteName FROM `about` WHERE About_ID = :title_id "; 
            $Title_Stat = $Con -> prepare($Sql_Title);
            $title_id = 1;
            $Title_Stat -> bindParam(':title_id', $title_id);
            $Title_Stat -> execute();
            $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
            $InstituteName = $Title_Data['InstituteName'];
            $Title = $InstituteName. ' DashBoard';
        break;
    }

    if (!isset($_SESSION['UserRole'])) {
        header("location: index.php");
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
    <script src="https://kit.fontawesome.com/a0390a062d.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="Css/Root.Css">
    <link rel="stylesheet" href="Css/header.Css">
    <link rel="stylesheet" href="Css/Warning.css">
    <link rel="icon" type="image/x-icon" href="../Img/Favicon.png">
    <!-- This is the CDN Link of the PDF-LIB from pdf-lib.js.org -->
    <script src="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js"></script>
    <!-- include the fontkit From PDF-LIB -->
    <script src="https://unpkg.com/@pdf-lib/fontkit@0.0.4"></script>
    <!-- This CDN link help to download the pdf file  -->
    <script src="https://unpkg.com/downloadjs@1.4.7"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" 
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous">
    </script>
    <title><?php echo $Title; ?></title>
</head>
<body>
    <section id="SideBar">
        <p style="display: none;" id="HeaderRolle"><?php echo $_SESSION['UserRole'];?></p>
        <ul>
            <li>
                <a href="DashBoard.php" id='Logo'>
                    <!-- <span><i class="fa-sharp fa-solid fa-building"></i></span> -->
                    <span><img style="width: 50px;" src="../Img/books.png" alt="Company_Logo"></span>
                    <span><?php echo $MainName; ?></span>
                </a>
            </li>
            <?php if ($_SESSION['UserRole'] == 'Admin'){   ?>
            <li>
                <a href="DashBoard.php">
                    <span><i class="fas fa-home-alt"></i></span>
                    <span>Dashboard</span>
                </a>
            </li>
            <?php } ?>
            <li>
                <a href="Course.php">
                    <span><i class="fa-solid fa-book"></i></span>
                    <span>Courses</span>
                </a>
            </li>
            <?php if ($_SESSION['UserRole'] == 'Admin'){   ?>
            <li>
                <a href="Category.php">
                    <span><i class="fas fa-clipboard-list"></i></span>
                    <span>Category</span>
                </a>
            </li>
            <li>
                <a href="Students.php">
                    <span><i class="fa-solid fa-user"></i></span>
                    <span>Students</span>
                </a>
            </li>
            <?php } ?>
            <li>
                <a href="Q&A.php">
                    <span><i class="fa-sharp fa-solid fa-question"></i></span>
                    <span>Q&A</span>
                </a>
            </li>
            <li>
                <a href="Inquiry.php">
                    <span><i class="fas fa-comment"></i></span>
                    <span>Inquiry</span>
                </a>
            </li>
            <li>
                <a href="Contact.php">
                    <span><i class="fas fa-comment"></i></span>
                    <span>Contact</span>
                </a>
            </li>
            
            <?php if ($_SESSION['UserRole'] == 'Admin'){   ?>
            <li>
                <a href="Users.php">
                    <span><i class="fas fa-users"></i></span>
                    <span>User</span>
                </a>
            </li>
            
            <li>
                <a href="Settings.php">
                    <span><i class="fas fa-cog"></i></span>
                    <span>Settings</span>
                </a>
            </li>
            <?php } ?>
            <li>
                <a href="Logout.php">
                    <span><i class="fas fa-sign-out"></i></span>
                    <span>LogOut</span>
                </a>
            </li>
        </ul>
    </section>

    
    <div id="Error-Message">
        <i class="fa-solid fa-circle-exclamation"></i>
        <p>Please Fill The all Fields</p>
    </div>

    <div id="Success-Message">
        <i class="fa-solid fa-check"></i>
        <p>Your Data Submit Successfully</p>
    </div>

</body>
</html>