const SideBar = document.getElementById('SideBar');
const DashBoard = document.getElementById('DashBoard');
const ManuBtn = document.getElementById('ManuBtn');

ManuBtn.onclick = () => {
    SideBar.classList.toggle('Active');
    DashBoard.classList.toggle('Active');
    ManuBtn.classList.toggle('Active');
}




const Error = document.getElementById('Error-Message');
const Success = document.getElementById('Success-Message');

// Message
function ShowMessage(Message, Text){
    Message.classList.add('Active');
    TextValue = Message.querySelector('p').innerText = Text;
    setTimeout(() => {
        Message.classList.remove('Active');
    }, 3000);
}