// this is for Show active Page
let CourseTab = document.querySelectorAll('#ManuBar li');
CourseTab[0].classList.remove('ActivePage');

let CertificateID = document.getElementById('CertificateID');
let SubmitBtn = document.getElementById('SubmitBtn');
let VerifiedCertificate = document.getElementById('Certificate_Result');
let NotVerified = document.getElementById('Unverified');

let ValidCertificateID = 23102003;
SubmitBtn.onclick = () => {
    // If Search Student

    if (CertificateID.value != '') {
        let SearchTerm = CertificateID.value;
        fetch(`PHP/CheckCertificate/CheckCertificate.php?SearchTerm=${SearchTerm}`)
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == 'Empty') {
                VerifiedCertificate.style.display = 'none';
                NotVerified.style.display = 'block';
            }else{
                let CertificateArray = Data[0].Certificate_ID.split(', ');            
                let UserCertificateID = Data[0].UserCertificateID;
                if (CertificateArray.includes(UserCertificateID)) {
                    NotVerified.style.display = 'none';
                    VerifiedCertificate.style.display = 'block';

                    // Get Certificate Course
                    let Result = CertificateArray.findIndex(function(ID){
                        return ID == UserCertificateID;
                    });
                    let ALLCourses = Data[0].Course_Name.split(', ');
                    //

                    $('#Image').attr('src', 'Admin/Img/Students/' + Data[0].Student_Img);
                    $('#Name').text(Data[0].Student_Name);
                    $('#Address').text(ALLCourses[Result]);
                    $('#Phone').text(Data[0].Phone);
                    $('#Email').text(Data[0].Email);      
                    
                }else{
                    VerifiedCertificate.style.display = 'none';
                    NotVerified.style.display = 'block';
                }
            }

        })


    }else{
        CertificateID.style.borderColor = "#ff0000";
    }











    // if (CertificateID.value == '') {
    //     CertificateID.style.borderColor = "#ff0000";

    // }else{
    //     CertificateID.style.borderColor = "#8348ff66";
    //     if (CertificateID.value == ValidCertificateID) {
    //         NotVerified.style.display = 'none';
    //         VerifiedCertificate.style.display = 'block';
    //     }else{
    //         VerifiedCertificate.style.display = 'none';
    //         NotVerified.style.display = 'block';

    //     }
    // }
}

CertificateID.onkeyup = () => {
    if (CertificateID.value != ''){
        CertificateID.style.borderColor = "#8348ff66";

    }
    
    VerifiedCertificate.style.display = 'none';
    NotVerified.style.display = 'none';
}