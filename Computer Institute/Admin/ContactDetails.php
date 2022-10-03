<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/ContactDetails.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="ContactDetails-Page">
        <div id="ContactDetails_1">

            
            <form>

                <div id="Heading">
                    <h2>Contact Info</h2>
                </div>

                <div class="InputBox">
                    <h3>Google Map</h3>
                    <input type="url" id="MapUrl" placeholder="Enter URL" name="Map">
                </div>
                <div class="InputBox">
                    <h3>Email</h3>
                    <input type="email" id="Email" placeholder="Enter Email" name="Email">
                </div>
                <div class="InputBox">
                    <h3>Phone Numbers</h3>
                    <div id="PhoneNumber">
                        <input type="text" hidden id="UpdateID" name="UpdateID">
                        <input id="PhoneNumber_1" type="number" name="Phone1" placeholder="Phone Number 1">
                        <input id="PhoneNumber_2" type="number" name="Phone2" placeholder="Phone Number 2">
                    </div>
                </div>
                <div class="InputBox">
                    <h3>Timing</h3>
                    <input type="text" id="Timing" placeholder="Enter Timing" name="Timing">
                </div>
                <div class="InputBox">
                    <h3>Address</h3>
                    <input type="text" id="Address" placeholder="Enter Address" name="Address">
                </div>
                
                <div id="SubmitBox">
                    <button id="SubmitBtn">Update</button>
                </div>
                
            </form>
        </div>
    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/ContactDetails.js"></script>