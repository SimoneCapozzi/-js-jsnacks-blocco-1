var invitati = [
  "Simone",
  "Alessia",
  "Davide",
  "Luca",
  "Pietro",
  "Luisa",
]

var nome_utente = prompt("Inserisci il tuo nome");

var puoi_entrare = false;

for(var i = 0; i < invitati.length; i++){
  var this_invitato = invitati[i];

  if(this_invitato === nome_utante){
    puoi_entrare = true;
  }
}

if(puoi_entrae){
  console.log("puoi entrare")
}else{
  console.log("non puoi entrare")
}

