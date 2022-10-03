const CurentPage = document.querySelectorAll('#SideBar ul li a');
CurentPage[9].classList.add('Active');

let MapUrl = document.getElementById('MapUrl');
let Email = document.getElementById('Email');
let PhoneNumber_1 = document.getElementById('PhoneNumber_1');
let PhoneNumber_2 = document.getElementById('PhoneNumber_2');
let Timing = document.getElementById('Timing');
let Address = document.getElementById('Address');
let SubmitBtn = document.getElementById('SubmitBtn');
let UpdateID = document.getElementById('UpdateID');

let UpdateStatus = true;
SubmitBtn.onclick = (e) => {
    e.preventDefault();
    FormValidate(MapUrl);
    FormValidate(Email);
    ValidatePhoneNo(PhoneNumber_1);
    ValidatePhoneNo(PhoneNumber_2);
    FormValidate(Timing);
    FormValidate(Address);

    if (UpdateStatus == true) {
        console.log('This rady to upload');
        let Form = document.querySelector('#ContactDetails_1 form');
        let FData = new FormData(Form);
        fetch('PHP/ContactDetails/Update.php',{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == "Success") {
                ShowMessage(Success, 'Successfully Udpated');
                LoadData();
            }else{
                ShowMessage(Error, 'Have A Some Error');
                
            }
        })
    }else{
        console.log('Not Rady');
        UpdateStatus = true;
    }
    
}

MapUrl.onkeyup = () => {
    FormValidate2(MapUrl);
}

Email.onkeyup = () => {
    FormValidate2(Email);
}

Timing.onkeyup = () => {
    FormValidate2(Timing);
}

Address.onkeyup = () => {
    FormValidate2(Address);
}

PhoneNumber_1.onkeyup = () => {
    ValidatePhoneNo2(PhoneNumber_1);
}
PhoneNumber_2.onkeyup = () => {
    ValidatePhoneNo2(PhoneNumber_2);
}


function FormValidate2(ID){
    if (ID.value != "") {
        ID.style.borderColor = "#d3d3d3";
    }
}

function FormValidate(ID){
    if (ID.value == "") {
        ID.style.borderColor = "#ff0000";
        UpdateStatus = false;
    }else{
        ID.style.borderColor = "#d3d3d3";
    }
}

function ValidatePhoneNo2(ID){
    let Phoneno = /^\d{10}$/;
    if (ID.value.match(Phoneno)) {
        ID.style.borderColor = "#d3d3d3";
    }
}

function ValidatePhoneNo (ID){
    let Phoneno = /^\d{10}$/;
    if (ID.value.match(Phoneno)) {
        ID.style.borderColor = "#d3d3d3";
    }else{
        ID.style.borderColor = "#ff0000";
        UpdateStatus = false;
    }
}

function LoadData(){
    fetch('PHP/ContactDetails/GetData.php')
    .then((Response) => Response.json())
    .then((Data) => {
        MapUrl.value = Data[0].CInfo_Map;
        Email.value = Data[0].CInfo_Email;
        PhoneNumber_1.value = Data[0].CInfo_Phone1;
        PhoneNumber_2.value = Data[0].CInfo_Phone2;
        Timing.value = Data[0].CInfo_Timing;
        Address.value = Data[0].CInfo_Address;
        UpdateID.value = Data[0].CInfo_ID;
    })
}
LoadData();