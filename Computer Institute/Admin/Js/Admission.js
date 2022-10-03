const CurentPage = document.querySelectorAll("#SideBar ul li a");
CurentPage[4].classList.add("Active");

let FullName = document.getElementById("FullName");
let FatherName = document.getElementById("FatherName");
let DateBirth = document.getElementById("DateBirth");
let SelectQual = document.getElementById("SelectQual");
let SelectGender = document.getElementById("SelectGender");
let PhoneNumber = document.getElementById("PhoneNumber");
let Email = document.getElementById("Email");
let Address = document.getElementById("Address");
let AddBtn = document.getElementById("AddBtn");
let StudentImg = document.getElementById("StudentImg");
let Img = document.querySelector("#StudentImg img");
let UplaodMsg = document.getElementById("UplaodImg");
let File = document.getElementById("File");
let Form = document.querySelector('#Form Form');

let AddStatus = true;
AddBtn.onclick = (e) => {
  e.preventDefault();
  Validate1(FullName);
  Validate1(FatherName);
  Validate1(Address);

  // Birth
  let TodaysYear = TodayYear();
  let BearthYear = BirthYear();
  if (BearthYear > (TodaysYear - 5) || DateBirth.value == '') {
    DateBirth.style.border = "1px solid #ff0000";
    AddStatus = false;
  }else{
    DateBirth.style.border = "none";
  }

  // Phone Number Validate
  let Phoneno = /^\d{10}$/;
  if (PhoneNumber.value.match(Phoneno)) {
    PhoneNumber.style.border = "none";
  } else {
    AddStatus = false;
    PhoneNumber.style.border = "1px solid #ff0000";
  }

  // Email Validate
  let Mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(Email.value.match(Mailformat)){
    Email.style.border = "none";
  }else{
    Email.style.border = "1px solid #ff0000";
    AddStatus = false;
  }

  ValidateSelect1(SelectGender, 'Select Gander');
  ValidateSelect1(SelectQual, 'Select Qualification');

  // This is for File
  if (File.files[0] == undefined) {
    StudentImg.style.border = '1px solid #ff0000';
    AddStatus = false;
  }else{
    StudentImg.style.border = 'none';
  }

  if (AddStatus == true) {
    
    // console.log('This rady to upload');
    let StudentData = new FormData(Form);
    fetch("PHP/Students/Insert.php",{
      method: "POST",
      body: StudentData
    })
    .then((Response) => Response.json())
    .then((Data) => {
      if (Data.Status == 'Success') {
        ShowMessage(Success, 'Admission Successfull');
        window.location = "Students.php";
      }else if(Data.Status == 'Extanstion Problem'){
        ShowMessage(Error, 'Choose Only JPG, PNG, JPEG Images');
      }else{
        ShowMessage(Error, 'Some Error');
      }
    })


  }else{
    AddStatus = true;
    console.log('Not Rady');
  }

};

File.onchange = () => {
  if (File.files[0] != undefined) {
    Img.src = URL.createObjectURL(File.files[0]);
    Img.style.display = 'block';
    UplaodMsg.style.display = 'none';
    StudentImg.style.border = 'none';
  }else{
    Img.style.display = 'none';
    UplaodMsg.style.display = 'block';
    StudentImg.style.border = '1px solid #ff0000';
  }
}

FullName.onkeyup = () => {
  Validate2(FullName);
}
FatherName.onkeyup = () => {
  Validate2(FatherName);
}
Address.onkeyup = () => {
  Validate2(Address);
}

PhoneNumber.onkeyup = () => {
  let Phoneno = /^\d{10}$/;
  if (PhoneNumber.value.match(Phoneno)) {
    PhoneNumber.style.border = "none";
  } 
}
Email.onkeyup = () => {
  let Mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(Email.value.match(Mailformat)){
    Email.style.border = "none";
  }
}


SelectGender.onchange = () => {
  ValidateSelect2(SelectGender);
}
SelectQual.onchange = () => {
  ValidateSelect2(SelectQual);
}

DateBirth.onchange = () => {
  if (DateBirth.value != '') {
    DateBirth.style.border = 'none';
  }
}

// Birth
DateBirth.onchange = () => {    
  let TodaysYear = TodayYear();
  let BearthYear = BirthYear();
  if ((TodaysYear - 4) > BearthYear) {
    DateBirth.style.border = "none";
  }
}

function TodayYear(){
  let NowDate = new Date();
  return NowDate.getFullYear();
}

function BirthYear(){
  let DOB = DateBirth.value.split('-');
  return parseInt(DOB[0]);
}

function ValidateSelect1(ID, Text){
  if (ID.value == Text) {
    ID.style.border = '1px solid #ff0000';
    AddStatus = false;
  }else{
    ID.style.border = 'none';
  }
}

function ValidateSelect2(ID, Text){
  if (ID.value != Text) {
    ID.style.border = 'none';
  }
}


function Validate2(ID) {
  if (ID.value != "") {
    ID.style.border = "none";
  }
}


function Validate1(ID) {
  if (ID.value == "") {
    ID.style.border = "1px solid #ff0000";
    AddStatus = false;
  } else {
    ID.style.border = "none";
  }
}

