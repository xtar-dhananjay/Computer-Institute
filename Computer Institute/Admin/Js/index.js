let EyeIcon = document.querySelector('#Container form div .material-icons.Eye');
let PasswordInput = document.getElementById('PasswordInput');
let UsernameInput = document.getElementById('UsernameInput');
let Username = document.getElementById('Username');
let Password = document.getElementById('Password');
let loginBtn = document.getElementById('loginBtn');

EyeIcon.onclick = () => {
    if (PasswordInput.type == 'password') {
        EyeIcon.textContent = 'visibility_off';
        EyeIcon.style.color = '#8549FE';
        PasswordInput.type = 'text';
    }else{
        EyeIcon.style.color = '#d3d3d3';
        EyeIcon.textContent = 'visibility';
        PasswordInput.type = 'password';
    }
    
}

let LoginStatus = true;
loginBtn.onclick = (e) => {
    e.preventDefault();

    // UserName
    if (UsernameInput.value == '') {
        LoginStatus = false;
        Username.style.borderColor = 'red';
    }else{
        Username.style.borderColor = '#8549FE';
    }
    
    // Password
    if (PasswordInput.value == '') {
        Password.style.borderColor = 'red';
        LoginStatus = false;
    }else{
        Password.style.borderColor = '#8549FE';

    }
    // LoginStatus = true
    if (LoginStatus == true) {
        // console.log('This is ready to uplaod');

        let Form = document.getElementById('Form');
        let FData = new FormData(Form);
        fetch('PHP/Admin/Login.php',{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == "Invalid Username") {
                ShowMessage(Error, 'Invalid Username');

            }else if(Data.Status == "Wrong Password"){
                ShowMessage(Error, 'Invalid Password');

            }else if(Data.Status == 'Sucess'){
                window.location = "DashBoard.php";
            }

        })
        
    }else{
        // console.log('not ready');
        LoginStatus = true;
    }

}

// UserName
UsernameInput.onkeyup = () => {
    if (UsernameInput.value != '') {
        Username.style.borderColor = '#8549FE';
    }
}

// Password
PasswordInput.onkeyup = () => {
    if (PasswordInput.value != '') {
        Password.style.borderColor = '#8549FE';
    }
}


const Error = document.getElementById('Error-Message');
const Success = document.getElementById('Success-Message');

// Message
function ShowMessage(Message, Text){
    Message.classList.add('Active');
    TextValue = Message.querySelector('p').innerText = Text;
    setTimeout(() => {
        Message.classList.remove('Active');
    }, 3000);
}