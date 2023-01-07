//html-elementen definiëren
const btnProject1 = document.querySelector("#btnProject1");
const imgProject1 = document.querySelector("#imgProject1");
const btnProject2 = document.querySelector("#btnProject2");
const imgProject2 = document.querySelector("#imgProject2");
const btnProject2Small = document.querySelector("#btnProject2Small");
const imgProject2Small = document.querySelector("#imgProject2Small");
const btnProject3 = document.querySelector("#btnProject3");
const imgProject3 = document.querySelector("#imgProject3");
const voegwerken = document.querySelector("#imgVoegwerken");
const gevelrenovatie = document.querySelector("#imgGevelrenovatie");
const gevelreiniging = document.querySelector("#imgGevelreiniging");
const gevelbescherming = document.querySelector("#imgGevelbescherming");
const liProject1 = document.querySelector("#liProject1");
const liProject2 = document.querySelector("#liProject2");
const liProject3 = document.querySelector("#liProject3");

let choice;

//de keuze toevoegen aan de localstorage en de detailpagina openen
let laadDetail = () => {
    if (choice == "voegwerken") {
        localStorage.clear();
        localStorage.setItem('keuze', 'voegwerken');
    } else if (choice == "gevelrenovatie") {
        localStorage.clear();
        localStorage.setItem('keuze', 'gevelrenovatie');
    } else if (choice == "gevelreiniging") {
        localStorage.clear();
        localStorage.setItem('keuze', 'gevelreiniging');
    } else if (choice == "gevelbescherming") {
        localStorage.clear();
        localStorage.setItem('keuze', 'gevelbescherming');
    } else if (choice == "project1") {
        localStorage.clear();
        localStorage.setItem('keuze', 'project1');
    } else if (choice == "project2") {
        localStorage.clear();
        localStorage.setItem('keuze', 'project2');
    } else {
        localStorage.clear();
        localStorage.setItem('keuze', 'project3');
    }

    window.location = "detailpagina.html";
}

//eventlisteners aanmaken en de functie laadDetail oproepen
liProject1.addEventListener("click", function() {
    choice = "project1";
    laadDetail();
});
liProject2.addEventListener("click", function() {
    choice = "project2";
    laadDetail();
});
liProject3.addEventListener("click", function() {
    choice = "project3";
    laadDetail();
});

if (btnProject1 != null && imgProject1 != null && btnProject2 != null && imgProject2 != null && btnProject2Small != null && imgProject2Small != null && btnProject3 != null && imgProject3 != null) {
    btnProject1.addEventListener("click", function() {
        choice = "project1";
        laadDetail();
    });
    imgProject1.addEventListener("click", function() {
        choice = "project1";
        laadDetail();
    });
    btnProject2.addEventListener("click", function() {
        choice = "project2";
        laadDetail();
    });
    imgProject2.addEventListener("click", function() {
        choice = "project2";
        laadDetail();
    });
    btnProject2Small.addEventListener("click", function() {
        choice = "project2";
        laadDetail();
    });
    imgProject2Small.addEventListener("click", function() {
        choice = "project2";
        laadDetail();
    });
    btnProject3.addEventListener("click", function() {
        choice = "project3";
        laadDetail();
    });
    imgProject3.addEventListener("click", function() {
        choice = "project3";
        laadDetail();
    });
} else {
    voegwerken.addEventListener("click", function() {
        choice = "voegwerken";
        laadDetail();
    });
    gevelrenovatie.addEventListener("click", function() {
        choice = "gevelrenovatie";
        laadDetail();
    });
    gevelreiniging.addEventListener("click", function() {
        choice = "gevelreiniging";
        laadDetail();
    });
    gevelbescherming.addEventListener("click", function() {
        choice = "gevelbescherming";
        laadDetail();
    });
}