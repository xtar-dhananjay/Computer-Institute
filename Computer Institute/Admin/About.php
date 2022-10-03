<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/About.css">
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
                    <h2>Contact Info</h2>
                    <a href="ContactDetails.php"><button>Edit</button></a>
                </div>
                
                <div>
                    <h2>About Info</h2>
                    <a href="AboutDetails.php"><button>Edit</button></a>
                </div>
            </div>
        </div>

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Settings.js"></script>