import { termekLISTA } from "./adatok.js";
import { 
    elotteMegjelenit, utanaMegjelenit, indexHtmlOsszeallit, tulajdonsagSzur,
    termekekOsszeallit, megjelenitElemben, kosarKezelo,
    termekRendez
 } from "./fuggvenyek.js";


const bodyELEM = $("body");

function init(lista) {
    const termekELEM = $("#termekekArticle");
    megjelenitElemben(termekELEM, termekekOsszeallit(lista));
    kosarKezelo();
}
utanaMegjelenit(bodyELEM, indexHtmlOsszeallit());

init(termekLISTA);


// Szűrők:
const keresoMEZO = $("#kereso");
const keresGOMB = $("#keresGomb");
const rendezELEM = $("#rendez");

keresGOMB.on("click", function(event){
    event.preventDefault();
    // keresés
    const szurtLISTA = tulajdonsagSzur(termekLISTA, keresoMEZO.val().toUpperCase());
    // rendezés
    const rendezesSZERINT = $(rendezELEM).val();

    let rendezettLISTA = [];
    
    if (rendezesSZERINT === "nevcsokk") rendezettLISTA = termekRendez(szurtLISTA, -1, "modell");
    else if (rendezesSZERINT === "nevnov") rendezettLISTA = termekRendez(szurtLISTA, 1, "modell");
    else if (rendezesSZERINT === "arcsokk") rendezettLISTA = termekRendez(szurtLISTA, -1, "ar");
    else if (rendezesSZERINT === "arnov") rendezettLISTA = termekRendez(szurtLISTA, 1, "ar");     
    
    init(szurtLISTA);
});




const kosarLISTA = [];
kosarKezelo(kosarLISTA, termekLISTA);





//utanaMegjelenit("#indexKeresoAllapotGomb", `<button></button>`)

const mainELEM = $('#indexMain');
if (window.innerWidth <= 1000) utanaMegjelenit(mainELEM, `<br><br><a href="admin.html" class="feluletValto" id="felhFelValt"><i class="material-icons">	security</i></a><br>`);
else utanaMegjelenit(mainELEM, `<br><br><a href="admin.html" class="feluletValto" id="felhFelValt">Admin felület</a><br>`);
// Oldal alja
