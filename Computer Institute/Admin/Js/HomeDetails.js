const CurentPage = document.querySelectorAll('#SideBar ul li a');
CurentPage[9].classList.add('Active');

let FormBox = document.getElementById('HomeDetails_2');
let DescInput = document.getElementById('DescInput');
let CancelBtn = document.getElementById('CancelBtn');
let UpdateBtn = document.getElementById('UpdateBtn');
let EditBtn = document.querySelectorAll('#All_Feature .EditBtn');

$(document).on('click', '.EditBtn', function(){
    FormBox.classList.add('Active');
    let UpdateID = $(this).attr('data');

    fetch(`PHP/HomeDetails/GetData.php?UpdateID=${UpdateID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        DescInput.value = Data[0].Feature;
        $('#UpdateID').val(Data[0].Feature_ID);
    })

})

CancelBtn.onclick = (e) => {
    e.preventDefault();
    FormBox.classList.remove('Active');
}

let UpdateStatus = true;
UpdateBtn.onclick = (e) => {
    e.preventDefault();
    if (DescInput.value == '' || DescInput.value.length > 150) {
        DescInput.style.borderColor = '#ff0000';
        UpdateStatus = false;
    }else{
        DescInput.style.borderColor = '#d3d3d3';
    }
    if (UpdateStatus == true) {
        // console.log('This rady to upload');
        let Form = document.querySelector('#HomeDetails_2 form');
        let FData = new FormData(Form);
        fetch('PHP/HomeDetails/Update.php',{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == "Success") {
                ShowMessage(Success, 'Feature Updated');
                FormBox.classList.remove('Active');
                LoadData();
            }else{
                ShowMessage(Error, 'Have A Some Error');
                
            }
        })
        
    }else{
        UpdateStatus = true;
        console.log('Not Rady');
    }
}

DescInput.onkeyup = () => {
    if (DescInput.value != '' && DescInput.value.length < 150) {
        DescInput.style.borderColor = '#d3d3d3';
    }
}

// Laod Data From Data Base
function LoadData(){
    fetch("PHP/HomeDetails/Show.php")
    .then((Response) => Response.json())
    .then((Data) => {
        $('#Feature1').text(Data[0].Feature);
        $('#FeatureBtn1').attr('data',Data[0].Feature_ID);
        $('#Feature2').text(Data[1].Feature);
        $('#FeatureBtn2').attr('data',Data[1].Feature_ID);
        $('#Feature3').text(Data[2].Feature);
        $('#FeatureBtn3').attr('data',Data[2].Feature_ID);
    })
}
LoadData();