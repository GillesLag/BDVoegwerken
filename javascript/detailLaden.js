let voegwerken = document.querySelector("#imgVoegwerken");
let gevelrenovatie = document.querySelector("#imgGevelrenovatie");
let gevelreiniging = document.querySelector("#imgGevelreiniging");
let gevelbescherming = document.querySelector("#imgGevelbescherming");
let afbeeldingDetail = document.querySelector("#imgDetail");
let h1Detail = document.querySelector("#h1Detail");

//clickevents toevoegen



//functies voor het inladen
let laadVoegwerken = () => {
    console.log("clicked");
    afbeeldingDetail.setAttribute.src = "/images/voegwerken.jpg";
    afbeeldingDetail.setAttribute.alt = "Foto van de voegwerken";
    h1Detail.textContent = "Voegwerken";

    laadPagina;
}

let laadPagina = () => {
    window.location = "detailpagina.html";
}

voegwerken.addEventListener("click", laadVoegwerken);