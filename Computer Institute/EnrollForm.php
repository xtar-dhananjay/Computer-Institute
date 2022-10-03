<?php include 'Header.php' ?>
<link rel="stylesheet" href="Css/EnrollForm.css">

<div id="Main-EnrollForm">

    <!-- EnrollForm_1 -->
    <div id="EnrollForm_1">
        <div id="ErollForm">
            <h2>Enroll Form</h2>
            <hr/>
            <form action="Thanks.php" method="POST">
                <div id="Main-Fields">
                    <div>
                        <input id="FullName" type="text" placeholder="Full Name" name="Name">
                        <input id="PhoneNumber" type="number" placeholder="Phone Number" name="Phone">
                    </div>
                    <div>
                        <input id="Age" type="number" placeholder="Your Age" name="Age">
                        <select id="SelectCourse" name="Course">
                            <!-- Data Comes From DataBase -->
                        </select>
                    </div>
                </div>
                <textarea placeholder="Write Message" name="Message"></textarea>
                <div id="SubmitBtn_Cont">
                    <button id="SubmitBtn" name="Submit">Submit</button>
                </div>
            </form>
        </div>
    </div>

</div>

<script src="Js/EnrollNow.js"></script>