let BestStudentsCont = document.getElementById('All_Students');
let LoadMoreCont = document.getElementById('LoadMore');

let LastIndex = 6;
function BestStudents(Page){
    fetch(`PHP/BestStudents/BestStudents.php?Page=${Page}`)
    .then((Response) => Response.json())
    .then((Data) => {
        let BestStudentHTML = '';
        if (Data.Status == 'Empty'){
            $('#LoadMoreBtn').prop('disabled', true);
            $('#LoadMoreBtn').text('Finished');
            $('#LoadMoreBtn').css('background', '#73777B');
            console.log(Data);
        }else{
            for (let i = 0; i < Data.length; i++) {
                BestStudentHTML += `<div class="Student">
                                        <img src="Admin/Img/TopStudents/${Data[i].TopStudent_Img}" alt="Student_Photo">
                                        <div>
                                            <p>${Data[i].TopStudent_Name}</p>
                                            <p>${Data[i].TopStudent_Course}</p>
                                        </div>
                                    </div>`;
                
            }
            BestStudentsCont.insertAdjacentHTML("beforeend",BestStudentHTML);
            // BestStudentsCont.innerHTML = BestStudentHTML;
            LoadMoreCont.innerHTML = `<button style="margin: auto; margin: 50px auto;" id="LoadMoreBtn" data-indexID="${LastIndex}">Load More</button>`;
            // if (LastIndex == 15) {   
                TestButton();
            // }
            LastIndex = LastIndex + 6;
        }
        console.log(Data);
    })
}
BestStudents(0);

$(document).on('click', '#LoadMoreBtn', function(){
    let LI = $(this).data('indexid');
    BestStudents(LI);
})

// Get Total Best Students Form DataBase For LaodMore Button
function TestButton(){
    fetch('PHP/BestStudents/LaodMore.php')
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.TotalData > 6) {
            $('#LoadMoreBtn').css('display', 'block');
        }else{
            $('#LoadMoreBtn').css('display', 'none');
        }
    })
}