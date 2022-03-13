
// creo gli elementi
const output = document.createElement("div");
output.classList.add('score');
output.innerText = 0;

const buttons = document.createElement("div");
buttons.classList.add('buttons');

const plus = document.createElement("button");
plus.classList.add('plus')
plus.innerHTML = '<i class="fas fa-plus"></i>';

const reset = document.createElement("button");
reset.classList.add('reset')
reset.innerHTML = '<i class="fas fa-redo-alt"></i>';

const minus = document.createElement("button");
minus.classList.add('minus')
minus.innerHTML = '<i class="fas fa-minus"></i>';

// posiziono gli elementi

const container = document.querySelector('.container');

container.appendChild(output);
container.appendChild(buttons);
buttons.appendChild(plus);
buttons.appendChild(reset);
buttons.appendChild(minus);

// Definisco la variabile score
let score = 0;

// Implemento Event listeners


plus.addEventListener('click', () => {
    addNum(1)
})
minus.addEventListener('click', () => {
    addNum(-1)
})


function addNum(num) {
    // console.log('aooo')
    result = score += num;
    output.innerHTML = result;

    // Aggiungo cambio colore in bianco se uguale a zero e in verde se positivo
    if (result < 0) {
        output.style.color = 'red';
    } else if (result === 0) {
        output.style.color = 'white';
    }
    else if (result > 0) {
        output.style.color = 'green';
    }
}

// Implemento Event listener per il bottone "reset" 
reset.addEventListener('click', () => {
    score = 0;
    output.innerHTML = score;
    output.style.color = 'white';
})

// // Implemento Event listener con funzione di sottrazione per il bottone "minus"
// minus.addEventListener('click', () => {
//     score--;
//     output.innerHTML = score;
//     // Aggiungo cambio colore in bianco se uguale a zero e in rosso se negativo
//     if (score === 0) {
//         output.style.color = 'white';
//     } else if (score < 0) {
//         output.style.color = 'red';
//     }
// })
