//CONSEGNA
/*
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore
*/

const biciclette = [
    {
        nome: `bianchi`,
        peso: 13
    },
    {
        nome: `tresoldi`,
        peso: 15
    },
    {
        nome: `shimano`,
        peso: 10
    },
    {
        nome: `bwin`,
        peso: 8
    },
]
const stamp = document.querySelector(`.container`)
//prendere una bici di riferimento 
let lightessBike = biciclette[0]
//ciclare all'interno delle bici 
for (let i = 0; i < biciclette.length; i++) {
    const bicicletta = biciclette[i]

    if (bicicletta.peso < lightessBike.peso) {
        lightessBike = bicicletta
    }
}

stamp.innerHTML = `la bici più leggera è: ${lightessBike.nome} e pesa: ${lightessBike.peso}`