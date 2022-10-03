<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Q&A.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="QA-Page">

        <!-- Q&A_1 -->
        <div id="QA_1">
            <div id="TopBar">
                <h2>All Q&A</h2>
                <button id="Add_QA_Btn">Add Q&A</button>
            </div>

            <div id="All_QA">
                <!-- Data Comes From The DataBase -->
            </div>

        </div>

        <!-- Q&A_2 -->
        <div id="QA_2">
            <div id="Add_FormCont">
                <form>
                    <input name="Question" type="text" id="QuationInput" placeholder="Enter Quation...">
                    <textarea name="Answer" id="AnswerInput" placeholder="Enter Answer..."></textarea>
                    <div id="AddButtons">
                        <button id="Cancel">Cancel</button>
                        <button id="Add">Save</button>
                    </div>
                </form>
            </div>

            
            <div id="UP_FormCont">
                <form>
                    <input name="Question" type="text" id="UP_QuationInput" placeholder="Enter Quation...">
                    <textarea name="Answer" id="UP_AnswerInput" placeholder="Enter Answer..."></textarea>
                    <div id="UPButtons">
                        <button id="UP_Cancel">Cancel</button>
                        <button id="UP_Add">Update</button>
                    </div>
                </form>
            </div>
        </div>


    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Q&A.js"></script>