const CurentPage = document.querySelectorAll('#SideBar ul li a');
CurentPage[8].classList.add('Active');

let SaveBtn = document.getElementById('SaveBtn');
let UpdateBtn = document.getElementById('UpdateBtn');
let AddUsers_Form = document.getElementById('AddUsers_Form');
let UpdateUsers_Form = document.getElementById('UpdateUsers_Form');
let AddUserBtn = document.getElementById('AddUserBtn');
let CSaveBtn = document.getElementById('CSaveBtn');
let CUpdateBtn = document.getElementById('CUpdateBtn');
let AllEditBtn = document.querySelectorAll('#UsersTable .Edit');
let Name = document.getElementById('Name');
let Username = document.getElementById('Username');
let Password = document.getElementById('Password');
let UserRoll = document.getElementById('UserRoll');
let UploadFile = document.getElementById('UploadFile');
let UploadImg_Box = document.getElementById('UploadImg_Box');
let Upload_Icon = document.getElementById('Upload_Icon');
let UploadImg = document.querySelector('#UploadImg_Box img');
let UP_Name = document.getElementById('UP_Name');
let UP_Username = document.getElementById('UP_Username');
let UP_UserRoll = document.getElementById('UP_UserRoll');
let UP_UploadFile = document.getElementById('UP_UploadFile');
let UP_UploadImg_Box = document.getElementById('UP_UploadImg_Box');
let UP_UploadImg = document.querySelector('#UP_UploadImg_Box img');
let Tbody = document.querySelector('#UsersTable table tbody');


// This is the Password Showing Button
function ShowPassword(EyeID, InputID){
    let Input = document.getElementById(InputID);
    let Eye = document.getElementById(EyeID);
    if (Eye.innerText == 'visibility_off') {
        Eye.innerText = 'visibility';
        Eye.style.color = 'var(--Main-Color)';
        Input.type = 'text';
    }else{
        Eye.innerText = 'visibility_off';
        Eye.style.color = '#b8b8b8';
        Input.type = 'password';
    }
}

CSaveBtn.onclick = (e) => {
    e.preventDefault();
    AddUsers_Form.classList.remove('Active');
    let Form = document.querySelector('#AddForm form');
    Form.reset();
    UploadImg.src = '';
    Upload_Icon.style.display = 'block';
    UploadImg.style.display = 'none';
}

CUpdateBtn.onclick = (e) => {
    e.preventDefault();
    UpdateUsers_Form.classList.remove('Active');
}

AddUserBtn.onclick = () => {
    AddUsers_Form.classList.add('Active');
}

$(document).on('click', '.Edit', function(){
    UpdateUsers_Form.classList.add('Active');
    let UpdateID = $(this).attr('editid');
    console.log(UpdateID);
    fetch(`PHP/Users/GetData.php?UpdateID=${UpdateID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        console.log(Data);
        $('#OldImg').val(Data[0].UserImg);
        $('#UpdateID').val(Data[0].User_ID);
        $('#UP_Name').val(Data[0].UserFullName);
        $('#UP_Username').val(Data[0].UserName);
        $('#UPImg').attr('src', 'Img/Users/' + Data[0].UserImg);

        let SelectArray = ['Normal User', 'Admin'];
        let SelectHTML = '';
        for (let i = 0; i < SelectArray.length; i++) {
            if (SelectArray[i] == Data[0].User_Role) {
                SelectHTML += `<option selected>${SelectArray[i]}</option>`;
            }else{
                SelectHTML += `<option>${SelectArray[i]}</option>`;
            }
            
        }

        $('#UP_UserRoll').html(SelectHTML);

    })
})

let SaveStatus = true;
SaveBtn.onclick = (e) => {
    e.preventDefault();
    Validate(Name);
    Validate(Username);
    Validate(Password);
    
    if (UploadFile.files[0] == undefined) {
        UploadImg_Box.style.border = '2px solid red';
        SaveStatus = false;
    }else{
        UploadImg_Box.style.border = 'none';
    }

    if (SaveStatus == true) {
        // Write Ajx Hiar for uploading the Course on server
        let Form = document.querySelector('#AddForm form');
        let FData = new FormData(Form);
        fetch('PHP/Users/Insert.php',{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == "Success") {
                AddUsers_Form.classList.remove('Active');
                ShowMessage(Success, 'User Added Successfuly');
                Form.reset();
                UploadImg.src = '';
                Upload_Icon.style.display = 'block';
                UploadImg.style.display = 'none';
                LoadData();
            }else if(Data.Status == 'Already Added'){
                ShowMessage(Error, 'This Username Already Added');                
            }else if(Data.Status == 'Extanstion Problem'){
                ShowMessage(Error, 'Choose Only JPG, PNG, JPEG Images');
            }else{
                ShowMessage(Error, 'Have A Some Error');                
            }
        })
    }else{
        SaveStatus = true;
        console.log('Not Rady');
        
    }
}

let UPdateStatus = true;
UpdateBtn.onclick = (e) => {
    e.preventDefault();
    UP_Validate(UP_Name);
    UP_Validate(UP_Username);

    if (UPdateStatus == true) {
        console.log('This rady to upload');
        // Write Ajx Hiar for uploading the Course on server
        let Form = document.querySelector('#UpdateForm form');
        let FData = new FormData(Form);
        fetch('PHP/Users/Update.php',{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == 'Success') {
                UpdateUsers_Form.classList.remove('Active');
                Form.reset();
                ShowMessage(Success, 'User Udpated');
                LoadData();
            }else if (Data.Status == 'Extanstion Problem') {
                ShowMessage(Error, 'Choose Only JPG, PNG, JPEG Images');
            }else{
                ShowMessage(Error, 'Have Some Problem');
            }
            console.log(Data);
        })
    }else{
        UPdateStatus = true;
        console.log('Not Rady');
        
    }

}

UploadFile.onchange = () => {
    if (UploadFile.files[0] != undefined) {
        UploadImg_Box.style.border = 'none';
        UploadImg.src = URL.createObjectURL(UploadFile.files[0]);
        Upload_Icon.style.display = 'none';
        UploadImg.style.display = 'block';
    }
}

UP_UploadFile.onchange = () => {
    if (UP_UploadFile.files[0] != undefined) {
        UP_UploadImg_Box.style.border = 'none';
        UP_UploadImg.src = URL.createObjectURL(UP_UploadFile.files[0]);
    }
}

function Validate(ID){
    if (ID.value == '') {
        ID.style.borderColor = 'red';
        SaveStatus = false;
    }else{
        ID.style.borderColor = '#9c9c9c';

    }
}

function UP_Validate(ID){
    if (ID.value == '') {
        ID.style.borderColor = 'red';
        UPdateStatus = false;
    }else{
        ID.style.borderColor = '#9c9c9c';

    }
}

// For Add Inputs
Name.onkeyup = () => {
    Validate2(Name);
}
Username.onkeyup = () => {
    Validate2(Username);
}
Password.onkeyup = () => {
    Validate2(Password);
}

// For Update Inputs
UP_Name.onkeyup = () => {
    Validate2(UP_Name);
}
UP_Username.onkeyup = () => {
    Validate2(UP_Username);
}

function Validate2(ID){
    if (ID.value != '') {
        ID.style.borderColor = '#9c9c9c';
    }
}

function LoadData(){

    fetch('PHP/Users/Show.php')
    .then((Response) => Response.json())
    .then((Data) => {
        console.log(Data);
        let UserHTML = '';
        for (let i = 0; i < Data.length; i++) {
            UserHTML += `<tr>
                            <td>${1 + i}</td>
                            <td>${Data[i].UserFullName}</td>
                            <td>${Data[i].UserName}</td>
                            <td>${Data[i].User_Role}</td>
                            <td><i EditID="${Data[i].User_ID}" class="fa-solid fa-pen-to-square Edit"></i></td>
                            <td><i DeleteID="${Data[i].User_ID}" class="fa-solid fa-trash Trash"></i></td>
                        </tr>`
            
        }
        Tbody.innerHTML = UserHTML;
    })
    
}

LoadData();

// This is for Delete Form DataBase
$(document).on('click', '.Trash', function(){
    let DeleteID = $(this).attr('DeleteID');
    console.log(DeleteID);
    fetch(`PHP/Users/Delete.php?DeleteID=${DeleteID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.Status == 'Success') {
            $(this).closest('tr').fadeOut();
            ShowMessage(Success, 'User Deleted');
        }else{
            ShowMessage(Error, 'Some Error');
        }
        console.log(Data);
    })
})