// this is for Show active Page
let CourseTab = document.querySelectorAll('#ManuBar li');
CourseTab[0].classList.remove('ActivePage');
CourseTab[2].classList.add('ActivePage');

let AllTeam = document.getElementById('AllTeam');

// Get Data Form the DataBase
function GetData(){
    fetch('PHP/About/GetData.php')
    .then((Response) => Response.json())
    .then((Data) => {
        $('#Title1').text(Data[0].AboutTitle1);
        $('#Desc1').text(Data[0].AboutDesc1);      
        $('#Title2').text(Data[0].AboutTitle2);
        $('#Desc2').text(Data[0].AboutDesc2);
    })
}
GetData();

function Team(){
    fetch('PHP/About/Team.php')
    .then((Response) => Response.json())
    .then((Data) => {
        let TeamHTML = '';
        console.log(Data);
        for (let i = 0; i < Data.length; i++) {
            TeamHTML += `<div class="Member">
                            <img src="Admin/Img/Team/${Data[i].Team_Img}" alt="Team_member">
                            <p class="Member_Name">${Data[i].Team_Name}</p>
                            <p class="Member_Position">${Data[i].Team_Position}</p>
                        </div>`
        }
        AllTeam.innerHTML = TeamHTML;
    })
}
Team();