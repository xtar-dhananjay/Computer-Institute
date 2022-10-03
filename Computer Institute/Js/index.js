$(document).on('click', '.QA .Quation .material-icons', function(){
    let MainCont = $(this).closest('.QA');
    let MainP = MainCont.children('p');
    MainP.toggleClass('Active');
    if ($(this).text() == 'add') {
        $(this).text('remove');
    }else{
        $(this).text('add');

    }
})

let CoursesBox = document.getElementById('All_Courses');
let BestStudentsCont = document.getElementById('All_Students');
let BestTeacherCont = document.getElementById('All_Students1');
let QACont = document.getElementById('All_QA');

function MainDescription(){
    fetch('PHP/Home/WebSiteDesc.php')
    .then((Response) => Response.json())
    .then((Data) => {
        $('#MainDescription').text(Data[0].HomeAbout);
    })
}
MainDescription();


function Edvantage(){
    fetch('PHP/Home/Edvantage.php')
    .then((Response) => Response.json())
    .then((Data) => {
        $('#Edvantage1').text(Data[0].Feature);
        $('#Edvantage2').text(Data[1].Feature);
        $('#Edvantage3').text(Data[2].Feature);
    })
}
Edvantage();

function BestCourses(){
    fetch('PHP/Home/BestCourses.php')
    .then((Response) => Response.json())
    .then((Data) => {
        let GetCourse = '';
        let Ratings = '';
        for (let i = 0; i < Data.length; i++) {
            if (Data[i].Rating == 0) {
                Ratings = `<span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>`;
            } else if(Data[i].Rating == 1){
                Ratings = `<span class="material-icons">star</span>
                            <span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>`;
            } else if(Data[i].Rating == 2){
                Ratings = `<span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>`;

            } else if(Data[i].Rating == 3){
                Ratings = `<span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons Dactive">star</span>
                            <span class="material-icons Dactive">star</span>`;
            } else if(Data[i].Rating == 4){
                Ratings = `<span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons Dactive">star</span>`;
            }else{
                Ratings = `<span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>`;
            }
            GetCourse += `<div class="Course">
                                <img src="Admin/Img/Course/${Data[i].Img}" alt="Excel Photo">
                                <h2>${Data[i].CourseTitle.length > 20 ? Data[i].CourseTitle.substring(0, 25)+"..." : Data[i].CourseTitle}</h2>
                                <div class="Course-Detials">
                                    <div class="Ratings">
                                        ${Ratings}
                                    </div>
                                    <div class="Price-Per">
                                        <span>
                                            <span class="material-icons">group</span>
                                            <span>${Data[i].NFA}</span>
                                        </span>
                                        <span class="HPrice">
                                            <span class="HRupee">₹</span>
                                            <span>${Data[i].Price}</span>
                                        </span>
                                    </div>
                                </div>
                                <a href="CourseDetails.php?CourseID=${Data[i].Course_ID}"><button>Enrol Now</button></a>
                            </div>`;
            
        }
        CoursesBox.innerHTML = GetCourse;
    })
}
BestCourses();


function BestStudents(){
    fetch('PHP/Home/BestStudents.php')
    .then((Response) => Response.json())
    .then((Data) => {
        let BestStudentHTML = '';
        for (let i = 0; i < Data.length; i++) {
            BestStudentHTML += `<div class="Student">
                                    <img src="Admin/Img/TopStudents/${Data[i].TopStudent_Img}" alt="Student_Photo">
                                    <div>
                                        <p>${Data[i].TopStudent_Name}</p>
                                        <p>${Data[i].TopStudent_Course}</p>
                                    </div>
                                </div>`;
            
        }
        BestStudentsCont.innerHTML = BestStudentHTML;
    })
}
BestStudents();


function BestTeachers(){
    fetch('PHP/Home/BestTeacher.php')
    .then((Response) => Response.json())
    .then((Data) => {
        let BestTeacherHTML = '';
        for (let i = 0; i < Data.length; i++) {
            BestTeacherHTML += `<div class="Student">
                                    <img src="Admin/Img/Team/${Data[i].Team_Img}" alt="">
                                    <div>
                                        <p>${Data[i].Team_Name}</p>
                                    </div>
                                </div>`;
            
        }
        BestTeacherCont.innerHTML = BestTeacherHTML;
    })
}
BestTeachers();


function QA(){
    fetch('PHP/Home/QA.php')
    .then((Response) => Response.json())
    .then((Data) => {
        let QAHTML = '';
        for (let i = 0; i < Data.length; i++) {
            QAHTML += `<div class="QA">
                            <div class="Quation">
                                <h3>${Data[i].Question}</h3>
                                <span class="material-icons">add</span>
                            </div>
                            <p>${Data[i].Answer}</p>
                        </div>`;
            
        }
        QACont.innerHTML = QAHTML;
    })
}
QA();