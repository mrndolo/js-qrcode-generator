let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
// let pTag = document.getElementById("ptag");

function generateQr(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    console.log(qrImage.src);

    imgBox.classList.add("show-img");
    console.log(imgBox.classList);
}