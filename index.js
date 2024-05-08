import { termekLISTA } from "./adatok.js";
import { 
    elotteMegjelenit, utanaMegjelenit, indexHtmlOsszeallit, tulajdonsagSzur,
    termekekOsszeallit, megjelenitElemben
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


keresGOMB.on("click", function(event){
    event.preventDefault();
    const szurtLISTA = tulajdonsagSzur(termekLISTA, keresoMEZO.val().toUpperCase());
    init(szurtLISTA);
});

const kosarLISTA = [];
function kosarKezelo() {
    const kosarbaGOMB = $(".kosarbaGomb");
    console.log(kosarbaGOMB);
    kosarbaGOMB.on("click", function(event){
    event.preventDefault();
    //kosarLISTA.append();
    console.log(event.target.id + "\n");
});
}



//utanaMegjelenit("#indexKeresoAllapotGomb", `<button></button>`)

const mainELEM = $('#indexMain');
if (window.innerWidth <= 1000) utanaMegjelenit(mainELEM, `<br><br><a href="admin.html" class="feluletValto" id="felhFelValt"><i class="material-icons">	security</i></a><br>`);
else utanaMegjelenit(mainELEM, `<br><br><a href="admin.html" class="feluletValto" id="felhFelValt">Admin felület</a><br>`);
// Oldal alja
