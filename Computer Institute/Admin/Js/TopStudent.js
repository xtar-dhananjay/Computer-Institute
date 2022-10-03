const CurentPage = document.querySelectorAll('#SideBar ul li a');
CurentPage[9].classList.add('Active');

let TeacherForm = document.getElementById('TeacherForm');
let CancelBtn = document.querySelector('#TeacherForm .FormButton .Cancel');
let SaveBtn = document.querySelector('#TeacherForm .FormButton .Save');
let Name = document.querySelector('#TeacherForm .Name');
let Position = document.querySelector('#TeacherForm .Position');
let AddTeacherBtn = document.getElementById('AddTeacherBtn');
let File = document.getElementById('File');
let ImgBox = document.querySelector('#TeacherForm .UplaodImg');
let Img = document.querySelector('#TeacherForm .UplaodImg img');
let UploadMsg = document.querySelector('#TeacherForm .UplaodImg .UploadMsg');
let UP_TeacherForm = document.getElementById('UP_TeacherForm');
let UP_CancelBtn = document.querySelector('#UP_TeacherForm .FormButton .Cancel');
let UP_SaveBtn = document.querySelector('#UP_TeacherForm .FormButton .Save');
let UP_Name = document.querySelector('#UP_TeacherForm .Name');
let UP_Position = document.querySelector('#UP_TeacherForm .Position');
let EditBtn = document.querySelectorAll('#AllTeam .Member .Edit');
let UPFile = document.getElementById('UPFile');
let UPImgBox = document.querySelector('#UP_TeacherForm .UplaodImg');
let UPImg = document.querySelector('#UP_TeacherForm .UplaodImg img');
let LoadMoreCont = document.getElementById('LoadMore_Box');
let AllTeam = document.getElementById('AllTeam');

// Teacher Add Form
AddTeacherBtn.onclick = () => {
    TeacherForm.classList.add('Active');
}

CancelBtn.onclick = (e) => {
    e.preventDefault();
    TeacherForm.classList.remove('Active');
    
    // For Reset Form
    let Form = document.querySelector('#TeacherForm form');
    Form.reset();
    UploadMsg.style.display = 'block';
    Img.style.display = 'none';
    Img.src = '';
}

let SaveStatus = true;
SaveBtn.onclick = (e) => {
    e.preventDefault();
    FormValidat_1(Name)
    FormValidat_1(Position)
    
    if (File.files[0] == undefined) {
        ImgBox.style.borderColor = '#ff0000';
        SaveStatus = false;     
    }else{
        ImgBox.style.borderColor = 'var(--Main-Color)';
    }

    if (SaveStatus == true) {
        let Form = document.querySelector('#TeacherForm form');
        let FData = new FormData(Form);
        
        fetch('PHP/TopStudents/Insert.php',{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == 'Success') {
                Form.reset();
                UploadMsg.style.display = 'block';
                Img.style.display = 'none';
                Img.src = '';
                ShowMessage(Success, 'Student Successfully Add');
                TeacherForm.classList.remove('Active');
                LastIndex = 15;
                AllTeam.innerHTML = '';
                LaodData(0);
            }else if (Data.Status == 'Extanstion Problem') {
                ShowMessage(Error, 'Choose Only JPG, PNG, JPEG Images');
            }else{
                ShowMessage(Error, 'Have a Some Error');
            }
        })

    }else{
        console.log('Not Rady');
        SaveStatus = true;     
    }
}

File.onchange = () => {
    if (File.files[0] != undefined) {
        ImgBox.style.borderColor = 'var(--Main-Color)';
        Img.src = URL.createObjectURL(File.files[0]);
        UploadMsg.style.display = 'none';
        Img.style.display = 'Block';
    }else{
        UploadMsg.style.display = 'block';
        Img.style.display = 'none';
    }
}

Name.onkeyup = () => {
    FormValidat_2(Name);
}

Position.onkeyup = () => {
    FormValidat_2(Position);
}

function FormValidat_1(ID){
    if (ID.value == "") {
        ID.style.borderColor = '#ff0000';
        SaveStatus = false;
    }else{
        ID.style.borderColor = '#9c9c9c';
    }
}

function FormValidat_2(ID){
    if (ID.value != "") {
        ID.style.borderColor = '#9c9c9c';
    }
}

// Students Update Form
$(document).on('click', '.Edit', function(){
    UP_TeacherForm.classList.add('Active');
    let UpdateID = $(this).attr('updateid');
    console.log(UpdateID);
    fetch(`PHP/TopStudents/GetData.php?UpdateID=${UpdateID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        console.log(Data);
        $('#UPImg').attr('src', 'Img/TopStudents/' + Data[0].TopStudent_Img);
        $('#StudentID').val(Data[0].TopStudent_ID);
        $('#OldImg').val(Data[0].TopStudent_Img);
        $('#UP_Name').val(Data[0].TopStudent_Name);
        $('#UP_Course').val(Data[0].TopStudent_Course);
    })
})

UP_CancelBtn.onclick = (e) => {
    e.preventDefault();
    UP_TeacherForm.classList.remove('Active');
}

let UpdateStatus = true;
UP_SaveBtn.onclick = (e) => {
    e.preventDefault();
    UPFormValidat_1(UP_Name)
    UPFormValidat_1(UP_Position)

    if (UpdateStatus == true) {
        console.log('This rady to upload');

        let Form = document.querySelector('#UP_TeacherForm form');
        let FData = new FormData(Form);
        fetch('PHP/TopStudents/Update.php',{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == 'Success') {
                UP_TeacherForm.classList.remove('Active');
                Form.reset();
                ShowMessage(Success, 'Student Updated');
                LastIndex = 15;
                AllTeam.innerHTML = '';
                LaodData(0);
            }else if (Data.Status == 'Extanstion Problem') {
                ShowMessage(Error, 'Choose Only JPG, PNG, JPEG Images');
            }else{
                ShowMessage(Error, 'Have Some Problem');
            }
            console.log(Data);
        })

    }else{
        console.log('Not Rady');
        UpdateStatus = true;     
    }
}


UPFile.onchange = () => {
    if (UPFile.files[0] != undefined) {
        UPImgBox.style.borderColor = 'var(--Main-Color)';
        UPImg.src = URL.createObjectURL(UPFile.files[0]);
    }
}

UP_Name.onkeyup = () => {
    UPFormValidat_2(UP_Name);
}

UP_Position.onkeyup = () => {
    UPFormValidat_2(UP_Position);
}

function UPFormValidat_1(ID){
    if (ID.value == "") {
        ID.style.borderColor = '#ff0000';
        UpdateStatus = false;
    }else{
        ID.style.borderColor = '#9c9c9c';
    }
}

function UPFormValidat_2(ID){
    if (ID.value != "") {
        ID.style.borderColor = '#9c9c9c';
    }
}

let LastIndex = 15;
function LaodData(Page){
    fetch(`PHP/TopStudents/Show.php?Page=${Page}`)
    .then((Response) => Response.json())
    .then((Data) => {
        let StudentsHTML = '';
        if (Data.Status == 'Empty'){
            $('#LearnMoreBtn').prop('disabled', true);
            $('#LearnMoreBtn').text('Finished');
            $('#LearnMoreBtn').css('background', '#73777B');
            console.log(Data);
        }else{
            for (let i = 0; i < Data.length; i++) {
                StudentsHTML += `<div class="Member">
                                    <img src="Img/TopStudents/${Data[i].TopStudent_Img}" alt="Team_member">
                                    <p class="Member_Name">${Data[i].TopStudent_Name}</p>
                                    <p class="Member_Position">${Data[i].TopStudent_Course}</p>
                                    <div class="Buttons">
                                        <button DeleteID="${Data[i].TopStudent_ID}" class="Delete">Delete</button>
                                        <button UpdateID="${Data[i].TopStudent_ID}" class="Edit">Edit</button>
                                    </div>
                                </div>`;
                
            }
            AllTeam.insertAdjacentHTML("beforeend",StudentsHTML);
            LoadMoreCont.innerHTML = `<button style="margin: auto;" id="LearnMoreBtn" data-indexID="${LastIndex}">Load More</button>`;
            if (LastIndex == 15) {   
                TestButton();
            }
            LastIndex = LastIndex + 10;
        }
        console.log(Data);
    })
}
LaodData(0);


$(document).on('click', '#LearnMoreBtn', function(){
    let LI = $(this).data('indexid');
    LaodData(LI);
})

// Get Total TopStudents Form DataBase For LaodMore Button
function TestButton(){
    fetch('PHP/TopStudents/LaodMore.php')
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.TotalData > 15) {
            $('#LearnMoreBtn').css('display', 'block');
        }else{
            $('#LearnMoreBtn').css('display', 'none');
        }
    })
}

// Delete Top Students
$(document).on('click', '.Delete', function(){
    let DeleteID = $(this).attr('DeleteID');
    fetch(`PHP/TopStudents/Delete.php?DeleteID=${DeleteID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.Status == 'Success') {
            NewIndex = $('#LearnMoreBtn').data('indexid') - 1;
            $('#LearnMoreBtn').data('indexid', NewIndex);
            LastIndex = LastIndex - 1;
            $(this).closest('.Member').fadeOut();
            ShowMessage(Success, 'Student Removed');
        }else{
            ShowMessage(Error, 'Some Error');
        }
        console.log(Data);
    })
})