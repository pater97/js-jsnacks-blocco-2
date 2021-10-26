//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach

const biciclette = [
    {
        nome: `bianchi`,
        peso: 3
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
let lightessBike = biciclette[0]
biciclette.forEach((bicicletta, i) => {
    if (bicicletta.peso < lightessBike.peso) {
        lightessBike = bicicletta
    }
})
stamp.innerHTML = `la bici più leggera è: ${lightessBike.nome} e pesa: ${lightessBike.peso}`

