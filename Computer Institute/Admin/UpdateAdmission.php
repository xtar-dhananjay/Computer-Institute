<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/UpdateAdmission.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Admission-Page">

        <?php
            if (isset($_GET['StudentID'])) {
                $StudentID = $_GET['StudentID'];
            }
        ?>
        <p id="StudentID" style="display: none;"><?php echo $StudentID; ?></p>
        

        <!-- Admission_1 -->
        <div id="Admission_1">
            <div id="FormCont">
                <h2>Edit Student Details</h2>
                <div id="Form">

                    <form autocomplete="off">
                        <div id="Student_D1">
                            <input type="file" hidden id="File" name="File">
                            <input type="text" hidden id="OldImg" name="OldImg">
                            <input type="text" hidden id="SN" name="SN">
                            <div id="StudentImg" onclick="document.getElementById('File').click();">
                                
                                <img id="Img" alt="Student_Img">
                                
                            </div>
                            <div id="BasicFields">
                                <input type="text" id="FullName" name="FullName" placeholder="Student Name">
                                <input type="text" id="FatherName" name="FatherName" placeholder="Father Name">
                                <input type="date" id="DateBirth" name="DateBirth">
                            </div>
                        </div>
                        
                        <div id="Student_D2">
                            <div class="Field2">
                                <select id="SelectQual" name="SelectQual">
                                    <option>Select Qualification</option>
                                    <option>10th Below</option>
                                    <option>11th</option>
                                    <option>12th</option>
                                    <option>Graduate</option>
                                    <option>B.Com</option>
                                    <option>B.Tech</option>
                                    <option>Graduate Above </option>
                                </select>
                                
                                <select id="SelectGender" name="SelectGender">
                                    <option>Select Gander</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="Field2">
                                <input type="number" id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number">
                                <input type="email" id="Email" name="Email" placeholder="Email">
                            </div>
                        </div>

                        <input autocomplete="false" type="text" name="Address" id="Address" placeholder="Address">
                        
                        <button id="AddBtn">Udpate Now</button>
                    </form>
                    
                </div>
                    
            </div>
                
        </div>
    

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/UpdateAdmission.js"></script>