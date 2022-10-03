
<?php

    include('PHP/Config.php');

    session_start(); 
    if (isset($_SESSION['UserRole'])) {
        header("location: DashBoard.php");
    }

    $Sql_Title = " SELECT InstituteName FROM `about` WHERE About_ID = :title_id "; 
    $Title_Stat = $Con -> prepare($Sql_Title);
    $title_id = 1;
    $Title_Stat -> bindParam(':title_id', $title_id);
    $Title_Stat -> execute();
    $Title_Data = $Title_Stat -> fetch(PDO::FETCH_ASSOC);
    $InstituteName = $Title_Data['InstituteName'];
    $Title = $InstituteName. ' Admin Panel';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="../Img/Favicon.png">
    <title><?php echo $Title; ?></title>
    <link rel="stylesheet" href="Css/index.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="Css/Warning.css">
</head>
<body>
    
    <div id="Container">
        <img src="../Img/Admin.png" alt="Admin_Img">
        <form id="Form">
            <div id="Username">
                <span class="material-icons input">person</span>
                <input name="Username" id="UsernameInput" type="text" placeholder="Username">
            </div>
            <div id="Password">
                <span class="material-icons input">lock</span>
                <input type="password" name="Password" id="PasswordInput" placeholder="Password">
                <span class="material-icons Eye">visibility</span>
            </div>
            <button id="loginBtn">Submit</button>
        </form>
    </div>

    <div id="Error-Message">
        <i class="fa-solid fa-circle-exclamation"></i>
        <p>Please Fill The all Fields</p>
    </div>

    <div id="Success-Message">
        <i class="fa-solid fa-check"></i>
        <p>Your Data Submit Successfully</p>
    </div>

    <script src="Js/index.js"></script>
</body>
</html>