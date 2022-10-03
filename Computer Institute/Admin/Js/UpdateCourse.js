const CurentPage = document.querySelectorAll('#SideBar ul li a');
if ($('#HeaderRolle').text() == 'Normal User') {
    CurentPage[1].classList.add('Active');
    
}else{
    CurentPage[2].classList.add('Active');
}

let Add_Content_Btn = document.getElementById('AddContent-Btn');
let Content_Cont = document.getElementById('AllContent')
let Course_Uplaod_Btn = document.getElementById('Course_Uplaod_Btn');
let CourseImg_File = document.getElementById('CourseFile');
let CourseImg = document.querySelector('#CourseImg Img');
let CourseImg_Cont = document.querySelector('#CourseImg');
let CourseTitle = document.getElementById('CourseTitle');
let CoursePrice = document.getElementById('CoursePrice');
let CourseDescription = document.getElementById('CourseDescription');
let CourseAdmitions = document.getElementById('CourseAdmitions');
let CourseRatings = document.getElementById('CourseRatings');
let ClassDuration = document.getElementById('ClassDuration');
let WeeklyHoiday = document.getElementById('WeeklyHoiday');
let CourseDuration = document.getElementById('CourseDuration');
let FeePay = document.getElementById('FeePay');
let OldImg = document.getElementById('OldImg');
let CourseID = document.getElementById('CourseID');


CourseImg_File.onchange = () => {
    CourseImg.src = URL.createObjectURL(CourseImg_File.files[0]);
    console.log('this is working');
    
}

Add_Content_Btn.onclick = (e) => {
    e.preventDefault();
    Content_Cont.insertAdjacentHTML('beforeend',    `<div class="SingleContent_Box">
                                                        <input type="text" placeholder="Write..." onkeyup="if(this.value != ''){this.style.borderColor='#d3d3d3'}">
                                                        <span class="material-icons" onclick="this.parentElement.remove();">remove</span>
                                                    </div>`
    );
    
}


let FormValidation = true;
Course_Uplaod_Btn.onclick = () => {

    // Validation Of Inputs
    CheckInputs(CourseTitle);
    CheckInputs(CoursePrice);
    CheckInputs(CourseDescription);
    CheckInputs(CourseAdmitions);

    // This for Select Ratings
    if (CourseRatings.value == 'Select Star') {
        CourseRatings.style.borderColor = 'red';
        FormValidation = false;
    }else{
        CourseRatings.style.borderColor = '#d3d3d3';
    }



    // Content Inputs
    let Remove_Content_Box = document.querySelectorAll('#AllContent .SingleContent_Box')
    Remove_Content_Box.forEach( e => {
        let ContentInput = e.querySelector('input');
        CheckInputs(ContentInput);
    })

    // This functino Validate all Inputs    
    function CheckInputs(ID){
        if (ID.value == '') {
            ID.style.borderColor = 'red';
            FormValidation = false;
        }else{
            ID.style.borderColor = '#d3d3d3';
        }
    }

    if (FormValidation == true) {
        // This rady to upload
        let Form = document.querySelector("#Form form");
        let ContentBox = document.querySelectorAll('#AllContent input');
        let Contents = [];
        let FData = new FormData(Form);
        for (let i = 0; i < ContentBox.length; i++) {
            Contents[i] = ContentBox[i].value;
        }
        FData.append('Contents', Contents);
        fetch("PHP/Courses/Update.php",{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == 'Success') {
                ShowMessage(Success, 'Course Updated');
                window.location = "Course.php";
            }else if (Data.Status == 'Extanstion Problem') {
                ShowMessage(Error, 'Choose Only JPG, PNG, JPEG Images');
            }else{
                ShowMessage(Error, 'Have Some Problem');
            }
        })

    }else{
        console.log('Not Rady');
        FormValidation = true;
    }

}

// This for Select Ratings

CourseRatings.onchange = () => {
    if (CourseRatings.value != 'Select Star') {
        CourseRatings.style.borderColor = '#d3d3d3';
    }
}


// Title
CourseTitle.onkeyup = () => {
    CheckInputs2(CourseTitle);
}

// Price
CoursePrice.onkeyup = () => {
    CheckInputs2(CoursePrice);
}

// Description
CourseDescription.onkeyup = () => {
    CheckInputs2(CourseDescription);
}

// Admitions
CourseAdmitions.onkeyup = () => {
    CheckInputs2(CourseAdmitions);
}

function CheckInputs2(ID){
    if (ID.value != '') {
        ID.style.borderColor = '#d3d3d3';
    }
}

// GetData Form API
function GetData(){
    let GetUpdateID = document.getElementById('GetUpdateID');
    let UpDateID = GetUpdateID.textContent;
    fetch('PHP/Courses/GetData.php?UpDateID='+UpDateID)
    .then((Response) => Response.json())
    .then((Data) => {
        CourseID.value = Data[0].Course_ID;
        OldImg.value = Data[0].Img;
        CourseImg.src = 'Img/Course/' + Data[0].Img;
        CourseTitle.value = Data[0].CourseTitle;
        CoursePrice.value = Data[0].Price;
        CourseAdmitions.value = Data[0].NFA;

        // Start Select Options
        // For Ratings
        let RatingHTML = '';
        CountRatings = Data[0].Rating;
        RatingHTML += `<option>Select Star</option>`;
        for (let i = 0; i <= 5; i++) {
            if (i == CountRatings) {
                RatingHTML += `<option selected>${i}</option>`;
            }else{
                RatingHTML += `<option>${i}</option>`;
            }
        }
        CourseRatings.innerHTML = RatingHTML;
        
        // Class Duration
        let ClassDurationHTML = '';
        let ApiCD = Data[0].ClassDuration;
        let ClassDA = ['1 Hour', '2 Hour', '3 Hour'];
        ClassDA.forEach(e => {
            if (e == ApiCD) {
                ClassDurationHTML += `<option selected>${e}</option>`;
            }else{
                ClassDurationHTML += `<option>${e}</option>`;
            }
        });
        ClassDuration.innerHTML = ClassDurationHTML;
        
        // Class Duration
        let WeeklyHolidayHTML = '';
        let ApiWH = Data[0].WeeklyHoliday;
        let WeeklyHA = ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday'];
        WeeklyHA.forEach(e => {
            if (e == ApiWH) {
                WeeklyHolidayHTML += `<option selected>${e}</option>`;
            }else{
                WeeklyHolidayHTML += `<option>${e}</option>`;
            }
        });
        WeeklyHoiday.innerHTML = WeeklyHolidayHTML;
        
        // Course Duration
        let CourseDurationHTML = '';
        let ApiCDu = Data[0].CourseDuration;
        let CourseHA = ['2 Month', '4 Month', '6 Month', '1 Year', '18 Month', '2 Year'];
        CourseHA.forEach(e => {
            if (e == ApiCDu) {
                CourseDurationHTML += `<option selected>${e}</option>`;
            }else{
                CourseDurationHTML += `<option>${e}</option>`;
            }
        });
        CourseDuration.innerHTML = CourseDurationHTML;
        
        // Fee Pay
        let FeePayHTML = '';
        let ApiFP = Data[0].FeePay;
        let FeePA = ['Monthly', 'Quaterly', 'Yearly'];
        FeePA.forEach(e => {
            if (e == ApiFP) {
                FeePayHTML += `<option selected>${e}</option>`;
            }else{
                FeePayHTML += `<option>${e}</option>`;
            }
        });
        FeePay.innerHTML = FeePayHTML;
        //

        console.log(Data);
        CourseDescription.value = Data[0].Description;

        let ApiContent = Data[0].Content; 
        if (ApiContent != '') {
            let ApiCA = ApiContent.split(',')
            let ContentHTML = '';
            console.log(Data[0].Content);
            ApiCA.forEach(e => {
                ContentHTML += `<div class="SingleContent_Box">
                                    <input value='${e}' type="text" placeholder="Write..." onkeyup="if(this.value != ''){this.style.borderColor='#d3d3d3'}">
                                    <span class="material-icons" onclick="this.parentElement.remove();">remove</span>
                                </div>`
            });
            Content_Cont.innerHTML = ContentHTML;
        }
        
    })
}

GetData();