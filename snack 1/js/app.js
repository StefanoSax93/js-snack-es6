/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa 
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore 
utilizzando destructuring e template literal
*/

//creo un array di oggetti
const listaBici = [
    {
        nome: 'ciclocross',
        peso: 8.5
    },
    {
        nome: 'Ebike',
        peso: 9.5
    },
    {
        nome: 'gravel',
        peso: 9
    },
    {
        nome: 'scatto fisso',
        peso: 7.5
    },
    {
        nome: 'cronomertro',
        peso: 7
    },
    {
        nome: 'endurance',
        peso: 10
    }
];

// devo trovare la bici con peso minore
const { nome, peso } = listaBici[0];

let biciConPesoMinore = {
    nome,
    peso,  
};

for (let i = 1; i < listaBici.length; i++) {

    const { peso, nome } = listaBici[i];

    if (biciConPesoMinore.peso > peso) {
    biciConPesoMinore = {
        nome,
        peso,
    };

    const container = document.querySelector('.container');
    container.innerHTML = 
    `<h1>La bici più leggera è:</h1>
    <p>Bici: ${nome} - Peso: ${peso}kg</p>`;
}
};


