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

for (let i = 0; i < biciclette.length; i++) {
    const bicicletta = biciclette[i]
    console.log(bicicletta);
}
