let images = document.querySelectorAll(".imgProjecten");
let afbeelding;

//verander de afbeelding
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseenter", (event) => {
        afbeelding = event.target.src;
        event.target.src = "/images/klikHier.jpg";
    }, false);
    images[i].addEventListener("mouseleave", (event) => {
        event.target.src = afbeelding;
    }, false);
}