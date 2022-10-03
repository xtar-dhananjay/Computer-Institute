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
let File = document.getElementById("File");

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

  if (AddStatus == true) {
    // console.log('This rady to Update');

    let Form = document.querySelector('#Form form');
    console.log(Form);
    let FData = new FormData(Form);
    fetch('PHP/Students/Update.php', {
      method: "POST",
      body: FData
    })
    .then((Response) => Response.json())
    .then((Data) => {
      console.log(Data);
      if (Data.Status == 'Success') {
        window.location = "Students.php";
        ShowMessage(Success, 'Students Updated');
      }else if (Data.Status == 'Extanstion Problem') {
        ShowMessage(Error, 'Choose Only JPG, PNG, JPEG Images');
      }else{
        ShowMessage(Error, 'Have Some Problem');
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

function GetData(){
  let StudentID = document.getElementById('StudentID').textContent;
  fetch(`PHP/Students/GetData.php?StudentID=${StudentID}`)
  .then((Response) => Response.json())
  .then((Data) => {
    
    $('#SN').val(Data[0].SN);
    $('#Img').attr("src", 'Img/Students/' + Data[0].Student_Img);
    $('#OldImg').val(Data[0].Student_Img);
    $('#FullName').val(Data[0].Student_Name);
    $('#FatherName').val(Data[0].Father_Name);
    $('#DateBirth').val(Data[0].DOB);
    $('#PhoneNumber').val(Data[0].Phone);
    $('#Email').val(Data[0].Email);
    $('#Address').val(Data[0].Address);

    // Qualification
    let QualificationArray = ['Select Qualification', '10th Below', '11th', '12th', 'Graduate', 'B.Com', 'B.Tech', 'Graduate Above'];
    let QualificationHTML = '';
    QualificationArray.forEach(e => {
      if (e == Data[0].Education) {
        QualificationHTML += `<option selected>${e}</option>`;
      }else{
        QualificationHTML += `<option>${e}</option>`;
      }
    });
    $('#SelectQual').html(QualificationHTML);

    // Gender
    let GenderArray = ['Select Gander', 'Male', 'Female', 'Other']
    let GenderHTML = '';
    GenderArray.forEach(e => {
      if (e == Data[0].Gander) {
        GenderHTML += `<option selected>${e}</option>`;
      }else{
        GenderHTML += `<option>${e}</option>`;
      }
    });
    $('#SelectGender').html(GenderHTML);

  })
}

GetData();