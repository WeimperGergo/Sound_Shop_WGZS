# Webáruház - WSounds Webshop

## Specifikáció:

Keresési adatok: [terméknév, márka, típus, szín, raktáron, ár]
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

termekLista = [{},{}] - itt vannak a megjelenítendő adatok


## Metódusok:

1. **htmlOsszeallit(lista)->txt** | Összeállitja a táblázat html szerkezetét egy szöveges változóba

2. **szovegMegjelenit(txt)** | Megjeleníti egy adott html elemben a paraméterben kapott szöveget

3. **tulajdonsagSzur(lista, keresett) -> rendezettLista** | Keresett szöveg paraméter alapján leszűri a listát, a keresett szöveget vizsgálja a lista elemein belül. Itt egy olyan listát vizsgál amiben a név, márka és típus van benne (nevMarkaTipusLista-ban)

4. **markaSzur(lista, markaLista) -> rendezettLista** | Checkbox-al bepipált márkákra szűri le a listát

5. **tipusSzur(lista, tipusLista) -> rendezettLista** | Checkbox-al bepipált típusokra szűri le a listát

6. **arSzur(lista, min, max) -> rendezettLista** | Paraméterbe kapott min és max ár érték közé szűri le a listát

7. **arRendez(lista, irany)** | Paraméterbe kapott irány alapján rendezi a listát ár szerint

8. **tNevRendez(lista, irany)** | Paraméterbe kapott irány alapján rendezi a listát termék név szerint

