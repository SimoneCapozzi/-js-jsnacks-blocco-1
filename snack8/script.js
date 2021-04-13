 var numero_inserito = prompt("inserisci un numero di 4 cifre");

var somma = 0;

for(var i = 0; i < numero_inserito.length; i++){
  var cifra = numero_inserito[i];
  console.log(cifra);
  somma += parseInt(cifra);
}
console.log(somma);22