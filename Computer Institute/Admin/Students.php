<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Students.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Students-Page">

        <!-- Students_1 -->
        <div id="Students_1">
            <div id="TopBar">
                <h2>All Students</h2>
                <a href="Admission.php"><button id="AddStudentBtn">Add Students</button></a>
            </div>
        </div>

        <!-- Students_2 -->
        <div id="Students_2">
            <div id="SearchBox">
                <input id="SearchInput" type="text" placeholder="Search...">
                <select id="SelectFields">
                    <option value="Student_Name">Student Name</option>
                    <option value="Student_ID">Student ID</option>
                    <option value="Father_Name">Father Name</option>
                    <option value="Phone">Phone Number</option>
                    <option value="Email">Email</option>
                    <option value="Address">Address</option>
                </select>
            </div>
        </div>

        <!-- Students_3 -->
        <div id="Students_3">
            <div id="Table">
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Student ID</th>
                            <th>Profile</th>
                            <th>Course</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Data Comes Form The DataBase -->
                    </tbody>
                </table>
            </div>
            <input type="text" hidden id="CategoryList">
            <div id="LoadMore">
                <button id="LoadMoreBtn">Laod More</button>
            </div>
        </div>

        <!-- Student_4 -->
        <div id="Student_4">
            <div id="CourseForm">
                <h2>Add Course</h2>
                <div id="Form">
                    <div id="AllCourse">
                        
                        
                    </div>
                    <div id="AddCourse">
                        <i class="fa-solid fa-circle-plus"></i>
                        <p>Add Course</p>
                    </div>
                    <div id="Btns">
                        <button id="Cancel">Cancel</button>
                        <button id="SubmitBtn">Submit</button>
                    </div>
                </div>
            </div>
        </div>


    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Students.js"></script>