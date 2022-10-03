<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Dashboard.Css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Index-Page">

        <!-- DashBoard_1 -->
        <div id="DashBoard_1">

            <div id="TopTotal">

                <div class="TopTotals">
                    <div>
                        <h2>Total Views</h2>
                        <p id="TotalViews"></p>
                    </div>
                    <img src="../Img/Views.png" alt="Views_Icon">
                </div>
                
                <div class="TopTotals">
                    <div>
                        <h2>Total Students</h2>
                        <p id="TotalStudents"></p>
                    </div>
                    <img src="../Img/Students.png" alt="Students_Icon">
                </div>
                
                <div class="TopTotals">
                    <div>
                        <h2>Total Courses</h2>
                        <p id="TotalCourses"></p>
                    </div>
                    <img src="../Img/Courses.png" alt="Courses_Icon">
                </div>
                
                <div class="TopTotals">
                    <div>
                        <h2>Total Inquiry</h2>
                        <p id="TotalInquiry"></p>
                    </div>
                    <img src="../Img/Inquiry.png" alt="Inquiry_Icon">
                </div>

            </div>
            
            <div id="AddBox_Cont">
                
                <div class="AddBox">
                    <h2>Add Course</h2>
                    <a href="UploadCourse.php"><button>Add Now</button></a>
                </div>
                
                <div class="AddBox">
                    <h2>Course Category</h2>
                    <a href="Category.php"><button>Add Now</button></a>
                </div>
                
                <div class="AddBox">
                    <h2>Check AnyLitcs</h2>
                    <a href="https://search.google.com/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fxtardhananjay.com%2F"><button>Check Now</button></a>
                </div>
                
                <div class="AddBox">
                    <h2>Check Contacts</h2>
                    <a href="Contact.php"><button>Check Now</button></a>
                </div>

            </div>

        </div>

    
        <!-- DashBoard_2 -->
        <div id="DashBoard_2">
            <div id="Table_Box">
                <h2>Recent Inquiry</h2>
                <table>
                    <thead>
                        <tr>    
                            <th>SN</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone Number</th>
                            <th>Course</th>
                            <th>Time</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody id="Tbody">
                        <!-- Data Comes from the database -->
                    </tbody>
                </table>
                <div id="MoreInquiry">
                </div>
            </div>
        </div>

        <!-- MessageBox -->
        <div id="InquiryMessage_Box">
            <div id="InquiryMessage">
                <p></p>
                <div>
                    <button id="MsgBox_Close">Close</button>
                </div>
            </div>
        </div>

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Dashboard.js"></script>