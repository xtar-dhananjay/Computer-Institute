// this is for Show active Page
let CourseTab = document.querySelectorAll('#ManuBar li');
CourseTab[0].classList.remove('ActivePage');

let FullName = document.getElementById('FullName');
let PhoneNumber = document.getElementById('PhoneNumber');
let Age = document.getElementById('Age');
let SelectCourse = document.getElementById('SelectCourse');
let SubmitBtn = document.getElementById('SubmitBtn');

SubmitBtn.onclick = (e) => {

    // Full Name
    let TextName = /^[a-zA-Z-' ]+$/;
    if (FullName.value.length >= 3) {
        if (TextName.test(FullName.value)) {
            FullName.style.borderColor = '#ffffffb3';
        }else{
            FullName.style.borderColor = 'red';
            e.preventDefault();
        }
    }else{
        FullName.style.borderColor = 'red';
        e.preventDefault();
    }
    
    // Age
    let TestAge = /^[0-9]+$/;
    if (Age.value == '') {
        Age.style.borderColor = 'red';
        e.preventDefault();
    }else{
        if (Age.value.length >= 3) {
            Age.style.borderColor = 'red';
            e.preventDefault();
        }else{
            Age.style.borderColor = '#ffffffb3';
            if (TestAge.test(Age.value)) {
                Age.style.borderColor = '#ffffffb3';
            }else{
                Age.style.borderColor = 'red';
                e.preventDefault();

            }
        }
    }

    // Phone Number
    let Phoneno = /^\d{10}$/;
    if (PhoneNumber.value.match(Phoneno)) {
        PhoneNumber.style.borderColor = "#ffffffb3";
    }else{
        PhoneNumber.style.borderColor = "red";
        e.preventDefault();
        
    }

    // Select Course
    if (SelectCourse.value == 'Select Course') {
        SelectCourse.style.borderColor = 'red';
        e.preventDefault();
    }else{
        SelectCourse.style.borderColor = '#ffffffb3';
    }

}

// Full Name
FullName.onkeyup = () => {
    let TextName = /^[a-zA-Z]+$/;
    if (FullName.value.length >= 3) {
        if (TextName.test(FullName.value)) {
            FullName.style.borderColor = '#ffffffb3';
        }
    }
}

// Age
Age.onkeyup = () => {
    if (Age.value.length > 0 && Age.value.length < 3 ) {
        Age.style.borderColor = '#ffffffb3';
    }
}


// Phone Number
PhoneNumber.onkeyup = () => {
    let Phoneno = /^\d{10}$/;
    if (PhoneNumber.value.match(Phoneno)) {
        PhoneNumber.style.borderColor = "#ffffffb3";
    }
}

// Select Course
SelectCourse.onchange = () => {
    if (SelectCourse.value != "Select Course") {
        SelectCourse.style.borderColor = '#ffffffb3';
    }
}

// Get All Course Form the DataBase
function GetCourse(){
    fetch('PHP/GetCourse.php')
    .then((Response) => Response.json())
    .then((Data) => {
        let CourseHTML = `<option>Select Course</option>`;
        for (let i = 0; i < Data.length; i++) {
            CourseHTML += `<option>${Data[i].Category_Name}</option>`
        }
        SelectCourse.innerHTML = CourseHTML;
    })
}

GetCourse();