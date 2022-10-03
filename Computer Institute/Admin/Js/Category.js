const CurentPage = document.querySelectorAll('#SideBar ul li a');
CurentPage[3].classList.add('Active');

let Category_Form = document.getElementById('Category_Form');
let UP_Category_Form = document.getElementById('UP_Category_Form');
let CancelBtn = document.getElementById('CancelBtn');
let AddCategoryBtn = document.getElementById('AddCategoryBtn');
let AddNowBtn = document.getElementById('AddNowBtn');
let CategoryField = document.getElementById('CategoryField');
let UP_CategoryField = document.getElementById('UP_CategoryField');
let EditBtn = document.querySelectorAll('#Category_Table table td .Edit');
let UP_Cancel = document.getElementById('UP_CancelBtn');
let UP_AddNowBtn = document.getElementById('UP_AddNowBtn');
let TBody = document.getElementById('TBody');


// This is for Add
AddCategoryBtn.onclick = () => {
    Category_Form.classList.add('Active');
}

CancelBtn.onclick = () => {
    Category_Form.classList.remove('Active');
}

AddNowBtn.onclick = () => {
    if (CategoryField.value == '') {
        CategoryField.style.borderColor = '#ff0000';
    }else{
        CategoryField.style.borderColor = '#d3d3d3';
        // console.log('This rady to upload');
        let Data = {
            'CategoryName' : CategoryField.value,
        }
        let JsonData = JSON.stringify(Data);
        fetch('PHP/Category/Insert.php',{
            method: "POST",
            body: JsonData,
            headers: {
                'Content-type' : 'application/json',
            }
        })
        .then((Response) => Response.json())
        .then((Result) => {
            if (Result.Status == "Success") {
                Category_Form.classList.remove('Active');
                ShowMessage(Success, 'Category Added Successfuly');
                CategoryField.value = '';
                LoadData();
            }else if(Result.Status == 'Already Added'){
                ShowMessage(Error, 'This Cagegory Already Added');
                
            }else{
                ShowMessage(Error, 'Have A Some Error');
                
            }
        })
        
    }
}

CategoryField.onkeyup = () => {
    if (CategoryField.value != '') {
        CategoryField.style.borderColor = '#d3d3d3';
    }
}

// This is for Udapte

$(document).on('click', '.Edit', function(){
    UP_Category_Form.classList.add('Active');
    let EditID = $(this).attr('EditID');
    let ObjData = {
        "EditId": EditID,
    }
    let JosnData = JSON.stringify(ObjData);
    fetch('PHP/Category/GetData.php', {
        method: "POST",
        body: JosnData,
        headers: {
            'Content-type' : 'application/json',
        }
    })
    .then((Response) => Response.json())
    .then((Data) => {
        UP_CategoryField.value = Data[0].Category_Name;
        $('#UP_CategoryID').val(Data[0].Category_ID);
    })
})


UP_Cancel.onclick = () => {
    UP_Category_Form.classList.remove('Active');
}

UP_AddNowBtn.onclick = () => {
    
    if (UP_CategoryField.value == '') {
        UP_CategoryField.style.borderColor = '#ff0000';
    }else{
        UP_CategoryField.style.borderColor = '#d3d3d3';

        let UpdateID = $('#UP_CategoryID').val();
        let CategoryName = UP_CategoryField.value;
        let ObjData = {
            "UpdateID": UpdateID,
            "CategoryName": CategoryName,
        }
        let JosnData = JSON.stringify(ObjData);
        fetch('PHP/Category/Update.php', {
            method: "POST",
            body: JosnData,
            headers: {
                'Content-type' : 'application/json',
            }
        })
        .then((Response) => Response.json())
        .then((Data) => {
            if (Data.Status == "Success") {     
                LoadData();
                UP_Category_Form.classList.remove('Active');
                ShowMessage(Success, 'Category Updated Successfuly');
            }else{
                ShowMessage(Error, 'Have a Some Error');

            }
        })
        
    }
}

// Delete Category
$(document).on('click', '.Trash', function(){
    let DeleteID = $(this).attr('DeleteID');
    let ObjData = {
        "DeleteID": DeleteID,
    }
    let JosnData = JSON.stringify(ObjData);
    fetch('PHP/Category/Delete.php', {
        method: "POST",
        body: JosnData,
        headers: {
            'Content-type' : 'application/json',
        }
    })
    .then((Response) => Response.json())
    .then((Data) => {
        if (Data.Status == "Success") {
            $(this).closest('tr').fadeOut();
            ShowMessage(Success, 'Category Deleted Successfuly');
        }else{
            ShowMessage(Error, 'Have a Some Error');

        }
    })
})

UP_CategoryField.onkeyup = () => {
    if (UP_CategoryField.value != '') {
        UP_CategoryField.style.borderColor = '#d3d3d3';
    }
}

// Show Category In Table
function LoadData(){
    fetch('PHP/Category/Show.php')
    .then((Response) => Response.json())
    .then((Data) => {
        let ApiData = '';
        if (Data.Status == 'Empty') {
            ApiData += `<tr>
                            <td colspan="4">No Data Found</td>
                        </tr>`;
        }else{
            for (let i = 0; i < Data.length; i++) {
                ApiData += `<tr>
                                <td>${i+1}</td>
                                <td class="CourseName">${Data[i].Category_Name}</td>
                                <td><i EditID="${Data[i].Category_ID}" class="fa-solid fa-pen-to-square Edit"></i></td>
                                <td><i DeleteID="${Data[i].Category_ID}" class="fa-solid fa-trash Trash"></i></td>
                            </tr>`;
                
            }
        }
        TBody.innerHTML = ApiData;
    })
}
LoadData();