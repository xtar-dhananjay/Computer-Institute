<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Users.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Users-Page">

        <!-- Users_1 -->
        <div id="Users_1">
            <div id="TopBar">
                <h2>All Category</h2>
                <button id="AddUserBtn">Add Category</button>
            </div>

            <div id="UsersTable">
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Data Come's From the DataBase -->
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Users_2 -->
        <div id="Users_2">

            <div id="AddUsers_Form">
                <div id="AddForm">
                    <form>
                        <input type="file" hidden name="Img" id="UploadFile">
                        <div id="UploadImg_Box" onclick="document.getElementById('UploadFile').click();">
                            <div id="Upload_Icon">
                                <span class="material-icons">file_upload</span>
                                <p>Upload Img</p>
                            </div>
                            <img style="display: none;" src="../Img/XtarNeha.png" alt="User_Img">
                        </div>
                        <input type="text" name="Name" placeholder="Enter Your Name" id="Name">
                        <input type="text" name="Username" placeholder="Username" id="Username">
                        <div class="PasswordBox">
                            <input type="password" name="Password" placeholder="Password" id="Password">
                            <span class="material-icons" onclick="ShowPassword('EyeIcon', 'Password')" id="EyeIcon">visibility_off</span>
                        </div>
                        <select id="UserRoll" name="Role">
                            <option>Normal User</option>
                            <option>Admin</option>
                        </select>
                        <div class="Form-Button">
                            <button id="CSaveBtn" class="CBtn">Cancel</button>
                            <button id="SaveBtn">Save</button>
                        </div>
                    </form>
                </div>
            </div>

            <div id="UpdateUsers_Form">
                <div id="UpdateForm">
                    <form>
                        <input type="file" hidden id="UP_UploadFile" name="Img">
                        <input type="text" hidden name="OldImg" id="OldImg">
                        <input type="text" hidden name="UpdateID" id="UpdateID">
                        <div id="UP_UploadImg_Box" onclick="document.getElementById('UP_UploadFile').click();">
                            <img src="../Img/XtarNeha.png" alt="User_Img" id="UPImg">
                        </div>
                        <input type="text" placeholder="Enter Your Name" name="Name" id="UP_Name">
                        <input type="text" placeholder="Username" name="Username" id="UP_Username">
                        <select id="UP_UserRoll" name="Role">
                            <option>Normal User</option>
                            <option>Admin</option>
                        </select>
                        <div class="Form-Button">
                            <button id="CUpdateBtn" class="CBtn">Cancel</button>
                            <button id="UpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Users.js"></script>