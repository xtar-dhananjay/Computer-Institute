<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Course.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Course-Page">

        <!-- Course_1 -->
        <div id="Course_1">
            <div id="Course_Cont">
                <div id="Top_Title">
                    <h2>Add Course</h2>
                    <a href="UploadCourse.php"><button>Add Course</button></a>
                </div>
                
                <div id="AllCourse">
                    
                    
                    
                    
                </div>

                <div id="LoadMore">
                    <button>LoadMore</button>
                </div>

            </div>
        </div>

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Course.js"></script>