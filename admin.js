import { termekLISTA } from "./adatok.js";
import { 
    adminHtmlOsszeallit, elotteMegjelenit, utanaMegjelenit, tulajdonsagSzur,
    adminTablazatOsszeallit, megjelenitElemben
 } from "./fuggvenyek.js";


const bodyELEM = $("body");
const keresoMEZO = $("#kereso");
const keresGOMB = $("#keresGomb");
const articleELEM = $("#adminArticle");

if (window.innerWidth <= 1000) {
    elotteMegjelenit(bodyELEM, `<a href="index.html" class="feluletValto" id="felhFelValt"><i class="material-icons">account_circle</i></a><br>`);
}
else elotteMegjelenit(bodyELEM, `<a href="index.html" class="feluletValto" id="felhFelValt">Felhasználói felület</a><br>`);

const adminHTML = adminHtmlOsszeallit();  
utanaMegjelenit(bodyELEM, adminHTML);

/* a termékLista elemein végigmegy a ciklus, a belső ciklusban pedig az elemeknek a tulajdonságait érjük el
termekLISTA.forEach(elem => {
    for (const kulcs in elem) {
        console.log(elem[kulcs]);
    }
    console.log();
});*/

keresGOMB.on("click", function(){
    event.preventDefault();

    const szurtLISTA = tulajdonsagSzur(termekLISTA, keresoMEZO.val().toUpperCase());

    const TABLAZAT = adminTablazatOsszeallit(szurtLISTA);

    megjelenitElemben(articleELEM, TABLAZAT);
});


