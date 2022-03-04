// Definisco le variabili
const plus = document.querySelector('#plus')
const reset = document.querySelector('#reset')
const minus = document.querySelector('#minus')
const output = document.querySelector('.score')
let score = 0;

// Implemento Event listener con funzione di addizione per il bottone "plus"
plus.addEventListener('click', () => {
    score++;
    output.innerHTML = score;

    // Aggiungo cambio colore in bianco se uguale a zero e in verde se positivo
    if (score === 0) {
        output.style.color = 'white';
    }
    else if (score > 0) {
        output.style.color = 'green';
    }
})

// Implemento Event listener per il bottone "reset" 
reset.addEventListener('click', () => {
    score = 0;
    output.innerHTML = score;
    output.style.color = 'white';
})

// Implemento Event listener con funzione di sottrazione per il bottone "minus"
minus.addEventListener('click', () => {
    score--;
    output.innerHTML = score;
    // Aggiungo cambio colore in bianco se uguale a zero e in rosso se negativo
    if (score === 0) {
        output.style.color = 'white';
    } else if (score < 0) {
        output.style.color = 'red';
    }
})
