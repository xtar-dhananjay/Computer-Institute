<?php include 'Header.php' ?>
<link rel="stylesheet" href="Css/CourseDetails.css">

<div id="Main_CourseDetails">

    <?php
        if (isset($_GET['CourseID'])) {
            $CourseID = $_GET['CourseID'];
        }
    ?>

    <p style="display: none;" id="CourseID"><?php echo $CourseID; ?></p>

    <!-- CourseDetails_1 -->
    <div id="CourseDetails_1">
        <div id="CourseDetails_Box">

            <div id="CourseBenner">
                <img id="CourseImg" alt="CourseBenner_Img">
            </div>

            <div id="CourseDetails">
                <h2 id="CourseTitle"></h2>
                <div id="Ratings">
                    <!-- Form DataBase -->
                </div>
                <div id="Price_Persons">
                    <span id="Persons">
                        <span class="material-icons">group</span>
                        <span id="TotalStudent"></span>
                    </span>
                    <span id="CoursePrice">
                        <span>₹</span>
                        <span id="Price"></span>
                    </span>
                </div>
                <a href="EnrollForm.php">
                    <button id="EnrollBtn">Enroll Now</button>
                </a>
            </div>

        </div>
    </div>

    <!-- CourseDetails_2 -->
    <div id="Certificate_2">
        <div id="Features_Box">
            <div id="Notes">
                <img src="Img/Note.png" alt="Note_Img">
                <p>Course Notes</p>
            </div>
            <div>
                <img src="Img/Certification.png" alt="Certificate_Img">
                <p>Certificate</p>
            </div>
            <div>
                <img src="Img/Teacher.png" alt="Teacher_Img">
                <p>Best Teachers</p>
            </div>
        </div>
    </div>


    <!-- CourseDetails_3 -->
    <div id="Certificate_3">
        <div id="ClassDetails">
            <div>
                <p class="ClassDetails_Label">Class Duration</p>
                <p id="ClassDuration"></p>
            </div>
            <div>
                <p class="ClassDetails_Label">Weekly Holiday</p>
                <p id="WeeklyHoliday"></p>
            </div>
            <div>
                <p class="ClassDetails_Label">Course Duration</p>
                <p id="CourseDuration"></p>
            </div>
            <div>
                <p class="ClassDetails_Label">Fee Pay</p>
                <p id="FeePay"></p>
            </div>
        </div>
    </div>

    <!-- CourseDetails_4 -->
    <div id="CourseDetails_4">
        <div id="CourseDescription">
            <h2>Course Description</h2>
            <p id="CourseDesc">
                <!-- From DataBase -->
            </p>
        </div>
    </div>

    <!-- CourseDetails_5 -->
    <div id="CourseDetails_5">
        <div id="CourseContant">
            <h2>Course Contant</h2>
            <div id="AllContants">
            </div>
        </div>
    </div>

</div>

<?php include 'Footer.php' ?>
<script src="Js/CourseDetails.js"></script>