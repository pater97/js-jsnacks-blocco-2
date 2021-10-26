/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* a somma degli elementi è minore di 50.
*/

const numeri = [];
for (let i = 0; i < 50; i++) {
    let element = prompt(`dimmi un numero`)
    numeri.push(element)

}
console.log(numeri);