<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/AboutDetails.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="AboutDetails-Page">

        <!-- AboutDetails_1 -->
        <div id="AboutDetails_1">
            <form id="Form">
                <h2>About Info</h2>
                <div class="About">
                    <h3>About 1</h3>
                    <input type="text" name="AboutTitle1" placeholder="Title" id="AboutTitle1">
                    <textarea name="AboutDesc1" placeholder="Description" id="AboutDesc1"></textarea>
                </div>
                <div class="About">
                    <h3>About 2</h3>
                    <input type="text" name="AboutTitle2" placeholder="Title" id="AboutTitle2">
                    <textarea name="AboutDesc2" placeholder="Description" id="AboutDesc2"></textarea>
                </div>
                <div class="About">
                    <h3>Home Description</h3>
                    <textarea name="HomeDesc" placeholder="Description" id="HomeDesc"></textarea>
                </div>
                <input type="text" hidden id="UdpateID" name="UpdateID">
                <div class="About">
                    <h3>Institute Name</h3>
                    <input type="text" placeholder="Institute Name" id="InstituteName" name="InstituteName">
                </div>
                <div class="About">
                    <h3>Copyright</h3>
                    <input type="text" placeholder="Copyright" id="Copyright" name="Copyright">
                </div>
                <div id="UdpateCont">
                    <button id="UdpateBtn">Update</button>
                </div>
            </form>
        </div>
        

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/AboutDetails.js"></script>