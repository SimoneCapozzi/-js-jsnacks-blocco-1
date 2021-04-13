//richiedo numero utente

var limite = parseInt(prompt("Di quanti numeri vuoi sommare il cubo?"));
var limite = 5;
console.log(limite);

//inizializzo una var per la somma

var somma = 0;

//creo un ciclo dove calcolo i cubi e li sommo

for(var i = 1; i <= limite; i++){
  console.log(i)
  console.log(Math.pow(1,3))
  somma += Math.pow(1,3);
}

//output
console.log("la somma dei cubi è " +somma);