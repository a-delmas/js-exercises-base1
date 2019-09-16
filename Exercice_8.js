var age = document.getElementById("age");

var btn = document.getElementById("valider");

btn.addEventListener("click", function(){
   


if(age.value > 18)
   alert ("vous etes majeur")

   if(age.value < 18)
   alert ("vous etes mineur")

})
