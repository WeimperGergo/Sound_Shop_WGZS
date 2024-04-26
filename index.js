import { termekLISTA } from "./adatok.js";
import { 
    elotteMegjelenit, utanaMegjelenit, indexHtmlOsszeallit, tulajdonsagSzur, adminTablazatOsszeallit,
    tablazatMegjelenit
 } from "./fuggvenyek.js";

const kosarLISTA = [];

const bodyELEM = $("body");
if (window.innerWidth <= 1000) elotteMegjelenit(bodyELEM, `<a href="admin.html" class="feluletValto" id="adminFelValt"><i class="material-icons">	security</i></a><br>`);
else elotteMegjelenit(bodyELEM, `<a href="admin.html" class="feluletValto" id="adminFelValt">Admin felület</a><br>`);

indexHtmlOsszeallit();

// Szűrők:
const keresoMEZO = $("#kereso");
const keresGOMB = $("keresGomb");
keresGOMB.on("click", function(){
    termekLISTA.forEach(elem =>{
        termekLISTA = tulajdonsagSzur(termekLISTA, keresoMEZO.val());
    })
    
});



//utanaMegjelenit("#indexKeresoAllapotGomb", `<button>AEUGH</button>`)