<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/UploadCourse.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="UploadCourse-Page">
        <?php
        if (isset($_GET['UpdateID'])){
            ?>
            <p id="GetUpdateID" style="display: none"><?php echo $_GET['UpdateID']; ?></p>
            <?php
        }
        ?>
        <!-- UploadCourse_1 -->
        <div id="UplaodCourse_1">

            <div id="Top_Title">
                <h2>Add Course</h2>
                <button id="Course_Uplaod_Btn">Update Now</button>
            </div>

            <div id="Form">
                <form>
                    <div id="Course_Details">

                        <div id="BasicD">
                            <input type="file" hidden id="CourseFile" name="NewImg">
                            <input type="text" hidden id="OldImg" name="OldImg">
                            <input type="text" hidden id="CourseID" name="CourseID">
                            <div id="CourseImg" onclick="document.getElementById('CourseFile').click();">

                                <img src="" alt="Course_Image">

                            </div>
                            <div id="BasicFields">
                                <input type="text" id="CourseTitle" name="CourseTitle" placeholder="Course Title...">
                                <input type="number" id="CoursePrice" name="CoursePrice" placeholder="Price">
                                <input type="number" id="CourseAdmitions" name="CourseAdmitions" placeholder="Number of admitions">
                                <select id="CourseRatings" name="CourseRatings">
                                    <option>Select Star</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        
                        <div id="ClassDetails">
                            <div>
                                <h2>Class Duration</h2>
                                <select id="ClassDuration" name="ClassDuration">
                                    <option>1 Hour</option>
                                    <option>2 Hour</option>
                                    <option>3 Hour</option>
                                </select>
                            </div>
                            <div>
                                <h2>Weekly Holiday</h2>
                                <select id="WeeklyHoiday" name="WeeklyHoiday">
                                    <option>Sunday</option>
                                    <option>Saturday</option>
                                    <option>Friday</option>
                                    <option>Thursday</option>
                                    <option>Wednesday</option>
                                    <option>Tuesday</option>
                                    <option>Monday</option>
                                </select>
                            </div>
                            <div>
                                <h2>Course Duration</h2>
                                <select id="CourseDuration" name="CourseDuration">
                                    <option>2 Month</option>
                                    <option>4 Month</option>
                                    <option>6 Month</option>
                                    <option>1 Year</option>
                                    <option>18 Month</option>
                                    <option>2 Year</option>
                                </select>
                            </div>
                            <div>
                                <h2>Fee Pay</h2>
                                <select id="FeePay" name="FeePay">
                                    <option>Monthly</option>
                                    <option>Quaterly</option>
                                    <option>Yearly</option>
                                </select>
                            </div>
                        </div>

                        <div id="Course_Description">
                            <h2>Course Description</h2>
                            <textarea id="CourseDescription" name="CourseDescription" placeholder="Write Description..."></textarea>
                        </div>

                    </div>

                    <div id="Course_Content">
                        <h2>Course Content</h2>
                        <div id="AllContent">
                            
                        
                        </div>
                        <button id="AddContent-Btn" type="button">Add Content</button>
                    </div>

                </form>
                
            </div>

        </div>


    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/UpdateCourse.js"></script>