<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/StudentProfile.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="StudentProfile-Page">
        <?php
            if (isset($_GET['StudentID'])) {
                $StudentID = $_GET['StudentID'];
            }
        ?>
        <p id="Student_ID" style="display: none;"><?php echo $StudentID; ?></p>
        <!-- StudentProfile_1 -->
        <div id="StudentProfile_1">
            <div id="Profile">
                <div id="Img">
                    <img id="StudentImg" alt="Student_Picture">
                </div>
                <div id="StudentDetails">
                    <div id="BasicDetails">
                        
                        <div class="BD">
                            <label>Student ID</label>
                            <p id="StudentID"></p>
                        </div>
                        
                        <div class="BD">
                            <label>Students Name</label>
                            <p id="StudentsName"></p>
                        </div>
                        
                        <div class="BD">
                            <label>Father Name</label>
                            <p id="FatherName"></p>
                        </div>
                        
                        <div class="BD">
                            <label>Gander</label>
                            <p id="Gender"></p>
                        </div>
                        
                        <div class="BD">
                            <label>Education</label>
                            <p id="Education"></p>
                        </div>
                        
                        <div class="BD">
                            <label>Date Of Birth</label>
                            <p id="DOB"></p>
                        </div>
                        
                        <div class="BD">
                            <label>Admission Date</label>
                            <p id="AdmissionDate"></p>
                        </div>

                        <div class="BD">
                            <label>Phone Number</label>
                            <p><span>+91&nbsp;</span><span id="PhoneNumber"></span></p>
                        </div>
                        
                        <div class="BD">
                            <label>Email</label>
                            <p id="Email"></p>
                        </div>

                    </div>
                    <!-- <div id="ContactDetails">
                        
                        <div class="BD">
                            <label>Phone Number</label>
                            <p><span>+91</span>&nbsp;8368692759</p>
                        </div>
                        
                        <div class="BD">
                            <label>Email</label>
                            <p>Xtardhananjay@gmail.com</p>
                        </div>

                    </div> -->
                    
                    <div id="AddressDetails">
                        
                        <div class="BD">
                            <label>Address</label>
                            <p id="Address"></p>
                        </div>

                    </div>
                </div>
            </div>
            <div id="Courses">
                <h2>All Courses</h2>
                <div id="AllCourse">

                    <!-- <div class="Course">
                        <p>Advance Diploma In Computer Application</p>
                        <div>
                            <p>14/03/2021</p>
                            <p>17:00 - 18:00</p>
                            <input type="text" hidden class="RollNumber">
                            <input type="text" hidden class="CertificateID">
                            <a href=""><button>ID Card</button></a>
                            <button>Certificate</button>
                        </div>
                    </div>
                    
                    <div class="Course">
                        <p>Excel</p>
                        <div>
                            <p>14/03/2021</p>
                            <p>17:00 - 18:00</p>
                            <input type="text" hidden class="RollNumber">
                            <input type="text" hidden class="CertificateID">
                            <a href=""><button>ID Card</button></a>
                            <button>Certificate</button>
                        </div>
                    </div> -->

                </div>
            </div>
        </div>

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/StudentProfile.js"></script>