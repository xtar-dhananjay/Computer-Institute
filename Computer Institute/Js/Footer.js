function GetData(){
    fetch(`PHP/Footer/GetData.php`)
    .then((Response) => Response.json())
    .then((Data) => {
        $('#Copy-Right').text(Data[0].CopyRight);
    })
}
GetData();