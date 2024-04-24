import { adminHtmlOsszeallit, elotteMegjelenit, utanaMegjelenit } from "./fuggvenyek.js";

const bodyELEM = $("body");
if (window.innerWidth <= 1000) {
    elotteMegjelenit(bodyELEM, `<a href="index.html" class="feluletValto" id="felhFelValt"><i class="material-icons">account_circle</i></a><br>`);
}else elotteMegjelenit(bodyELEM, `<a href="index.html" class="feluletValto" id="felhFelValt">Felhasználói felület</a><br>`);

utanaMegjelenit(bodyELEM, `
<main id="adminMain">
        <h1>Adatok Listázása</h1>
        <header>
            <h2>Hangeszközök adatainak megjelenítése: <b>Admin felület</b></h2>
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

            <button type="submit" id="keresGomb">Keresés</button>
                
        </form>
        <article id="adminArticle">
            <table id="adminTablazat">
                
                <tr>
                    <th>Termék név</th>
                    <th>Márka</th>
                    <th>Típus</th>
                    <th>Raktáron</th>
                    <th>Ár</th>
                </tr>

                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>

            </table>
        </article>

        <footer>
            <h4>Weimper Gergő Zsombor</h4>
            <h5>A felhasznált képek és termékek csak tájékoztató jellegűek</h5>
        </footer>

        
    </main>
`);