const CurentPage = document.querySelectorAll('#SideBar ul li a');
CurentPage[4].classList.add('Active');


let CourseBtn = document.querySelectorAll('#Table table td .CourseIcon');
let FormCont = document.getElementById('Student_4');
let Cancel = document.getElementById('Cancel');
let AllCourse = document.getElementById('AllCourse');
let AddCourse = document.getElementById('AddCourse');
let SubmitBtn = document.getElementById('SubmitBtn');
let Tbody = document.querySelector('#Table table tbody');
let LoadMoreBox = document.getElementById('LoadMore');
let SearchInput = document.getElementById('SearchInput');
let SelectFields = document.getElementById('SelectFields');

$(document).on('click', '.CourseIcon', function(){
    FormCont.classList.add('Active');
    let StudentID = $(this).attr('studentid');
    fetch(`PHP/Students/GetCourse.php?StudentID=${StudentID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        let CourseName = Data[0].Course_Name.split(', ');
        let CourseDate = Data[0].Coursoe_Date.split(', ');
        let CourseBatch = Data[0].Batch.split(', ');
        let RollNumber = Data[0].Roll_No.split(', ');
        let CertificateID = Data[0].Certificate_ID.split(', ');
        console.log(CourseName, CourseDate, CourseBatch, RollNumber, CertificateID);
        let AllCourseHTML = '';
        let TotalBatch = ['07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00', '22:00 - 23:00'];
        if (CourseName[0] != '') {
            
            for (let i = 0; i < CourseName.length; i++) {
                
                // This is for Auto Select Batch Section
                Timing = '';
                TotalBatch.forEach(e => {
                    if (e == CourseBatch[i]) {
                        Timing += `<option selected>${e}</option>`;
                        
                    }else{
                        Timing += `<option>${e}</option>`;
                    }

                })
                //

                let SelectCourses = '';
                let CategoryList = document.getElementById('CategoryList');
                let CategoryArray = CategoryList.value.split(",");
                CategoryArray.forEach(e => {
                    if (e == CourseName[i]) {
                        SelectCourses += `<option selected>${e}</option>`
                    }else{
                        SelectCourses += `<option>${e}</option>`
                    }
                })

                AllCourseHTML += `<div class="Course OldCourse">
                                    <select class="SelectCourse" onchange="if(this.value != 'Select Course'){this.style.border='none'}">
                                        ${SelectCourses}
                                    </select>
                                    <input class="Ddate" value="${CourseDate[i]}" type="date" onchange="if(this.value != ''){this.style.border='none'}">
                                    <input type="text" hidden class="RollNo" value="${RollNumber[i]}">
                                    <input type="text" hidden class="CertificateNo" value="${CertificateID[i]}">
                                    <select class="Timing" onchange="if(this.value != 'Select Timing'){this.style.border='none'}">
                                        <option>Select Timing</option>
                                        ${Timing}
                                    </select>
                                    <i class="fa-solid fa-trash CourseTrash" onclick="this.parentElement.remove();"></i>
                                </div>`;
            }
            AllCourse.innerHTML = AllCourseHTML;
        }else{
            AllCourse.innerHTML = '';
        }
        AllCourse.insertAdjacentHTML('beforeend', `<input type="text" hidden id="StudentID2" value="${StudentID}">`)

    })
    // console.log(StudentID);
})

Cancel.onclick = () => {
    FormCont.classList.remove('Active');
}

AddCourse.onclick = () => {
    let SelectCourses = '';
    let CategoryList = document.getElementById('CategoryList');
    let CategoryArray = CategoryList.value.split(",");
    SelectCourses = '<option>Select Course</option>';
    CategoryArray.forEach(e => {
        SelectCourses += `<option>${e}</option>`
    })
    AllCourse.insertAdjacentHTML('beforeend',  `<div class="Course">
                                                    <select class="SelectCourse" onchange="if(this.value != 'Select Course'){this.style.border='none'}">
                                                    ${SelectCourses}
                                                    </select>
                                                    <input class="Ddate" type="date" onchange="if(this.value != ''){this.style.border='none'}">
                                                    <input type="text" hidden class="RollNo">
                                                    <input type="text" hidden class="CertificateNo">
                                                    <select class="Timing" onchange="if(this.value != 'Select Timing'){this.style.border='none'}">
                                                        <option>Select Timing</option>
                                                        <option>07:00 - 08:00</option>
                                                        <option>08:00 - 09:00</option>
                                                        <option>09:00 - 10:00</option>
                                                        <option>10:00 - 11:00</option>
                                                        <option>11:00 - 12:00</option>
                                                        <option>15:00 - 16:00</option>
                                                        <option>16:00 - 17:00</option>
                                                        <option>17:00 - 18:00</option>
                                                        <option>18:00 - 19:00</option>
                                                        <option>19:00 - 20:00</option>
                                                        <option>20:00 - 21:00</option>
                                                        <option>21:00 - 22:00</option>
                                                        <option>22:00 - 23:00</option>
                                                    </select>
                                                    <i class="fa-solid fa-trash CourseTrash" onclick="this.parentElement.remove();"></i>
                                                </div>`)
                                                
    // AllCagegory();
}

UploadStatus = true;
SubmitBtn.onclick = () => {
    let SelectCourse = document.querySelectorAll('#Form #AllCourse .Course .SelectCourse');
    let Ddate = document.querySelectorAll('#Form #AllCourse .Course .Ddate');
    let Timing = document.querySelectorAll('#Form #AllCourse .Course .Timing');
    SelectCourse.forEach( e => {
        ValidateSelect(e, 'Select Course');
    })
    Timing.forEach( e => {
        ValidateSelect(e, 'Select Timing');
    })

    Ddate.forEach( e => {
        if (e.value == '') {
            UploadStatus = false;
            e.style.border = '1px solid #ff0000';
        }else{
            e.style.border = 'none';
        }
    })

    if (UploadStatus == true) {
        // console.log('This rady to upload');
        // Write Ajx Hiar for uploading the Course on server
        let Courses = document.querySelectorAll('.Course');
        if (Courses.length > 0) {
            Courses.forEach(e => {
                if (!e.classList.contains('OldCourse')) {
                    e.querySelector('.RollNo').value = RollNumbers();
                    e.querySelector('.CertificateNo').value = CertificateIDs();
                }
            });

            let CourseName = [];
            let RollNos = [];
            let CertifiNo = [];
            let CourseDates = [];
            let Batchs = [];
            for (let i = 0; i < Courses.length; i++) {
                CourseName[i] = Courses[i].querySelector('.SelectCourse').value;
                RollNos[i] = Courses[i].querySelector('.RollNo').value;
                CertifiNo[i] = Courses[i].querySelector('.CertificateNo').value;
                CourseDates[i] = Courses[i].querySelector('.Ddate').value;
                Batchs[i] = Courses[i].querySelector('.Timing').value;
            }
            let StudentID = $("#StudentID2").val();
            console.log(StudentID);
            console.log(CourseName, CourseDates, Batchs, RollNos, CertifiNo);
            let Obj = {
                'CourseName' : CourseName,
                'CourseDates' : CourseDates,
                'Batchs' : Batchs,
                'RollNos' : RollNos,
                'CertifiNo' : CertifiNo,
                'StudentID' : StudentID,
            }
            let JsonData = JSON.stringify(Obj);
            fetch('PHP/Students/InserCourse.php',{
                method: "PUT",
                body: JsonData,
                headers: {
                    'Content-type' : 'application/json',
                }
            })
            .then((Response) => Response.json())
            .then((Data) => {
                console.log(Data);
                if (Data.Status == 'Success') {
                    FormCont.classList.remove('Active');
                    ShowMessage(Success, 'Course Updated');
                }else if(Data.Status == 'Error'){
                    ShowMessage(Error, 'Have Some Error');
                }
            })

        }




    }else{
        UploadStatus = true;
        console.log('Not Rady');
    }
}


function ValidateSelect(ID, Text){
    if (ID.value == Text) {
        UploadStatus = false;
        ID.style.border = '1px solid #ff0000';
    }else{
        ID.style.border = 'none';
    }

}

// Start Fetch API
let LastIndex = 20;
let Count = 1;
function LoadData(Page){
    fetch(`PHP/Students/Show.php?Page=${Page}`)
    .then((Response) => Response.json())
    .then((Data) => {
        let StudentsHTML = '';
        for (let i = 0; i < Data.length; i++) {
            StudentsHTML += `<tr>
                                <td>${Count++}</td>
                                <td>${Data[i].Student_Name}</td>
                                <td><span>+91</span>&nbsp;<span>${Data[i].Phone}</span></td>
                                <td>${Data[i].Student_ID}</td>
                                <td><a href="StudentProfile.php?StudentID=${Data[i].SN}"><i class="fa-solid fa-user Profile"></i></a></td>
                                <td><i StudentID="${Data[i].SN}" class="fa-solid fa-book CourseIcon"></i></td>
                                <td><a href="UpdateAdmission.php?StudentID=${Data[i].SN}"><i class="fa-solid fa-pen-to-square Edit"></i></a></td>
                                <td><i data-DeleteID="${Data[i].SN}" class="fa-solid fa-trash Trash"></i></td>
                            </tr>`
            
        }
        Tbody.insertAdjacentHTML("beforeend",StudentsHTML);
        LoadMoreBox.innerHTML = `<button data-indexID="${LastIndex}" id="LoadMoreBtn">Laod More</button>`;
        LastIndex = LastIndex + 10;

        if (Data.Status == 'Empty') {
            $('#LoadMoreBtn').prop('disabled', true);
            $('#LoadMoreBtn').text('Finished');
            $('#LoadMoreBtn').css('background', '#73777B');
        }
    })
}


LoadData(0);
$(document).on('click', '#LoadMoreBtn',function(){
    let LI = $(this).data('indexid');
    LoadData(LI);
});

// This is For Delete
$(document).on('click', '.Trash',function(){
    let DeleteID = $(this).data('deleteid');
    fetch(`PHP/Students/Delete.php?DeleteID=${DeleteID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.Status == 'Success') {
            NewIndex = $('#LoadMoreBtn').data('indexid') - 1;
            $('#LoadMoreBtn').data('indexid', NewIndex);
            LastIndex = LastIndex - 1;
            $(this).closest('tr').fadeOut();
            location.reload();
            ShowMessage(Success, 'This Admission Deleted');
        }else{
            ShowMessage(Error, 'Some Error');
        }
    })
});

// Get Total Course Form DataBase For LaodMore Button
function TestButton(){
    fetch('PHP/Students/LoadMore.php')
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.TotalData > 20) {
            $('#LoadMore').css('display', 'block');
        }else{
            $('#LoadMore').css('display', 'none');
        }
    })
}
TestButton();

// Make Search Feature
SearchInput.onkeyup = () => {
    if (SearchInput.value == '') {
        LoadData(0);
        Tbody.innerHTML = '';
        LastIndex = LastIndex - 10;
        Count = 1;
    }else{
        SearchData();
    }
}

SelectFields.onchange = () => {
    if (SearchInput.value != '') {
        SearchData();
    }
}

function SearchData(){
    let Data = {
        'Search' : SearchInput.value,
        'SearchField' : SelectFields.value,
    }
    let JsonData = JSON.stringify(Data);
    fetch('PHP/Students/Search.php',{
        method: "POST",
        headers: {
            'Content-type' : 'application/json',
        },
        body: JsonData
    })
    .then((Response) => Response.json())
    .then((Result) => {
        let SearchCount = 1;
        Tbody.innerHTML = '';
        console.log(Result);
        let StudentsHTML = '';
        for (let i = 0; i < Result.length; i++) {
            StudentsHTML += `<tr>
                                <td>${SearchCount++}</td>
                                <td>${Result[i].Student_Name}</td>
                                <td><span>+91</span>&nbsp;<span>${Result[i].Phone}</span></td>
                                <td>${Result[i].Student_ID}</td>
                                <td><a href="StudentProfile.php?StudentID=${Result[i].SN}"><i class="fa-solid fa-user Profile"></i></a></td>
                                <td><i StudentID="${Result[i].SN}" class="fa-solid fa-book CourseIcon"></i></td>
                                <td><a href="UpdateAdmission.php?StudentID=${Result[i].SN}"><i class="fa-solid fa-pen-to-square Edit"></i></a></td>
                                <td><i data-DeleteID="${Result[i].SN}" class="fa-solid fa-trash Trash"></i></td>
                            </tr>`
            
        }
        if (Result.Empty == 'Empty') {
            StudentsHTML += '<tr><td colspan="8">No Data Found</td></tr>';
        }
        Tbody.insertAdjacentHTML("beforeend",StudentsHTML);

        LoadMoreBox.innerHTML = '';

    })

}


// this is for Get Certificate ID
function CertificateIDs() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).toUpperCase().slice(-3);
    secondPart = ("000" + secondPart.toString(36)).toUpperCase().slice(-3);
    const d = new Date();
    let Hours = d.getHours();
    let Minutes = d.getMinutes();
    let Seconds = d.getSeconds();
    let Year = d.getFullYear();
    let Month = d.getMonth(); 
    let Day = d.getDate();

    return firstPart + secondPart + Hours + Minutes + Seconds + Day + Month + Year;
}

function RollNumbers(){
    let CurentID = $("#StudentID2").val();
    return Math.floor(Math.random()*898)+101 + CurentID; 
}

// Select All Cetegorys Form DataBase
function AllCagegory(){
    fetch("PHP/Students/Category.php")
    .then((Response) => Response.json())
    .then((Data) => {
        let SelectCourseHTML = '<option>Select Course</option>';
        for (let i = 0; i < Data.length; i++) {
            SelectCourseHTML += `<option>${Data[i].Category_Name}</option>`;
        }
        $('.SelectCourse').html(SelectCourseHTML);
    })
}

function CategoryList(){
    var CategoryArray = [];
    fetch("PHP/Students/Category.php")
    .then((Response) => Response.json())
    .then((Category) => {
        for (let x = 0; x < Category.length; x++) {
            CategoryArray[x] =  Category[x].Category_Name;
        }
        let CategoryList = document.getElementById('CategoryList');
        CategoryList.value = CategoryArray.toString();
    })
}

CategoryList();