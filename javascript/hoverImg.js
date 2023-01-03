let images = document.querySelectorAll(".imgProjecten");




let changeImage = (i) => {
    images[i].src = "images/klikHier.jpg";
}

let setNormal = (i) => {
    if (i == 0) {
        images[i].src = "/images/voegwerken.jpg";
    } else if (i == 1) {
        images[i].src = "/images/gevelrenovatie.jpg";
    } else if (i == 2) {
        images[i].src = "/images/gevelreiniging.jpg";
    } else {
        images[i].src = "/images/gevelbescherming.jpg";
    }
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', changeImage(i));
    images[i].addEventListener('mouseleave', setNormal(i));
}