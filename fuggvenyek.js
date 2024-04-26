// Kell kosarLista = [] ami mindig novekszik a tartalmakkal.
// Kosarbatez(kosarLista, termekLista, id) -> az adott id-jű terméket beleteszi a kosarlistaba
import { termekLISTA } from "./adatok.js";

export function adminHtmlOsszeallit() {
    let txt = `
        <main id="adminMain">
            <h1>Adatok Listázása</h1>
            <header>
                <h2>Hangeszközök adatainak megjelenítése: <b>Admin felület</b></h2>
            </header>
            <form class="bekertAdatok tablazatFelettiAdatBeker">
                <input type="text" id="kereso" name="kereso" placeholder="keresés...">
                
                <label for="szuro">Szűrés:</label>
                <select name="szuro" id="szuro">
                    <option value="semmi">Válassz...</option>
                    <option value="marka">Márka</option>
                    <option value="tipus">Típus</option>
                </select>

                <label for="minAr">Min:</label>
                <input type="number" name="minAr" value="0" id="minAr" class="arMinMax">
                
                <label for="maxAr">Max:</label>
                <input type="number" name="maxAr" value="100000" id="maxAr" class="arMinMax">
                
                <br>

                <button id="keresGomb">Keresés</button>
                    
            </form>
            <article id="adminArticle">
                
    `;

    // Ciklus
    txt += adminTablazatOsszeallit(termekLISTA);

    txt += `
            </article>

            <footer>
                <h4>Weimper Gergő Zsombor</h4>
                <h5>A felhasznált képek és termékek csak tájékoztató jellegűek</h5>
            </footer>

        </main>
    `;

    return txt;
}

export function indexHtmlOsszeallit() {
    let txt = `
    <main id="indexMain">
    <h1>WSounds Webáruház</h1>
    <header>
        <h2>F e j l é c</h2>
    </header>
        <form class="bekertAdatok tablazatFelettiAdatBeker">
            <input type="text" id="kereso" name="kereso" value="keresés...">
            
            <label for="szuro">Szűrés:</label>
            <select name="szuro" id="szuro">
                <option value="semmi">Válassz...</option>
                <option value="marka">Márka</option>
                <option value="tipus">Típus</option>
            </select>

            <label for="minAr">Min:</label>
            <input type="number" name="minAr" value="0" id="minAr" class="arMinMax">
            
            <label for="maxAr">Max:</label>
            <input type="number" name="maxAr" value="100000" id="maxAr" class="arMinMax">
            
            <br>

            <button id="keresGomb">Keresés</button>
                
        </form>
    <article id="indexArticle">
    `; /* a keresGomb-hoz esélyes, hogy vissza kell írni a type=submit-ot */

    // Ciklus
    //txt += adminTablazatOsszeallit(termekLISTA);

    txt += `
            </article>

            <footer>
                <h4>Weimper Gergő Zsombor</h4>
                <h5>A felhasznált képek és termékek csak tájékoztató jellegűek</h5>
            </footer>

        </main>
    `;

    return txt;
}

export function utanaMegjelenit(elem, tartalom) {
    elem.append(tartalom);
}

export function elotteMegjelenit(elem, tartalom) {
    elem.prepend(tartalom);
}

export function tablazatMegjelenit(elem, tablazat){
    elem.html(tablazat);
}

export function adminTablazatOsszeallit(lista) {
    let tablazat = `
    <table id="adminTablazat">                 
        <tr>
            <th>Termék név</th>
            <th>Márka</th>
            <th>Típus</th>
            <th>Raktáron</th>
            <th>Ár</th>
        </tr>`;

    lista.forEach(elem => {
        tablazat += "<tr>";
        for (const kulcs in elem) {                
            if(kulcs === "raktaron") {
                if(elem[kulcs] === true) tablazat += `<td>van</td>`;
                else tablazat += `<td>nincs</td>`;
            }
            
            else if(kulcs == "ar") tablazat += `<td>${elem[kulcs]} Ft</td>`;

            else if(kulcs != "kep")  tablazat += `<td>${elem[kulcs]}</td>`;
        }
        tablazat += "</tr>";
    });
    tablazat += "</table>";
    return tablazat;
}

export function tulajdonsagSzur(lista, keresett) {
    const ujLISTA = lista.filter(function(termek){
        let modellSzerint = termek["modell"].toUpperCase().includes(keresett);
        let markaSzerint = termek["marka"].toUpperCase().includes(keresett);
        let tipusSzerint = termek["tipus"].toUpperCase().includes(keresett);
        return modellSzerint || markaSzerint || tipusSzerint;
    });
    return ujLISTA;
}