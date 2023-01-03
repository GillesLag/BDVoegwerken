let voegwerken = document.querySelector("#imgVoegwerken");
let gevelrenovatie = document.querySelector("#imgGevelrenovatie");
let gevelreiniging = document.querySelector("#imgGevelreiniging");
let gevelbescherming = document.querySelector("#imgGevelbescherming");
let keuze;

let laadDetail = () => {
    if (keuze == "voegwerken") {
        localStorage.clear();
        localStorage.setItem('keuze', 'voegwerken');
    } else if (keuze == "gevelrenovatie") {
        localStorage.clear();
        localStorage.setItem('keuze', 'gevelrenovatie');
    } else if (keuze == "gevelreiniging") {
        localStorage.clear();
        localStorage.setItem('keuze', 'gevelreiniging');
    } else {
        localStorage.clear();
        localStorage.setItem('keuze', 'gevelbescherming');
    }

    window.location = "detailpagina.html";
}

voegwerken.addEventListener("click", function() {
    keuze = "voegwerken";
    laadDetail();
});
gevelrenovatie.addEventListener("click", function() {
    keuze = "gevelrenovatie";
    laadDetail();
});
gevelreiniging.addEventListener("click", function() {
    keuze = "gevelreiniging";
    laadDetail();
});
gevelbescherming.addEventListener("click", function() {
    keuze = "gevelbescherming";
    laadDetail();
});