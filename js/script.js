function isPalindrome(parola) {
    for (let i = 0; i < Math.floor(parola.length / 2); i++) {
        if (parola[i] != parola[parola.length-1-i]) {
            return false;
        }
    }
    return true;
}


function numberGenerator() {
    const numero = Math.floor(Math.random() * 6) + 1;
    return numero;
}


function isEven(numero) {
    return numero % 2 === 0;
}


// Esercizio Palindromi
let parola = prompt("Inserisci una parola:\n");

while (parola.length === 0) {
    print("parola non valida");
    parola = prompt("Inserisci una parola:\n");
}

if (isPalindrome(parola)) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}


// Esercizio Pari o dispari
let scelta = prompt("Pari o dispari: \nDigita 'p' per pari o 'd' per dispari:\n");
while (scelta !== "p" && scelta !== "d") {
    print("valore non valido");
    scelta = prompt("Pari o dispari: \nDigita 'p' per pari o 'd' per dispari:\n");
}

let numeroScelto = prompt("Inserisci un numero da 1 a 6:\n");
while (numeroScelto < 1 || numeroScelto > 6) {
    print("valore non valido");
    numeroScelto = prompt("Inserisci un numero da 1 a 6:\n");
}

const numeroPc = numberGenerator();
const somma = numeroPc + numeroScelto;
if ((isEven(somma) && scelta === "p") || (!isEven(somma) && scelta === "d")) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
    
}



