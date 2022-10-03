function GetData(){
    let CourseID = $('#CourseID').text();
    fetch(`PHP/CourseDetails/GetData.php?CourseID=${CourseID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        let Ratings = '';
        if (Data[0].Rating == 0) {
            Ratings = `<span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>`;
        } else if(Data[0].Rating == 1){
            Ratings = `<span class="material-icons">star</span>
                        <span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>`;
        } else if(Data[0].Rating == 2){
            Ratings = `<span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>`;

        } else if(Data[0].Rating == 3){
            Ratings = `<span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons Down">star</span>
                        <span class="material-icons Down">star</span>`;
        } else if(Data[0].Rating == 4){
            Ratings = `<span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons Down">star</span>`;
        }else{
            Ratings = `<span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons">star</span>`;
        }

        $('#CourseTitle').text(Data[0].CourseTitle);
        $('#Ratings').html(Ratings);
        $('#CourseImg').attr('src', 'Admin/Img/Course/' + Data[0].Img);
        $('#TotalStudent').text(Data[0].NFA);
        $('#Price').text(Data[0].Price);
        $('#ClassDuration').text(Data[0].ClassDuration);
        $('#WeeklyHoliday').text(Data[0].WeeklyHoliday);
        $('#CourseDuration').text(Data[0].CourseDuration);
        $('#FeePay').text(Data[0].FeePay);
        $('#CourseDesc').text(Data[0].Description);
        let Content = Data[0].Content;
        let ArrayContent = Content.split(',');
        let ContentHTML = '';
        ArrayContent.forEach(e => {
            ContentHTML += `<p>${e}</p>`
        });
        $('#AllContants').html(ContentHTML);
    })
}
GetData();