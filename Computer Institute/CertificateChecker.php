<?php include 'Header.php' ?>
<link rel="stylesheet" href="Css/CertificateChecker.css">

<div id="Main_CC">

    <!-- Certificate_1 -->
    <div id="Certificate_1">
        <div id="Certificate_Top">
            <h2>Check Your Certifiicate</h2>
            <div id="SearchBox">
                <input type="text" id="CertificateID" Placeholder="Enter Certificate ID...">
                <button id="SubmitBtn">Check Now</button>
            </div>
        </div>
    </div>

    <!-- Certificate_2 -->
    <div id="Certificate_2">
        <div id="Certificate_Result">
            <div id="Verified_Box">
                <img src="Img/Check.png" alt="Check_Img">
                <div>
                    <h2>Verified Certificate</h2>
                    <p>This is The verifide Student and Certificatre form the Regal</p>
                </div>
    
            </div>

            <div id="StudentDetails_Box">
                <div id="StudentImg">
                    <img id="Image" alt="Student_Img">
                </div>
                <div id="StudentDetails">
                    <h2 id="Name"></h2>
                    <div>
                        <span class="material-icons">book</span>
                        <span id="Address"></span>
                    </div>
                    <div>
                        <span class="material-icons">call</span>
                        <span>+91</span>&nbsp;<span id="Phone"></span>
                    </div>
                    <div>
                        <span class="material-icons">mail</span>
                        <span id="Email"></span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Certificate_3 -->
    <div id="Certificate_3">
        
        <div id="Unverified">
            <div id="Verified_Box">
                <img src="Img/Cross.png" alt="Check_Img">
                <div>
                    <h2>Unverified Certificate</h2>
                    <p>This is the not verified certificate</p>
                </div>
            </div>
        </div>

    </div>

</div>

<script src="Js/CertificateCheck.js"></script>