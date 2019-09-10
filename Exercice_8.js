var ageInput = document.getElementById("age");

var btn = document.getElementById("valider");

btn.addEventListener("click", function(){
   


if(ageInput.value> 18)
   alert ("vous etes majour")

   if(ageInput.value< 18)
   alert ("vous etes meneur")

})
