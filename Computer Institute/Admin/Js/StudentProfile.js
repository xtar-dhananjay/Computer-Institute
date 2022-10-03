const CurentPage = document.querySelectorAll('#SideBar ul li a');
CurentPage[4].classList.add('Active');

// Start Fetch API
function LoadData(){
    let StudentID = $('#Student_ID').text();
    fetch(`PHP/Students/StudentProfile.php?StudentID=${StudentID}`)
    .then((Response) => Response.json())
    .then((Data) => {
        console.log(Data);
        $('#StudentImg').attr('src', 'Img/Students/' + Data[0].Student_Img);
        $('#StudentID').text(Data[0].Student_ID);
        $('#StudentsName').text(Data[0].Student_Name);
        $('#FatherName').text(Data[0].Father_Name);
        $('#Gender').text(Data[0].Gander);
        $('#Education').text(Data[0].Education);
        $('#AdmissionDate').text(Data[0].Admission_Date);
        $('#PhoneNumber').text(Data[0].Phone);
        $('#Email').text(Data[0].Email);
        $('#Address').text(Data[0].Address);

        let DateBirthArray = Data[0].DOB.split('-');
        let DateOfBirth = DateBirthArray[2] + '/' + DateBirthArray[1] + '/' + DateBirthArray[0];
        $('#DOB').text(DateOfBirth);

        // lets Make Course List Section
        if (Data[0].Course_Name != '') {
            let CourseName = Data[0].Course_Name.split(', ');
            let CourseDate = Data[0].Coursoe_Date.split(', ');
            let Batch = Data[0].Batch.split(', ');
            let RollNumber = Data[0].Roll_No.split(', ');
            let CertificateID = Data[0].Certificate_ID.split(', ');
            let CourseHTML = '';
            for (let i = 0; i < CourseName.length; i++) {
                CourseHTML += `<div class="Course">
                                    <p>${CourseName[i]}</p>
                                    <div>
                                        <p>${CourseDate[i]}</p>
                                        <p>${Batch[i]}</p>
                                        <input type="text" hidden value="${RollNumber[i]}" class="RollNumber">
                                        <input type="text" hidden value="${CertificateID[i]}" class="CertificateID">
                                        <a href="IDCard/index.php?StudentID=${Data[0].Student_ID}&StudentName=${Data[0].Student_Name}&CourseName=${CourseName[i]}&RollNo=${RollNumber[i]}&StudentImg=${Data[0].Student_Img}"><button>ID Card</button></a>
                                        <button class="CertificateBtn" CourseName="${CourseName[i]}" CertificateID="${CertificateID[i]}" StudentName="${Data[0].Student_Name}" >Certificate</button>
                                    </div>
                                </div>`;
            }
            $('#AllCourse').html(CourseHTML);
        }else{
            $('#AllCourse').html('<h3 style="text-align: center">No Found Courses</h3>');
        }

    })
}
LoadData();



// This is for Certificate Generator
    
    // Select Rquare function of making certificate 
    const { degrees, PDFDocument, rgb } = PDFLib;

    // this is name font settings
    NFontSize = 40;

    // Get Current Date for Certificate
    var today = new Date();

    // This is for best format date 
    let month = ''
    switch (today.getMonth()+1) {
      case 1:
        month = 'Jan'; 
      break;
      case 2:
        month = 'Fab'; 
      break;
      case 3:
        month = 'Mar'; 
      break;
      case 4:
        month = 'Apr'; 
      break;
      case 5:
        month = 'May'; 
      break;
      case 6:
        month = 'June'; 
      break;
      case 7:
        month = 'July'; 
      break;
      case 8:
        month = 'Aug'; 
      break;
      case 9:
        month = 'Sept'; 
      break;
      case 10:
        month = 'Oct'; 
      break;
      case 11:
        month = 'Nov'; 
      break;
      case 12:
        month = 'Dec'; 
      break;
    
      default:
        month = 'month';
      break;
    }

    if (today.getDate() <= 9) {
      TodyDate = '0' + today.getDate();
    }else{
      TodyDate = today.getDate();
    }

    1
    let date = TodyDate + ' ' + month + ', ' + today.getFullYear();
    
    // Set Button for PDf Download
    let Btn = document.querySelector('.CertificateBtn');
    $(document).on('click', '.CertificateBtn', async function(){
        console.log($(this).attr('CertificateID'))
        let CertificateID = 'Certificate ID = ' + $(this).attr('CertificateID');
      // Get Name of the Student for Adding on certificate 
      let Name =  $(this).attr('StudentName');

      // This is Geting the Select Box Course Name     
      let CourseName = $(this).attr('CourseName');
      let CourseFontSize = 20;

      // Fetch the existing PDF document
      const url = 'Certificate-Assets/Certificate.pdf'
      const NFont = 'Certificate-Assets/Fonts/Cardo-Bold.ttf'
      const DFont = 'Certificate-Assets/Fonts/Cardo-Regular.ttf'
      const FetchPDF = await fetch(url).then(res => res.arrayBuffer())
      
      // Fetch the PDF
      const pdfDoc = await PDFDocument.load(FetchPDF)
      
      // Fetch and embed Fonts in PDF Document
      // This font for Name
      pdfDoc.registerFontkit(fontkit);
      const FetchNameFont = await fetch(NFont).then(res => res.arrayBuffer())
      const NameFont = await pdfDoc.embedFont(FetchNameFont);
      // This font for Certificate issue Data
      const FetchDateFont = await fetch(DFont).then(res => res.arrayBuffer())
      const DateFont = await pdfDoc.embedFont(FetchDateFont);

      // This is for Geting the Name Font width for centering the font       
      NFontWidth = NameFont.widthOfTextAtSize(Name, NFontSize)
      CFontWidth = NameFont.widthOfTextAtSize(CourseName, CourseFontSize)

      // Get the first page of the document
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]

      // Get the width and height of PDF Document
      const { width, height } = firstPage.getSize()

      // Add Name on the certificate
      firstPage.drawText(Name, {
        x: width / 2 - NFontWidth / 2,
        y: height / 2 + -4,
        size: NFontSize,
        font: NameFont,
        color: rgb(0, 0, 0),
        rotate: degrees(0),
      })

      // Add The Certificate Coruse Name
      firstPage.drawText(CourseName, {
        x: width / 2 - CFontWidth / 2,
        y: height / 2 + -48,
        size: CourseFontSize,
        font: NameFont,
        color: rgb(0, 0, 0),
        rotate: degrees(0),
      })

      //  Add Date on the certificate
      firstPage.drawText(date, {
        x: 557,
        y: height / 2 - 172,
        size: 15,
        font: DateFont,
        color: rgb(0, 0, 0),
        rotate: degrees(0),
      })

      //  Add Certificate ID on the certificate
      firstPage.drawText(CertificateID, {
        x: 30,
        y: height / 2 - 265,
        size: 12,
        font: DateFont,
        color: rgb(0, 0, 0),
        rotate: degrees(0),
      })

      //  This code for showing live editing of the pdf Document
      // const Uri = await pdfDoc.saveAsBase64({dataUri: true})
      // var now = document.querySelector('#iframe').src=Uri;
      
      
      // This Code for Download the pdf file
      // This is code save the all editing on this PDF file 
      const pdfBytes = await pdfDoc.save()
			// This Code for Download the PDF file

    download(pdfBytes, Name, "application/pdf");

      // for more Information you can watch this video and visit the pdf-lib.js.org offical website
      // https://youtu.be/2-9H4c5bHRw

    });











