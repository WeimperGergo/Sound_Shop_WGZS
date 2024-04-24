// Kell kosarLista = [] ami mindig novekszik a tartalmakkal.
// Kosarbatez(kosarLista, termekLista, id) -> az adott id-jű terméket beleteszi a kosarlistaba


export function adminHtmlOsszeallit(lista) {
    const txt = `
    <
    `

    return txt;
}

export function utanaMegjelenit(elem, tartalom) {
    elem.append(tartalom);
}

export function elotteMegjelenit(elem, tartalom) {
    elem.prepend(tartalom);
}