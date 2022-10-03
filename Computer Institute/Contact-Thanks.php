<?php include 'Header.php' ?>
<link rel="stylesheet" href="Css/Thanks.css">

<div id="Main_Thanks">

    <?php
            
        include('Admin/PHP/Config.php');

        if (isset($_POST['Submit'])) {

            $Name = $_POST['Name'];
            $Phone = $_POST['Phone'];
            $Message  = $_POST['Message'];

            date_default_timezone_set('Asia/Kolkata');
            $Time = date('Y-m-d H:i:s');
            
            $InsertQuery = " INSERT INTO `contact`(`Contact_Name`, `Contact_Phone`, `Contact_Message`, `Contact_Time`) VALUES (:Name,:Phone,:Message,:Time) " ;
            $Statement = $Con -> prepare($InsertQuery);
            $Statement -> bindParam(':Name', $Name );
            $Statement -> bindParam(':Phone', $Phone );
            $Statement -> bindParam(':Message', $Message );
            $Statement -> bindParam(':Time', $Time);
            $Statement -> execute();
            
               
        }



    
    ?>

    <!-- Thanks_1 -->
    <div id="Thanks_1">
        <div id="ThanksBox">
            <img src="Img/Sanded.png" alt="Team_Img">
            <h4 style="">Your Message Successfuly Sanded</h4>
        </div>
        <div id="HomePageBtn">
            <a href="index.php"><button>Go To Home</button></a>
        </div>
    </div>


</div>