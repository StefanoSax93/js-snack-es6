/*
Snack 3
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/

// esercizio con forEach
const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
const newArray = [];

myArray.forEach(function (item, index) {
    if (index >= 1 && index <= 4) {
        newArray.push(item);
    }
});

console.log(newArray);

//esercizio con filter

const nuovoArray = myArray.filter(function (item, index) {
    return index >= 2 && index <= 5;
});

console.log(nuovoArray);