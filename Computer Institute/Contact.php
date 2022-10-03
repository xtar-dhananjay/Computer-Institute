<?php include 'Header.php' ?>
<link rel="stylesheet" href="Css/Contact.css">

<div id="Mian_Contact">
    
    <!-- Contact_1 -->
    <div id="Contact_1">
        <div id="Googla_Maps">
        </div>
    </div>

    <!-- Contact_2 -->
    <div id="Contact_2">
        <div id="Contact_Box">

            <div id="ContactDeatils">

                <div class="Con_Info">
                    <img src="Img/Group.png" alt="Group_img">
                    <div>
                        <h2>Institute Timing</h2>
                        <p id="Timing"></p>
                    </div>
                </div>
                
                <div class="Con_Info">
                    <img src="Img/Location.png" alt="Location_img">
                    <div>
                        <h2>Address</h2>
                        <p id="Address"></p>
                    </div>
                </div>
                
                <div class="Con_Info">
                    <img src="Img/Mail.png" alt="Email_img">
                    <div>
                        <h2>Email</h2>
                        <p id="Email"></p>
                    </div>
                </div>
                
                <div class="Con_Info">
                    <img src="Img/Call.png" alt="Group_img">
                    <div>
                        <h2>Phone Number</h2>
                        <p>
                            <span>+91</span>
                            <span id="Phone1"></span>
                        </p>
                        <p>
                            <span>+91</span>
                            <span id="Phone2"></span>
                        </p>
                    </div>
                </div>
                
            </div>

            <div id="Contact_Form">
                <h2>Contact Now</h2>
                <form action="Contact-Thanks.php" method="POST">
                    <input type="text" id="FullName" name="Name" placeholder="Enter Full Name">
                    <input type="number" id="PhoenNumber" name="Phone" placeholder="Enter Phone Number">
                    <textarea id="Message" name="Message" placeholder="Write message..."></textarea>
                    <div id="SubmitBTN">
                        <button name="Submit">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    </div>



</div>

<?php include 'Footer.php' ?>

<script src="Js/Contact.js"></script>