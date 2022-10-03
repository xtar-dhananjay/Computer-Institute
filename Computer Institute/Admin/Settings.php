<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Settings.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Settings-Page">

        <!-- Settings_1 -->
        <div id="Settings_1">
            <div id="AllSettings">
                <div>
                    <h2>About</h2>
                    <a href="About.php"><button>Edit</button></a>
                </div>
                
                <div>
                    <h2>Best Students</h2>
                    <a href="TopStudent.php"><button>Edit</button></a>
                </div>
                
                <div>
                    <h2>Company Team</h2>
                    <a href="Teacher.php"><button>Edit</button></a>
                </div>
                
                <div>
                    <h2>Institute Edvantage</h2>
                    <a href="HomeDetails.php"><button>Edit</button></a>
                </div>
            </div>
        </div>

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Settings.js"></script>