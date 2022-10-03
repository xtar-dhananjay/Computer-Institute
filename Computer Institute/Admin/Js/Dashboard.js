const CurentPage = document.querySelectorAll('#SideBar ul li a');
CurentPage[1].classList.add('Active');

let AllMsg_Btn = document.querySelectorAll('#Table_Box table td button');
let MsgBox = document.getElementById('InquiryMessage_Box');
let MsgBox_Close = document.getElementById('MsgBox_Close');
let MoreInquiry = document.getElementById('MoreInquiry');
let MessageText = document.querySelector('#InquiryMessage p');
let Tbody = document.getElementById('Tbody');

$(document).on('click', 'table td button', function(){
    let Message = $(this).attr('data');
    MsgBox.classList.add('Active');
    MessageText.textContent = Message;
})

MsgBox_Close.onclick = () => {
    MsgBox.classList.remove('Active');
    
}

// Get Data
function GetData(){
    fetch(`PHP/DashBoard/LoadData.php`)
    .then((Response) => Response.json())
    .then((Data) => {
        let InquiryHTML = '';
        let Count = 10;
        if (Data.Status == 'Empty') {
            Tbody.innerHTML = '<tr><td colspan="7">Not Found</td></tr>'
        }else{
            for (let i = 0; i < Count; i++) {
                InquiryHTML += `<tr>
                                    <td>${i+1}</td>
                                    <td>${Data[i].Name}</td>
                                    <td>${Data[i].Age}</td>
                                    <td><span>+91 &nbsp;</span>${Data[i].Phone}</td>
                                    <td>${Data[i].Course}</td>
                                    <td>${Data[i].DateTime}</td>
                                    <td><button data="${Data[i].Message}" >Message</button></td>
                                </tr>`
            }
            Tbody.innerHTML = InquiryHTML;
            if (Data.length > 10) {
                MoreInquiry.innerHTML = `<a href="Inquiry.php"><button>All Inquiry</button></a>`;
            }

        }
    })
}
GetData();

function TotalStudents(){
    fetch('PHP/DashBoard/TotalStudents.php')
    .then((Response) => Response.json())
    .then((Data) => {
        $('#TotalStudents').text(Data.TotalData);
    })
}

TotalStudents();


function TotalCourse(){
    fetch('PHP/DashBoard/TotalCourse.php')
    .then((Response) => Response.json())
    .then((Data) => {
        $('#TotalCourses').text(Data.TotalData);
    })
}
TotalCourse();

function TotalInquiry(){
    fetch('PHP/DashBoard/TotalInquiry.php')
    .then((Response) => Response.json())
    .then((Data) => {
        $('#TotalInquiry').text(Data.TotalData);
    })
}
TotalInquiry();


function TotalViews(){
    fetch('PHP/DashBoard/TotalViews.php')
    .then((Response) => Response.json())
    .then((Data) => {
        $('#TotalViews').text(Data.TotalData);
    })
}
TotalViews();