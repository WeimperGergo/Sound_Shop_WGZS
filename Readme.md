# Webáruház - WSounds Webshop

## Specifikáció:

Adatok: terméknév ; márka ; típus ; raktáron ; ár
Admin felület:

    - Kiírunk egy listát táblázat formájában amit lehessen szűrni:
        > Tulajdonság alapján (Terméknévre, Márkára és Típusra lehet keresni.)
        > Márka alapján (pl: JBL termékek listázása)
        > Típus alapján (pl: Bluetooth fejhallgatók listázása)
        > Ár alapján (min - max között)

    - Rendezni:
        > Ár szerint csökk/növ
        > Terméknév szerint csökk/növ
        
    - Emellett admin exklúzív:
        > termék adatok módosítása (hozzáadás, felülírás, törlés)
        > ! továbbfejlesztés esetleg... !
    
Felhasználói felület:

    - Kilistázzuk a kártyákat amin szerepelnek a termék főbb tulajdonságai
    - Ugyanúgy lehet KERESNI a lista elemeire mint az admin felületen.

## Adatszerkezetek:

termekLISTA = [{},{}] - itt vannak a megjelenítendő adatok


## Metódusok:

1. **adminHtmlOsszeallit(lista)->txt** | Összeállitja a táblázat html szerkezetét egy szöveges változóba

2. **indexHtmlOsszeallit(lista)->txt** | Összeállítja a főoldal html szerkezetét egy szöveges változóba  

3. **szovegMegjelenit(txt)** | Megjeleníti egy adott html elemben a paraméterben kapott szöveget

4. **tulajdonsagSzur(lista, keresett) -> rendezettLista** | Keresett szöveg paraméter alapján leszűri a listát, a keresett szöveget vizsgálja a lista elemein belül. Itt egy olyan listát vizsgál amiben a név, márka és típus van benne (nevMarkaTipusLista-ban)

5. **markaSzur(lista, markaLista) -> rendezettLista** | Checkbox-al bepipált márkákra szűri le a listát

6. **tipusSzur(lista, tipusLista) -> rendezettLista** | Checkbox-al bepipált típusokra szűri le a listát

7. **arSzur(lista, min, max) -> rendezettLista** | Paraméterbe kapott min és max ár érték közé szűri le a listát

8. **arRendez(lista, irany)** | Paraméterbe kapott irány alapján rendezi a listát ár szerint

9. **tNevRendez(lista, irany)** | Paraméterbe kapott irány alapján rendezi a listát termék név szerint

10. **adatBovit(lista) -> bovitettLista** | Az űrlapról összegyűjti az adatokat amiket egy objektumba tárol el, majd ezt beleteszi a listába -> A függvény akkor fut le, ha a SUBMIT gomb-ra kattintunk

11. **kepek(lista) -> kepekLista** | Paraméterbe megkapja az adatok listát, annak objektumai index-dik eleméhez hozzárendeli a képeket - D R A F T
