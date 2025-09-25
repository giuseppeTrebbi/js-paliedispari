function isPalindrome(parola) {
    for(let i = 0; i < Math.floor(parola.length/2); i++) {
        if (parola[i] != parola[parola.length-1-i]) {
            return false;
        }
    }
    return true;
}

function pariODispari() {
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
    const myNumber = Math.floor(Math.random() * 6) + 1

    if (scelta === "p" && (myNumber + numeroScelto) % 2 === 0) {
        console.log("Hai vinto");
    } else if (scelta === "d" && (myNumber + numeroScelto) % 2 != 0) {
        console.log("Hai vinto");
    } else {
        console.log("Hai perso");
    }
}



// Invocazioni delle funzioni

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

pariODispari();



