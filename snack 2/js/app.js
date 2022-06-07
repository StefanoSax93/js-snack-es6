/*
Snack2
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i 
cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// creo l'array con le squadre di calcio

const squadreCalcio = [
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0,
    },
];


//genero dei numeri random per le proprietà delle squadre
for(let i=0; i<squadreCalcio.length; i++){
    const puntiFatti = Math.floor(Math.random() * 100);
    const falliSubiti = Math.floor(Math.random() * 100);
    
    squadreCalcio[i].puntiFatti = puntiFatti;
    squadreCalcio[i].falliSubiti = falliSubiti;
}

console.table(squadreCalcio);
//creo un nuovo array con solo i nomi delle squadre e i falli subiti
const nuovoArray = [];

for(let i=0; i<squadreCalcio.length; i++){
    const {nome, falliSubiti} = squadreCalcio[i];
    //pusho nomi e falli subiti nel nuovo array      
    nuovoArray.push(
        {
            nome,            //è come se scrivessi nome: nome,
            falliSubiti      //è come se scrivessi falliSubiti: falliSubiti
        }
    );
};
console.log(nuovoArray);


