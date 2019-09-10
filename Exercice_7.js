var PointureInput = document.getElementById("pointure");
var anneeInput = document.getElementById("annee");

var btn = document.getElementById("valider");

btn.addEventListener("click", function(){
var result  = parseFloat(PointureInput.value) * 2; 
result = result + 5;
result = result * 50;
result = result - parseInt(anneeInput.value);
result = result + 1766;
alert(result);


});