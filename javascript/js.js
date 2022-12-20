let img = document.querySelector('#imgVoegwerken');

function changeImage() {
    img.src = "images/klikHier.jpg";
}






let hoverImgVoegwerken = img.addEventListener("hover", changeImage);