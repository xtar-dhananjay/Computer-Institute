<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Teacher.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Teacher-Page">

        <!-- Teacher_1 -->
        <div id="Teacher_1">
            <div id="TopBar">
                <h2>All Team Members</h2>
                <button id="AddTeacherBtn">Add Member</button>
            </div>

            <div id="AllTeam">

                <!-- Data comes from the database -->

            </div>
        </div>

        
        <!-- Teacher_2 -->
        <div id="Teacher_2">

            <div class="TeacherForm" id="TeacherForm">
                <form>
                    <input type="file" name="Img" id="File" hidden>
                    <div class="UplaodImg" onclick="document.getElementById('File').click();">
                        <div class="UploadMsg">
                            <span class="material-icons">upload</span>
                            <p>Uplaod Photo</p>
                        </div>
                        <img style="display: none;" src="" alt="Team_Member_img">
                    </div>
                    <input type="text" name="Name" class="Name" placeholder="Enter Name">
                    <input type="text" name="Course" class="Position" placeholder="Enter Position">
                    <div class="FormButton">
                        <button class="Cancel">Cancel</button>
                        <button class="Save">Save</button>
                    </div>
                </form>
            </div>

            
            <div class="TeacherForm" id="UP_TeacherForm">
                <form>
                    <input type="file" id="UPFile" name="Img" hidden>
                    <div class="UplaodImg" onclick="document.getElementById('UPFile').click();">
                        <img src="../Img/XtarNeha.png" id="UPImg" alt="Team_Member_img">
                    </div>
                    <input type="text" name="StudentID" hidden id="StudentID">
                    <input type="text" hidden name="OldImg" id="OldImg">
                    <input type="text" class="Name" name="Name" id="UP_Name" placeholder="Enter Name">
                    <input type="text" class="Position" id="UP_Course" name="Course" placeholder="Enter Course">
                    <div class="FormButton">
                        <button class="Cancel">Cancel</button>
                        <button class="Save" id="UpdateBtn">Update</button>
                    </div>
                </form>
            </div>

        </div>


    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Teacher.js"></script>