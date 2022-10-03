<?php include 'Header.php' ?>
<link rel="stylesheet" href="Css/Thanks.css">

<div id="Main_Thanks">

    <?php
            
        include('Admin/PHP/Config.php');

        if (isset($_POST['Submit'])) {

            $Name = $_POST['Name'];
            $Age = $_POST['Age'];
            $Phone = $_POST['Phone'];
            $Course = $_POST['Course'];
            $Message  = $_POST['Message'];

            date_default_timezone_set('Asia/Kolkata');
            $Time = date('Y-m-d H:i:s');

            $InsertQuery = " INSERT INTO `inquiry`(`Name`, `Age`, `Phone`, `Course`, `Message`, `DateTime`) VALUES (:Name,:Age,:Phone,:Course,:Message,:Time)" ;
            $Statement = $Con -> prepare($InsertQuery);
            $Statement -> bindParam(':Name', $Name );
            $Statement -> bindParam(':Age', $Age );
            $Statement -> bindParam(':Phone', $Phone );
            $Statement -> bindParam(':Course', $Course );
            $Statement -> bindParam(':Message', $Message );
            $Statement -> bindParam(':Time', $Time );
            $Statement -> execute();
            
               
        }



    
    ?>

    <!-- Thanks_1 -->
    <div id="Thanks_1">
        <div id="ThanksBox">
            <img src="Img/Team.png" alt="Team_Img">
            <p>Your message Successfull Sand. If you hava a few minuts than you can go regal institute on this address " Delhi, Punjabi Bagh, Prem Nagar Street No. 17" . Otherwise Regal team Contact you.</p>
        </div>
        <div id="HomePageBtn">
            <a href="index.php"><button>Go To Home</button></a>
        </div>
    </div>


</div>