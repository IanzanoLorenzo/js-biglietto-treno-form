const submitButton = document.getElementById('submitButton');

let nome, km, anni, prezzo, nCarrozza, codiceCp;

submitButton.addEventListener('click', function(){
    nome = document.getElementById('nome').value;
    km = parseInt(document.getElementById('distanza').value);
    anni = document.getElementById('eta').value;
    prezzo = km * 0.21;

    if (nome === document.getElementById('nome').defaultValue) {

        alert('Inserisci i tuoi dati');
        throw new Error('Inserisci i tuoi dati');

    } else if (isNaN(km)) {
        
        alert('I km devono essere un numero.');
        throw new Error('I km devono essere un numero.');
    
    } else if (anni === 'none'){
    
        alert('Inserisci i tuoi dati');
        throw new Error('Inserisci i tuoi dati');
    
    } else if (anni === 'minorenne'){

        tipoOfferta = 'Minorenni';
        prezzo = prezzo * 0.80;
        
    } else if (anni === 'over65') {
        
        tipoOfferta = 'Over65';
        prezzo *= 0.60;
        
    } else {

        tipoOfferta = 'Nessuna';
    }

    nCarrozza = Math.round(Math.random() * 10);

    codiceCp = Math.round(Math.random() * 10000);

    document.getElementById('nome-biglietto').innerHTML = nome;

    document.getElementById('tipo-offerta').innerHTML = tipoOfferta;

    document.getElementById('n-carrozza').innerHTML = nCarrozza;

    document.getElementById('codice-cp').innerHTML = codiceCp;

    document.getElementById('costo-biglietto').innerHTML = prezzo.toFixed(2) + '&euro;';
}
)
