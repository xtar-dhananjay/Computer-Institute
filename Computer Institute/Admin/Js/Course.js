const CurentPage = document.querySelectorAll('#SideBar ul li a');
if ($('#HeaderRolle').text() == 'Normal User') {
    CurentPage[1].classList.add('Active');
    
}else{
    CurentPage[2].classList.add('Active');
}

let CoursesBox = document.getElementById('AllCourse');
let LoadMoreBox = document.getElementById('LoadMore');
let LastIndex = 15;
// Show Course
function LoadData(Page){
    fetch(`PHP/Courses/Show.php?Page=${Page}`)
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
                                <a href="../CourseDetails.php?CourseID=${Data[i].Course_ID}" target="_Blank"><img src="Img/Course/${Data[i].Img}" alt="Excel Photo"></a>
                                <a href="../CourseDetails.php?CourseID=${Data[i].Course_ID}" target="_Blank"><h2>${Data[i].CourseTitle.length > 20 ? Data[i].CourseTitle.substring(0, 25)+"..." : Data[i].CourseTitle}</h2></a>
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
                                <div id="CourseBtns">
                                    <button class="DeleteBtn" data-DeleteID="${Data[i].Course_ID}">Delete</button>
                                    <a href="UpdateCourse.php?UpdateID=${Data[i].Course_ID}"><button>Update</button></a>
                                </div>
                            </div>`;
            
        }
        // console.log(GetCourse);
        CoursesBox.insertAdjacentHTML("beforeend",GetCourse);
        LoadMoreBox.innerHTML = `<button id="LoadBtn" data-indexID="${LastIndex}">LoadMore</button>`;
        LastIndex = LastIndex + 5;

        if (Data.Status == 'Empty') {
            $('#LoadBtn').prop('disabled', true);
            $('#LoadBtn').text('Finished');
            $('#LoadBtn').css('background', '#73777B');
            console.log(Data);``
        }
    });
}

LoadData(0);
$(document).on('click', '#LoadBtn',function(){
    let LI = $(this).data('indexid');
    LoadData(LI);
});



// This is for Delete
$(document).on('click', '.DeleteBtn',function(){
    let DeleteID = $(this).data('deleteid');
    fetch(`PHP/Courses/Delete.php?DeleteID=${DeleteID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        console.log(Data);
        if (Data.Status == 'Success') {
            NewIndex = $('#LoadBtn').data('indexid') - 1;
            $('#LoadBtn').data('indexid', NewIndex);
            LastIndex = LastIndex - 1;
            $(this).closest('.Course').fadeOut();
            location.reload();
            ShowMessage(Success, 'Course Deleted');
        }else if(Data.Status == 'BestCourse'){
            ShowMessage(Error, `Best Course, I can't delete this`);
        }else{
            ShowMessage(Error, 'Some Error');
        }
    })
    console.log(DeleteID);

    
});


// Get Total Course Form DataBase For LaodMore Button
function TestButton(){
    fetch('PHP/Courses/LoadMore.php')
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.TotalData > 15) {
            $('#LoadMore').css('display', 'block');
        }else{
            $('#LoadMore').css('display', 'none');
        }
    })
}
TestButton();
