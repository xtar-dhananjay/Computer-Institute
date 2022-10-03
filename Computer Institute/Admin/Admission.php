<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Admission.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Admission-Page">

        <!-- Admission_1 -->
        <div id="Admission_1">
            <div id="FormCont">
                <h2>New Admission</h2>
                <div id="Form">

                    <form autocomplete="off">
                        <div id="Student_D1">
                            <input type="file" hidden id="File" name="StudentImg">
                            <div id="StudentImg" onclick="document.getElementById('File').click();">
                                
                                <div id="UplaodImg">
                                    <span class="material-icons">upload</span>
                                    <p>Uplaod Image</p>
                                </div>
                                
                                <img style="display: none;" alt="Student_Img">
                                
                            </div>
                            <div id="BasicFields">
                                <input type="text" id="FullName" name="FullName" placeholder="Student Name">
                                <input type="text" id="FatherName" name="FatherName" placeholder="Father Name">
                                <input type="date" id="DateBirth" name="DateBirth">
                            </div>
                        </div>
                        
                        <div id="Student_D2">
                            <div class="Field2">
                                <select id="SelectQual" name="Qualification">
                                    <option>Select Qualification</option>
                                    <option>10th Below</option>
                                    <option>11th</option>
                                    <option>12th</option>
                                    <option>Graduate</option>
                                    <option>B.Com</option>
                                    <option>B.Tech</option>
                                </select>
                                
                                <select id="SelectGender" name="Gender">
                                    <option>Select Gander</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="Field2">
                                <input type="number" name="Phone" id="PhoneNumber" placeholder="Phone Number">
                                <input type="email" name="Email" id="Email" placeholder="Email">
                            </div>
                        </div>

                        <input autocomplete="false" type="text" name="Address" id="Address" placeholder="Address">
                        
                        <button id="AddBtn">Add Student</button>
                    </form>
                    
                </div>
                    
            </div>
                
        </div>
    

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Admission.js"></script>