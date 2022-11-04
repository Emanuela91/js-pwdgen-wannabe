// Variabili

let nome;
let cognome;
let colore;
let password;
const numeroFisso = 21;

// Chiedi all’utente il suo nome,
nome = prompt("inserisci il tuo nome");

console. log(nome);

// poi chiedi il suo cognome,
cognome = prompt("cognome");

console. log(cognome);

// poi chiedi il suo colore preferito
colore =prompt("colore");

console. log(colore);

// Infine scrivi sulla pagina nomecognomecolorepreferito21
password = nome + cognome + colore + "21";

// Output
console. log("password");

document.getElementById("title").innerHTML = `La tua password è ${password}`;