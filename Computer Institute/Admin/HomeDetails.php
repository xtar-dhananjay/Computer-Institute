<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/HomeDetails.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="HomeDetails-Page">

        <!-- HomeDetails_1 -->
        <div id="HomeDetails_1">
            <div id="TopBar">
                <h2>Institute Edvantage</h2>
            </div>
            <div id="All_Feature">
                <div>
                    <img src="../Img/Teachers.png" alt="Note_Img">
                    <p id="Feature1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed debitis sequi, odit quas, ducimus maxime minus dolorem aperiam a doloremque ?</p>
                    <button data="1" id="FeatureBtn1" class="EditBtn">Edit</button>
                </div>
                <div>
                    <img src="../Img/Notes.png" alt="Note_Img">
                    <p id="Feature2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed debitis sequi, odit quas, ducimus maxime minus dolorem aperiam a doloremque ?</p>
                    <button data="2" id="FeatureBtn2" class="EditBtn">Edit</button>
                </div>
                <div>
                    <img src="../Img/HelpGirl.png" alt="Note_Img">
                    <p id="Feature3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed debitis sequi, odit quas, ducimus maxime minus dolorem aperiam a doloremque ?</p>
                    <button data="3" id="FeatureBtn3" class="EditBtn">Edit</button>
                </div>
            </div>
        </div>

        <div id="HomeDetails_2">
            <form>
                <div id="Img_Box">    
                    <img src="../Img/Teachers.png" alt="Teachers_Img">
                </div>
                <textarea name="Feature" id="DescInput" placeholder="Write you Description"></textarea>
                <input type="text" hidden name="UpdateID" id="UpdateID">
                <div id="Button_Box">
                    <button id="CancelBtn">Cancel</button>
                    <button id="UpdateBtn">Update</button>
                </div>
            </form>
        </div>


    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/HomeDetails.js"></script>