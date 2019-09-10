var nomInput = document.getElementById("nom");
var prenomInput = document.getElementById("prenom");
var villeInput = document.getElementById("ville");

var btn = document.getElementById("valider");

btn.addEventListener("click", function(){
alert(nomInput.value + "\n" + prenomInput.value + "\n"  + villeInput.value);

});

