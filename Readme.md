# Webáruház - WSounds Webshop

## Specifikáció:
    Készíts "webáruházat" tetszőleges témában. 

    Egy listában tároljuk az objektumokat, minden objektumnak legalább 3 adata legyen!

    Az adatokat jelenítsd meg egy táblázatban!
    A design eltérhet a képen látottól!

    A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat (Egyszer kattintunk növekvő, mégegyszer- csökkenő sorrendben az adott fejléc szerint) Az elv: a listádat rendezd, majd hívd meg újra az oldal megjelenítését!
    Készíts 3 szűrés mezőt, amiben kiválasztott mezők alapján szűrheted az adataidat!
    
    ++ A táblázat minden sora mellett legyen egy törlés gomb, amivel az adott sort tudjuk törölni a táblázatból. 
    ++++ A táblázat minden sora mellett legyen egy szerkesztés gomb, ahol tudjuk szerkeszteni a lista adott sorát!
## Adatok: terméknév ; márka ; típus ; raktáron ; ár
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

1. **adminHtmlOsszeallit()->txt** | Összeállitja a táblázat html szerkezetét egy szöveges változóba

2. **indexHtmlOsszeallit()->txt** | Összeállítja a főoldal html szerkezetét egy szöveges változóba  

3. **tulajdonsagSzur(lista, keresett) -> rendezettLista** | Keresett szöveg paraméter alapján leszűri a listát, a keresett szöveget vizsgálja a lista elemein belül. Itt egy olyan listát vizsgál amiben a név, márka és típus van benne (nevMarkaTipusLista-ban)

4. **arSzur(lista, min, max) -> rendezettLista** | Paraméterbe kapott min és max ár érték közé szűri le a listát

5. **termekRendez(lista, irany, miSzerint) -> rendezettLista** | Paraméterbe kapott irány alapján rendezi a listát termék modellnév, vagy ár szerint

6. **adatBovit(lista) -> bovitettLista** | Az űrlapról összegyűjti az adatokat amiket egy objektumba tárol el, majd ezt beleteszi a listába -> A függvény akkor fut le, ha a SUBMIT gomb-ra kattintunk - D R A F T

7. **adminTablazatOsszeallit(lista) -> tablazat** | Paraméterbe kapott listának az elemeit egy html táblázatba rendezi, egy szöveggel tér vissza amit még meg kell jeleníteni.

8. **utanaMegjelenit(elem, tartalom)** | A kapott elemen belülre megjeleníti a szöveges tartalmat, hozzáfűzéssel

9. **elotteMegjelenit(elem, tartalom)** | A kapott elemen belülre megjeleníti a szöveges tartalmat, eléfűzéssel

10. **megjelenitElemben(elem, tartalom)** | Az elem tartalmát felülírva megjeleníti az új tartalmat

11. **termekekOsszeallit(lista) -> tartalom** | Összeállítja a lista elemeit termékekként

12. **kosarOsszeallit(lista) -> kosarTermekek** | Összeállítja a kosarat, minden alkalommal amikor egy műveletet végzünk a kosárral, ez fog lefutni
