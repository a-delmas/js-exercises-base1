var premier_nombreInput = document.getElementById("premier_nombre");
var deuxieme_nombreInput = document.getElementById("deuxieme_nombre");


var btn = document.getElementById("valider");

btn.addEventListener("click", function(){
alert(parseInt(premier_nombreInput.value) * parseFloat(deuxieme_nombreInput.value));

});

