// Kell kosarLista = [] ami mindig novekszik a tartalmakkal.
// Kosarbatesz(kosarLista, termekLista, id) -> az adott id-jű terméket beleteszi a kosarlistaba
import { termekLISTA } from "./adatok.js";

export function adminHtmlOsszeallit() {
    let txt = `
        <main id="adminMain">
            <h1>Adatok Listázása</h1>
            <header>
                <h2>Hangeszközök adatainak megjelenítése: <b>Admin felület</b></h2>
            </header>
            <form class="bekertAdatok tablazatFelettiAdatBeker" id="adminBeker">
                
                <input type="text" id="kereso" name="kereso" placeholder="keresés...">
                <br>
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
    <header>
        <h1>WSounds Webáruház</h1>
    </header>
    <form class="bekertAdatok tablazatFelettiAdatBeker" id="indexBeker">
                <input type="text" id="kereso" name="kereso" placeholder="keresés...">
                
                <br>

                <label for="rendez">Rendezés:</label>
                <select name="rendez" id="rendez">
                    <option value="semmi">Válassz...</option>
                    <option value="nevcsokk">Név szerint csökkenő</option>
                    <option value="nevnov">Név szerint növekvő</option>
                    <option value="arcsokk">Ár szerint csökkenő</option>
                    <option value="arnov">Ár szerint növekvő</option>
                </select>

                <label for="minAr">Min:</label>
                <input type="number" name="minAr" value="0" id="minAr" class="arMinMax">
                
                <label for="maxAr">Max:</label>
                <input type="number" name="maxAr" value="100000" id="maxAr" class="arMinMax">
                
                <br>
                <button id="keresGomb">Keresés</button>
                
            </form>

        <article id="termekekArticle">
            
        </article>

        <aside id="kosarAside">
            <h1 id="kosarCim">Kosár</h1>
            <div id="kosar"></div>
        </aside>
    
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

export function megjelenitElemben(elem, tartalom){
    elem.html(tartalom);
}

export function termekekOsszeallit(lista){
    let tartalom = "";
    lista.forEach((elem, ind) => {
        let raktaronE = `<h5 style="color: darkred" class="kozeptxt">nem elérhető</h5>`;
        if(elem.raktaron) raktaronE = `<h5 style="color: #11a900d6" class="kozeptxt">elérhető</h5>`
        tartalom += `
        <div class="termekekKartya">
            <div id="${elem.modell.replace(" ", "").toLowerCase()}Id">
                <img src="${elem.kep}" alt="termék kép" class="termekKep kozeptxt termekCim" id="${elem.modell}Kep">
                <h3 class="kozeptxt termekCim">${elem.modell}</h3>
                <h5 class="kozeptxt termekCim">${elem.marka}</h5>
                ${raktaronE}
                <h2 class="termekAr">Ár: ${elem.ar}Ft</h2>
                <button class="kosarbaGomb" id="${ind}">Kosárba</button>
            </div>
        </div>`;
        
    }); 
    return tartalom;
}

export function kosarOsszeallit(lista){
    let kosarTermekek = `<div>`;
    console.log(lista)
    lista.forEach((elem, ind) =>{
        kosarTermekek += `
        <h1>${elem.marka} ${elem.modell}</h1>
        `;
    });
    kosarTermekek += `</div>`;
    return kosarTermekek;
}

// Szűrők

export function tulajdonsagSzur(lista, keresett) {
    const ujLISTA = lista.filter(function(termek){
        let modellSzerint = termek["modell"].toUpperCase().includes(keresett);
        let markaSzerint = termek["marka"].toUpperCase().includes(keresett);
        let tipusSzerint = termek["tipus"].toUpperCase().includes(keresett);
        return modellSzerint || markaSzerint || tipusSzerint;
    });
    return ujLISTA;
}

export function arSzur(lista, min, max){
    const ujLISTA = [];
    lista.forEach((elem) => {
        if (min < elem.ar && elem.ar < max) ujLISTA.push(elem);
    });
    console.log(ujLISTA);
    return ujLISTA;
}

export function termekRendez(lista, irany, miSzerint){
    const ujLISTA = lista.sort(function(t1, t2){
        let eredmeny = 1;
            if ((typeof t1[miSzerint]) === "string" || (typeof t2[miSzerint]) === "string"){     
                const eztKAR = ["á", "é", "í", "ó", "ő", "ú", "ű"];
                const erreKAR = ["a", "e", "i", "o", "o", "u", "u"];
                for (let i = 0; i < eztKAR.length; i++) {      
                    t1[miSzerint].replaceAll(eztKAR[i], erreKAR[i]);
                    t2[miSzerint].replaceAll(eztKAR[i], erreKAR[i]);
                }
            }    
        if (t1[miSzerint] < t2[miSzerint]) eredmeny = -1;

        return eredmeny*irany;
    });
        //console.log(ujLISTA);
    return ujLISTA;
}

