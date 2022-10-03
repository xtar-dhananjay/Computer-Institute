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
let Uplaod_Title = document.getElementById('UplaodImg');
let CourseImg = document.querySelector('#CourseImg Img');
let CourseImg_Cont = document.querySelector('#CourseImg');
let CourseTitle = document.getElementById('CourseTitle');
let CoursePrice = document.getElementById('CoursePrice');
let CourseDescription = document.getElementById('CourseDescription');
let CourseAdmitions = document.getElementById('CourseAdmitions');
let CourseRatings = document.getElementById('CourseRatings');

CourseImg_File.onchange = () => {
    Uplaod_Title.style.display = 'none';
    CourseImg.style.display = 'block';
    CourseImg.src = URL.createObjectURL(CourseImg_File.files[0]);
    
    // this is check Img Upload Status
    if (CourseImg_File.files[0] != undefined) {
        CourseImg_Cont.style.borderColor = 'var(--Main-Color)';
    }
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
    
    if (CourseImg_File.files[0] == undefined) {
        CourseImg_Cont.style.borderColor = 'red'
        FormValidation = false;
    }else{
        CourseImg_Cont.style.borderColor = '#d3d3d3';
    }

    if (FormValidation == true) {
        // console.log('This rady to upload');
        let Form = document.querySelector("#Form form");
        let ContentBox = document.querySelectorAll('#AllContent input');
        let Contents = [];
        let FData = new FormData(Form);
        for (let i = 0; i < ContentBox.length; i++) {
            Contents[i] = ContentBox[i].value;
        }
        FData.append('Contents', Contents);

        fetch("PHP/Courses/Insert.php",{
            method: "POST",
            body: FData
        })
        .then((Response) => Response.json())
        .then((Data) => {
            console.log(Data);
            if (Data.Status == 'Extanstion Problem') {
                ShowMessage(Error, 'Choose Only JPG, PNG, JPEG Images');
            }else if(Data.Status == 'Success'){
                ShowMessage(Success, 'Course Uploaded');
                window.location = "Course.php"
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
