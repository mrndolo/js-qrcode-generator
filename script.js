let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
// let pTag = document.getElementById("ptag");

function generateQr(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    // console.log(qrImage.src);

        imgBox.classList.add("show-img");
    // console.log(imgBox.classList);
    }
    else{
        // pTag.classList.add("p-error");
        qrText.classList.add("error");
        qrText.style.border = `1px solid #ff0000`;
        setTimeout(()=>{
            qrText.classList.remove("error");
            // pTag.classList.remove("p-error");
            qrText.style.border = `1px solid #494eea`;
        },1000)
        // alert("Please enter something");
    }
}