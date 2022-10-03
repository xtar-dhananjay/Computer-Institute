// this is for Show active Page
let CourseTab = document.querySelectorAll('#ManuBar li');
CourseTab[0].classList.remove('ActivePage');
CourseTab[1].classList.add('ActivePage');

let LoadMoreBox = document.getElementById('LoadMore');
let CoursesBox = document.getElementById('AllCourse');
let SearchInput = document.getElementById('SearchInput');


let LastIndex = 9;
function GetCourses(Page){
    fetch(`PHP/Course/GetCourses.php?Page=${Page}`)
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
                                        <span class="RPer">
                                            <span class="material-icons">group</span>
                                            <span>${Data[i].NFA}</span>
                                        </span>
                                        <span>
                                            <span>₹</span>
                                            <span>${Data[i].Price}</span>
                                        </span>
                                    </div>
                                </div>                                
                                <a href="CourseDetails.php?CourseID=${Data[i].Course_ID}"><button>Enrol Now</button></a>
                            </div>`;
            
        }
        // console.log(GetCourse);
        CoursesBox.insertAdjacentHTML("beforeend",GetCourse);
        LoadMoreBox.innerHTML = `<button id="LoadBtn" style="margin: auto;" data-indexID="${LastIndex}">LoadMore</button>`;
        LastIndex = LastIndex + 6;

        if (Data.Status == 'Empty') {
            $('#LoadBtn').prop('disabled', true);
            $('#LoadBtn').text('Finished');
            $('#LoadBtn').css('background', '#73777B');
            console.log(Data);``
        }
    })
}

GetCourses(0);

$(document).on('click', '#LoadBtn',function(){
    let LI = $(this).data('indexid');
    GetCourses(LI);
});


function Search(SearchTerm){
    fetch(`PHP/Course/Search.php?SearchTerm=${SearchTerm}`)
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.Status == 'Empty') {
            CoursesBox.innerHTML = `<h2 style="text-align: center;">Course's Not Found</h2>`;
        }else{
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
                                            <span class="RPer">
                                                <span class="material-icons">group</span>
                                                <span>${Data[i].NFA}</span>
                                            </span>
                                            <span>
                                                <span>₹</span>
                                                <span>${Data[i].Price}</span>
                                            </span>
                                        </div>
                                    </div>                                
                                    <a href="CourseDetails.php?CourseID=${Data[i].Course_ID}"><button>Enrol Now</button></a>
                                </div>`;
                
            }
            CoursesBox.innerHTML = GetCourse;
            
        }
        
    })
}

SearchInput.onkeyup = () => {
    let SearchTerm = SearchInput.value;
    if (SearchTerm == '') {
        LastIndex = 9;
        CoursesBox.innerHTML = '';
        GetCourses(0);
        TestButton();
        console.log('Blank');
    }else{
        $('#LoadBtn').css('display', 'none');
        Search(SearchTerm);
    }
}


// Get Total Course Form DataBase For LaodMore Button
function TestButton(){
    fetch('PHP/Course/LoadMore.php')
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.TotalData > 9) {
            $('#LoadBtn').css('display', 'block');
        }else{
            $('#LoadBtn').css('display', 'none');
        }
    })
}
TestButton();