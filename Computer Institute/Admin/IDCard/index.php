<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download ID Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <?php

        if (isset($_GET['StudentID'])) {
            $StudentID = $_GET['StudentID'];
            $StudentName = $_GET['StudentName'];
            $CourseName = $_GET['CourseName'];
            $RollNo = $_GET['RollNo'];
            $StudentImg = $_GET['StudentImg'];
                
        }
    
    
    
    ?>

    <div id="Container">
        <div id="Card">
            <div id="Header">
                <img src="instagram.png" alt="instagram">
                <div id="CompanyName">
                    <h2>Regal Institute</h2>
                    <p>Of Computer & Education</p>
                </div>
            </div>
            <div id="CardBody">
                <div id="Student-Details">
                    <div>
                        <label>Name</label>
                        <p><?php echo $StudentName; ?></p>
                    </div>
                    <div>
                        <label>Student ID</label>
                        <p><?php echo $StudentID; ?></p>
                    </div>
                    <div>
                        <label>Course</label>
                        <p><?php echo $CourseName; ?></p>
                    </div>
                    <div>
                        <label>Roll No</label>
                        <p><?php echo $RollNo; ?></p>
                    </div>
                </div>
                <div id="Student-Img">
                    <img src="../Img/Students/<?php echo $StudentImg; ?>" alt="Student-Img">
                </div>
            </div>
        </div>
        <button id="DownloadBtn">Download ID Card</button>
    </div>


        

    <script src="html2canvas.js"></script>
    <script src="script.js"></script>


</body>
</html>