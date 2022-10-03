<?php include 'header.php' ?>
<link rel="stylesheet" href="Css/Dashboard.Css">
<link rel="stylesheet" href="Css/Contact.css">
<section id="DashBoard">
    <div id="Header">
        <i id="ManuBtn" class="fa-solid fa-bars"></i>
        <img src="Img/Users/<?php echo $_SESSION['UserImg']; ?>" alt="Admin Photo">
    </div>
    <section id="Index-Page">
    
        <!-- DashBoard_2 -->
        <div id="DashBoard_2">
            <div id="Table_Box">
                <h2>Contact's</h2>
                <table>
                    <thead>
                        <tr>    
                            <th>SN</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Time</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Data Comes From The DataBase -->
                    </tbody>
                </table>
                <div id="MoreInquiry" style="text-align: center;">
                    <button>Load More</button>
                </div>
            </div>
        </div>

        <!-- MessageBox -->
        <div id="InquiryMessage_Box">
            <div id="InquiryMessage">
                <p>ullam corporis, nam quas ullam corporis, nam quas ullam corporis, nam quas amet veniam, fugiat incidunt quaerat nostrum? Quam rem dolor veritatis.</p>
                <div>
                    <button id="MsgBox_Close">Close</button>
                </div>
            </div>
        </div>

    </section>
</section>
<script src="Js/heades.js"></script>
<script src="Js/Contact.js"></script>