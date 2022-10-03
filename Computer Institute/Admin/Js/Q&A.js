const CurentPage = document.querySelectorAll('#SideBar ul li a');
if ($('#HeaderRolle').text() == 'Normal User') {
    CurentPage[2].classList.add('Active');
    
}else{
    CurentPage[5].classList.add('Active');
}

$(document).on('click', '.Expland', function(){
    let MainCont = $(this).closest(".QA");
    let MainP = MainCont.children('.Answer');
    MainP.toggleClass('Active');
    if ($(this).text() == 'add') {
        $(this).text('remove');
    }else{
        $(this).text('add');

    }
})

// Start Form Validation
let Cancel = document.getElementById('Cancel');
let Add = document.getElementById('Add');
let Add_FormCont = document.getElementById('Add_FormCont');
let Add_QA_Btn = document.getElementById('Add_QA_Btn');
let QuationInput = document.getElementById('QuationInput');
let AnswerInput = document.getElementById('AnswerInput');
let AllEdit_Btn = document.querySelectorAll('#All_QA .QA .Quation .Edit');
let AllDelete_Btn = document.querySelectorAll('#All_QA .QA .Quation .Trash');
let UP_QuationInput = document.getElementById('UP_QuationInput');
let UP_AnswerInput = document.getElementById('UP_AnswerInput'); 
let UP_FormCont = document.getElementById('UP_FormCont');
let UP_Cancel = document.getElementById('UP_Cancel');
let UP_Add = document.getElementById('UP_Add');
let All_QA = document.getElementById('All_QA');


// This is for Add form
Add_QA_Btn.onclick = () => {
    Add_FormCont.classList.add('Active');
}

Cancel.onclick = (e) => {
    e.preventDefault();
    Add_FormCont.classList.remove('Active');
}


let AddForm_Status = true;
Add.onclick = (e) => {
    e.preventDefault();
    FormValidation1(QuationInput);
    FormValidation1(AnswerInput);
    if (AddForm_Status == true) {
        let Form = document.querySelector('#Add_FormCont form');
        let FData = new FormData(Form);
        fetch("PHP/Q&A/Insert.php",{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == "Success") {
                Add_FormCont.classList.remove('Active');
                ShowMessage(Success, 'Question Added Successfuly');
                LoadData();
                Form.reset();
            }else if(Data.Status == 'Already Added'){
                ShowMessage(Error, 'This Question Already Added');
                
            }else{
                ShowMessage(Error, 'Have A Some Error');
                
            }
        })

    }else{
        console.log('Not Rady');
        AddForm_Status = true;

    }
}

QuationInput.onkeyup = () => {
    FormValidation2(QuationInput);
}
AnswerInput.onkeyup = () => {
    FormValidation2(AnswerInput);
}



function FormValidation1(ID){
    if (ID.value == '') {
        ID.style.borderColor = '#ff0000';
        AddForm_Status = false;
    }else{
        ID.style.borderColor = '#9c9c9c';
        
    }
}

function FormValidation2(ID){
    if (ID.value != '') {
        ID.style.borderColor = '#9c9c9c';
    }
}

// Start Update Form
$(document).on('click', '.Edit', function(){
    UP_FormCont.classList.add('Active');
    let UpdateID = $(this).attr('UpdateID');
    console.log(UpdateID);

    // Get Data From DataBase

    fetch(`PHP/Q&A/GetData.php?UpdateID=${UpdateID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        console.log(Data);
        $('#UP_QuationInput').val(Data[0].Question);
        $('#UP_AnswerInput').val(Data[0].Answer);
        $('#UP_Add').attr('UpdateID', Data[0].QN_ID);
        
    })


    
});

UP_Cancel.onclick = (e) => {
    e.preventDefault();
    UP_FormCont.classList.remove('Active');
}

let UP_AddForm_Status = true;
$(document).on('click', '#UP_Add', function(e){

    e.preventDefault();
    UP_FormValidation1(UP_QuationInput);
    UP_FormValidation1(UP_AnswerInput);
    if (UP_AddForm_Status == true) {
        console.log('This rady to upload');
        // Update Q&A
        let UpdateID = $(this).attr('UpdateID');
        console.log(UpdateID);

        let Form = document.querySelector('#UP_FormCont form');
        let FData = new FormData(Form);
        FData.append('UpdateID', UpdateID)
        
        fetch('PHP/Q&A/Update.php', {
            method: "POST",
            body: FData
        })

        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == "Success") {
                ShowMessage(Success, 'Question Updated');
                UP_FormCont.classList.remove('Active');
                Form.reset();
                LoadData();
            }else{
                ShowMessage(Error, 'Have A Some Error');
                
            }
            console.log(Data);
        })
        
        
        
    }else{
        console.log('Not Rady');
        UP_AddForm_Status = true;
        
    }
})

UP_QuationInput.onkeyup = () => {
    UP_FormValidation2(UP_QuationInput);
}
UP_AnswerInput.onkeyup = () => {
    UP_FormValidation2(UP_AnswerInput);
}



function UP_FormValidation1(ID){
    if (ID.value == '') {
        ID.style.borderColor = '#ff0000';
        UP_AddForm_Status = false;
    }else{
        ID.style.borderColor = '#9c9c9c';
        
    }
}

function UP_FormValidation2(ID){
    if (ID.value != '') {
        ID.style.borderColor = '#9c9c9c';
    }
}

function LoadData(){
    fetch('PHP/Q&A/Show.php')
    .then((Response) => Response.json())
    .then((Data) => {
        let ApiData = '';
        if (Data.Status == 'Empty') {
            ApiData += `<p style="text-align: center; font-size: 25px;">No Data Found</p>`;
        }else{
            for (let i = 0; i < Data.length; i++) {
                ApiData += `<div class="QA">
                                <div class="Quation">
                                    <h3>${Data[i].Question}</h3>
                                    <div class="Icons">
                                        <span class="material-icons Expland">add</span>
                                        <i UpdateID='${Data[i].QN_ID}' class="fa-solid fa-pen-to-square Edit"></i>
                                        <i DeleteID='${Data[i].QN_ID}' class="fa-solid fa-trash Trash"></i>
                                    </div>
                                </div>
                                <p class="Answer">${Data[i].Answer}</p>
                            </div>`;
                
            }
        }
        All_QA.innerHTML = ApiData;
    })
}
LoadData();

$(document).on('click', '.Trash', function(){
    let DeleteID = $(this).attr('DeleteID');
    fetch(`PHP/Q&A/Delete.php?DeleteID=${DeleteID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.Status = "Success") {
            ShowMessage(Success, 'Question Deleted');
            $(this).closest('.QA').fadeOut();
        }else{
            ShowMessage(Error, 'Have A Some Error');
        }
    })
})