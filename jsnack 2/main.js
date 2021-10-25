//CONSEGNA
/*
Descrizione:
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Nome sarà l’unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
*/

//creazione array

const campionato = [
    {
        squadra: `inter`,
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: `milan`,
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: `juventus`,
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: `atalanta`,
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: `napoli`,
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: `roma`,
        puntiFatti: 0,
        falliSubiti: 0
    }
]
//generare numeri random al posto delle proprietà punti fatti e falli subiti
function casuale() {
    num = Math.round(Math.random() * 100);
    return num
}
casuale()
//ciclare le squadre
for (let i = 0; i < campionato.length; i++) {
    const squadra = campionato[i]
    squadra.puntiFatti = casuale()
    squadra.falliSubiti = casuale()
    console.log(squadra);
}
