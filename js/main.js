var nome = prompt("Qual è il tuo nome?");
var cognome = prompt("Qual è il tuo cognome?");
var colore = prompt("Qual è il tuo colore preferito?")
var utente = (nome + cognome + colore);
document.getElementById("ptotale").innerHTML = (utente + 20);
//console.log(document.getElementById("ptotale").innerHTML = (utente + 20));
