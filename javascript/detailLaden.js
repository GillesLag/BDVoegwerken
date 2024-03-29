let afbeeldingDetail = document.querySelector("#imgDetail");
let detailH1 = document.querySelector("#detailH1");
let pDetail = document.querySelector("#detailUitleg");
let keuze;

//keuze uit localstorage halen
keuze = localStorage.getItem('keuze');

console.log(keuze);

//functies voor het inladen
let laadVoegwerken = () => {
    afbeeldingDetail.alt = "Foto van de voegwerken";
    detailH1.textContent = "Voegwerken";
    pDetail.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
}
let laadGevelrenovatie = () => {
    afbeeldingDetail.src = "/images/gevelrenovatie.jpg";
    afbeeldingDetail.alt = "Foto van de gevelrenovatie";
    detailH1.textContent = "Gevelrenovatie";
    pDetail.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
}
let laadGevelreiniging = () => {
    afbeeldingDetail.src = "/images/gevelreiniging.jpg";
    afbeeldingDetail.alt = "Foto van de voegwerken";
    detailH1.textContent = "Gevelreiniging";
    pDetail.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
}
let laadGevelbescherming = () => {
    afbeeldingDetail.src = "/images/gevelbescherming.jpg";
    afbeeldingDetail.alt = "Foto van de voegwerken";
    detailH1.textContent = "Gevelbescherming";
    pDetail.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
}
async function afbeeldingenVoegwerken() {
    const afbeeldingen = ["/images/DSCN1572.JPG", "/images/DSCN1574.JPG", "/images/DSCN1575.JPG", "/images/DSCN1577.JPG", "/images/DSCN1578.JPG", "/images/DSCN1579.JPG", "/images/DSCN1580.JPG", "/images/DSCN1581.JPG", "/images/DSCN1585.JPG", "/images/DSCN1589.JPG", "/images/DSCN1590.JPG", "/images/DSCN1592.JPG"];
    for (let i = 0; i < afbeeldingen.length; i++) {
        afbeeldingDetail.src = afbeeldingen[i];
        await wachten(4000);
    }
    i = 0;
    afbeeldingenVoegwerken();
}

function wachten(ms) {
    return new Promise(val => setTimeout(val, ms));
}

//content kiezen
switch (keuze) {
    case "voegwerken":
        laadVoegwerken();
        afbeeldingenVoegwerken();
        break;
    case "gevelrenovatie":
        laadGevelrenovatie();
        break;
    case "gevelreiniging":
        laadGevelreiniging();
        break;
    case "gevelbescherming":
        laadGevelbescherming();
        break;
    default:
        break;
}