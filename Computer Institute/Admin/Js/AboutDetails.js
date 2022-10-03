const CurentPage = document.querySelectorAll('#SideBar ul li a');
CurentPage[9].classList.add('Active');

let AboutTitle1 = document.getElementById('AboutTitle1');
let AboutDesc1 = document.getElementById('AboutDesc1');
let AboutTitle2 = document.getElementById('AboutTitle2');
let AboutDesc2 = document.getElementById('AboutDesc2');
let HomeDesc = document.getElementById('HomeDesc');
let InstituteName = document.getElementById('InstituteName');
let Copyright = document.getElementById('Copyright');
let UdpateID = document.getElementById('UdpateID');


let UploadStatus = true;
$('#UdpateBtn').click(function(e){
    e.preventDefault();
    CheckInputs(AboutTitle1);
    CheckInputs(AboutDesc1);
    CheckInputs(AboutTitle2);
    CheckInputs(AboutDesc2);
    CheckInputs(HomeDesc);
    CheckInputs(InstituteName);
    CheckInputs(Copyright);
    if (UploadStatus == true) {
        console.log('This is redy to uplaod');
        let Form = document.getElementById('Form');
        let FData = new FormData(Form);
        fetch('PHP/AboutDetails/UpdateID.php',{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            console.log(Data)
            if (Data.Status == 'Success') {
                ShowMessage(Success, 'About Info Updated');
                LoadData();
            }else{
                ShowMessage(Error, 'This Cagegory Already Added');
            }
        })
    }else{
        UploadStatus = true;
        console.log('Not Rady');
    }
});

AboutTitle1.onkeyup = () => {
    CheckInupts2(AboutTitle1);
}
AboutDesc1.onkeyup = () => {
    CheckInupts2(AboutDesc1);
}
AboutTitle2.onkeyup = () => {
    CheckInupts2(AboutTitle2);
}
AboutDesc2.onkeyup = () => {
    CheckInupts2(AboutDesc2);
}
HomeDesc.onkeyup = () => {
    CheckInupts2(HomeDesc);
}
InstituteName.onkeyup = () => {
    CheckInupts2(InstituteName);
}
Copyright.onkeyup = () => {
    CheckInupts2(Copyright);
}

function CheckInupts2(ID){
    if (ID.value != '') {
        ID.style.borderColor = '#d3d3d3';
    }
}

function CheckInputs(ID){
    let Input = $(ID);
    if (Input.val() == '') {
        Input.css('borderColor','#ff0000');
        UploadStatus = false;
    }else{
        Input.css('borderColor','#d3d3d3');
    }
}

// Get Data from the DataBase
function LoadData(){
    fetch('PHP/AboutDetails/Show.php')
    .then((Response) => Response.json())
    .then((Data) => {
        console.log(Data);
        AboutTitle1.value = Data[0].AboutTitle1
        AboutDesc1.value = Data[0].AboutDesc1
        AboutTitle2.value = Data[0].AboutTitle2
        AboutDesc2.value = Data[0].AboutDesc2
        HomeDesc.value = Data[0].HomeAbout
        InstituteName.value = Data[0].InstituteName
        Copyright.value = Data[0].CopyRight
        UdpateID.value = Data[0].About_ID;
    })
}

LoadData();