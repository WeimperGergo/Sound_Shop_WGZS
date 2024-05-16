import { termekLISTA } from "./adatok.js";
import { 
    elotteMegjelenit, utanaMegjelenit, indexHtmlOsszeallit, tulajdonsagSzur,
    termekekOsszeallit, megjelenitElemben, kosarOsszeallit,
    termekRendez,
    arSzur
} from "./fuggvenyek.js";

const bodyELEM = $("body");
function init(lista) {
    const termekELEM = $("#termekekArticle");   
    megjelenitElemben(termekELEM, termekekOsszeallit(lista));
}

utanaMegjelenit(bodyELEM, indexHtmlOsszeallit());
init(termekLISTA);

const keresoMEZO = $("#kereso");
const keresGOMB = $("#keresGomb");
const rendezELEM = $("#rendez");
const minSZURO = $("#minAr");
const maxSZURO = $("#maxAr");

keresGOMB.on("click", function(event){
    event.preventDefault();
    // keresés
    const szurtLISTA = tulajdonsagSzur(termekLISTA, keresoMEZO.val().toUpperCase());
    // rendezés
    const rendezesSZERINT = $(rendezELEM).val();
    // ár szerint
    const minAR = minSZURO.val();
    const maxAR = maxSZURO.val();

    let rendezettLista = [];
    
    if (rendezesSZERINT === "nevcsokk") rendezettLista = termekRendez(szurtLISTA, -1, "modell");
    else if (rendezesSZERINT === "nevnov") rendezettLista = termekRendez(szurtLISTA, 1, "modell");
    else if (rendezesSZERINT === "arcsokk") rendezettLista = termekRendez(szurtLISTA, -1, "ar");
    else if (rendezesSZERINT === "arnov") rendezettLista = termekRendez(szurtLISTA, 1, "ar");     
    else rendezettLista = szurtLISTA;

    let arSzurtLista = arSzur(rendezettLista, minAR, maxAR);
    init(arSzurtLista);
});


// Kosár:
function kosarInit(lista){
    
}

let kosarLISTA = [];
const kosarbaGOMB = $(".kosarbaGomb");

kosarbaGOMB.on("click", function(event){
    let id = event.target.id;
    //console.log($(termekLISTA[id]).toArray()); - Tömbként adja vissza
    let db = 1;
    if(kosarLISTA.includes($(termekLISTA[id]))){
        db++;
    } 
    else kosarLISTA.push($(termekLISTA[id]));
    const kosarELEM = $('#kosar');
    megjelenitElemben(kosarELEM, kosarOsszeallit(kosarLISTA));

});



//utanaMegjelenit("#indexKeresoAllapotGomb", `<button></button>`)

if (window.innerWidth <= 1000) utanaMegjelenit(bodyELEM, `<br><br><a href="admin.html" class="feluletValto" id="felhFelValt"><i class="material-icons">	security</i></a><br>`);
else utanaMegjelenit(bodyELEM, `<br><br><a href="admin.html" class="feluletValto" id="felhFelValt">Admin felület</a><br>`);
// Oldal alja
