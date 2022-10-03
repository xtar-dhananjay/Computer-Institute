const CurentPage = document.querySelectorAll('#SideBar ul li a');
if ($('#HeaderRolle').text() == 'Normal User') {
    CurentPage[4].classList.add('Active');
    
}else{
    CurentPage[7].classList.add('Active');
    
}

let AllMsg_Btn = document.querySelectorAll('#Table_Box table td button');
let MsgBox = document.getElementById('InquiryMessage_Box');
let MsgBox_Close = document.getElementById('MsgBox_Close');
let Tbody = document.querySelector('#Table_Box table tbody');
let MessageText = document.querySelector('#InquiryMessage p');
let LoadMoreCont = document.getElementById('MoreInquiry');

$(document).on('click', 'table td button', function(){
    let Message = $(this).attr('data');
    console.log(Message);
    MsgBox.classList.add('Active');
    MessageText.textContent = Message;
})

MsgBox_Close.onclick = () => {
    MsgBox.classList.remove('Active');
    
}

let LastIndex = 15;
let ContactHTML = '';
let Count = 1;
// Get Data
function GetData(Page){
    fetch(`PHP/Contact/GetData.php?Page=${Page}`)
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.Status == 'Empty') {
            if (Data.Status == 'Empty') {
                $('#LoadBtn').prop('disabled', true);
                $('#LoadBtn').text('Finished');
                $('#LoadBtn').css('background', '#73777B');
                console.log(Data);``
            }
        }else{
            for (let i = 0; i < Data.length; i++) {
                ContactHTML += `<tr>
                                    <td>${Count++}</td>
                                    <td>${Data[i].Contact_Name}</td>
                                    <td><span>+91 &nbsp;</span>${Data[i].Contact_Phone}</td>
                                    <td>${Data[i].Contact_Time}</td>
                                    <td><button data="${Data[i].Contact_Message}" >Message</button></td>
                                </tr>`
            }
            Tbody.innerHTML = ContactHTML;
            LoadMoreCont.innerHTML = `<button style="margin: auto;" id="LoadBtn" data-indexID="${LastIndex}">Load More</button>`;
            if (LastIndex == 15) {
                TestButton();
            }
            LastIndex = LastIndex + 10;
        }
    })
}

GetData(0);
console.log('Sandeep');

$(document).on('click', '#LoadBtn', function(){
    let LI = $(this).data('indexid');
    GetData(LI);
})


// Get Total Contact Form DataBase For LaodMore Button
function TestButton(){
    fetch('PHP/Contact/LoadMore.php')
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.TotalData > 15) {
            $('#LoadBtn').css('display', 'block');
        }else{
            $('#LoadBtn').css('display', 'none');
        }
    })
}
