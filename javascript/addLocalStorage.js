let btnProject1 = document.querySelector("#btnProject1");
let imgProject1 = document.querySelector("#imgProject1");
let btnProject2 = document.querySelector("#btnProject2");
let imgProject2 = document.querySelector("#imgProject2");
let btnProject2Small = document.querySelector("#btnProject2Small");
let imgProject2Small = document.querySelector("#imgProject2Small");
let btnProject3 = document.querySelector("#btnProject3");
let imgProject3 = document.querySelector("#imgProject3");
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

if (btnProject1 != null && imgProject1 != null && btnProject2 != null && imgProject2 != null && btnProject2Small != null && imgProject2Small != null && btnProject3 != null && imgProject3 != null) {
    btnProject1.addEventListener("click", function() {
        keuze = "voegwerken";
        laadDetail();
    });
    imgProject1.addEventListener("click", function() {
        keuze = "voegwerken";
        laadDetail();
    });
    btnProject2.addEventListener("click", function() {
        keuze = "voegwerken";
        laadDetail();
    });
    imgProject2.addEventListener("click", function() {
        keuze = "voegwerken";
        laadDetail();
    });
    btnProject2Small.addEventListener("click", function() {
        keuze = "voegwerken";
        laadDetail();
    });
    imgProject2Small.addEventListener("click", function() {
        keuze = "voegwerken";
        laadDetail();
    });
    btnProject3.addEventListener("click", function() {
        keuze = "voegwerken";
        laadDetail();
    });
    imgProject3.addEventListener("click", function() {
        keuze = "voegwerken";
        laadDetail();
    });
} else {
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
}