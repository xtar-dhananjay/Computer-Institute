<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Category.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Category-Page">

        <!-- Category_1 -->
        <div id="Category_1">
            <div id="TopBar">
                <h2>All Category</h2>
                <button id="AddCategoryBtn">Add Category</button>
            </div>
            <div id="Category_Table">
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Course Category</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody id="TBody">
                        
                        <!-- Data Come's From API -->

                    </tbody>
                </table>
            </div>
        </div>

        <div id="Category_Form">
            <div id="Form">
                <h2>Add Category</h2>
                <input type="text" id="CategoryField" placeholder="Course Name">
                <div id="Btns">
                    <button id="CancelBtn">Cancel</button>
                    <button id="AddNowBtn">Add</button>
                </div>
            </div>
        </div>

        <div id="UP_Category_Form">
            <div id="UP_Form">
                <h2>Update Category</h2>
                <input type="text" id="UP_CategoryField" placeholder="Course Name">
                <input type="text" id="UP_CategoryID" hidden>
                <div id="UP_Btns">
                    <button id="UP_CancelBtn">Cancel</button>
                    <button id="UP_AddNowBtn">Update</button>
                </div>
            </div>
        </div>

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Category.js"></script>