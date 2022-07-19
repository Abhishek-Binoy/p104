// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
var geuss = 1;

function submit(){
    var x = document.getElementById("geussField").value;
if( x == y )
{
    alert("CONGRATULATIONS!!!"+"   YOU GEUSSED IT RIGHT IN "
            + geuss + "GEUSS");
            geuss= 1; 
}

  
// function for number guessed by user  
else if(x > y)

{
    geuss++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    geuss++;
    alert("OOPS SORRY!! TRYA GREATER NUMBER")
}
}
function playAgain(){
    y = Math.floor(Math.random() *10 + 1);
}

