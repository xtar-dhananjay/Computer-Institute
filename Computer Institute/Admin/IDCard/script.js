let DownloadBtn = document.getElementById('DownloadBtn');

DownloadBtn.onclick = () => {
    let Snapchat = document.getElementById('Card');

    html2canvas(Snapchat).then((canvas) => {
        let imageURL = canvas.toDataURL('image/png');

        let Anchor = document.createElement('a');

        Anchor.setAttribute('href', imageURL);
        Anchor.setAttribute('download', 'ID Card.png');
        Anchor.click();
        Anchor.remove();


    });

}