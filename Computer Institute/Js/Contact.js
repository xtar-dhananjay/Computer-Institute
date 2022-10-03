// this is for Show active Page
let CourseTab = document.querySelectorAll('#ManuBar li');
CourseTab[0].classList.remove('ActivePage');
CourseTab[3].classList.add('ActivePage');

// Start Form Validation
let FullName = document.getElementById('FullName');
let PhoenNumber = document.getElementById('PhoenNumber');
let Message = document.getElementById('Message');
let SubmitBtn = document.querySelector('#SubmitBTN button');

SubmitBtn.onclick = (e) => {

    // Full Name
    if (FullName.value.length >= 3) {
        FullName.style.borderColor = "#8348ff66";
    }else{
        FullName.style.borderColor = "red";
        e.preventDefault()

    }
    
    // Phone Number
    let Phoneno = /^\d{10}$/;
    if (PhoenNumber.value.match(Phoneno)) {
        PhoenNumber.style.borderColor = "#8348ff66";
    }else{
        PhoenNumber.style.borderColor = "red";
        e.preventDefault()    

    }

    // Message
    if (Message.value.length >= 2) {
        Message.style.borderColor = "#8348ff66";
    }else{
        Message.style.borderColor = "red";    
        e.preventDefault()

    }
}

// Full Name
FullName.onkeyup = () => {
    if (FullName.value.length >= 3) {
        FullName.style.borderColor = "#8348ff66";
    }
}

// Phone Number
PhoenNumber.onkeyup = () => {
    let Phoneno = /^\d{10}$/;
    if (PhoenNumber.value.match(Phoneno)) {
        PhoenNumber.style.borderColor = "#8348ff66";
    }
}

// Message
Message.onkeyup = () => {
    if (Message.value.length >= 2) {
        Message.style.borderColor = "#8348ff66";
    }
}

// Get Data Form the DataBase
function GetData(){
    fetch('PHP/Contact/GetData.php')
    .then((Response) => Response.json())
    .then((Data) => {
        $('#Googla_Maps').html(Data[0].CInfo_Map);
        $('#Timing').text(Data[0].CInfo_Timing);      
        $('#Address').text(Data[0].CInfo_Address);
        $('#Email').text(Data[0].CInfo_Email);
        $('#Phone1').text(Data[0].CInfo_Phone1);
        $('#Phone2').text(Data[0].CInfo_Phone2);
        
    })
}
GetData();