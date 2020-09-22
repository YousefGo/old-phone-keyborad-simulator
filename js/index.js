var text = document.getElementById("text").innerHTML;
document.getElementById("one").addEventListener("click", function() {
  randomQuote();

  });
  document.getElementById("two").addEventListener("click", function() {
    pressBtn2();
  
  });

  document.getElementById("three").addEventListener("click", function() {
    pressBtn3();
  });

  document.getElementById("four").addEventListener("click", function() {
    pressBtn4();
  });

  document.getElementById("five").addEventListener("click", function() {
    pressBtn5();
  });

  document.getElementById("six").addEventListener("click", function() {
    pressBtn6();
  });











  document.getElementById("seven").addEventListener("click", function() {
    pressBtn7();
  });

  document.getElementById("eight").addEventListener("click", function() {
    pressBtn8();
  });

  document.getElementById("nine").addEventListener("click", function() {
   var x = pressBtn9();
  alert(x);
  });

  document.getElementById("star").addEventListener("click", function() {
    text= text+"*";
    document.getElementById("text").innerHTML = text;

  });

  document.getElementById("hash").addEventListener("click", function() {
    text= text+"#";
      document.getElementById("text").innerHTML = text;

  });

  document.getElementById("zero").addEventListener("click", function() {
    text= text+"0";
    document.getElementById("text").innerHTML = text;

  });
  var t = document.getElementById("try").innerHTML;
document.getElementById('finsh').addEventListener('click',()=>{
    if(text===t){
    document.getElementById("msg").innerHTML="YOU WIN"
    }
    else{
        alert("Not true try agian");
    }
})
  


var btn2= [2,'a','b','c'];
var btn3 = [3,'d','e','f'];
var btn4 = [4,'g','h','i'];
var btn5 = [5,'j','k','l'];
var btn6 = [6,'m','n','o'];
var btn7 = [7,'p','q','r','s'];
var btn8 = [8,'t','u','v'];
var btn9 = [9,'w','x','y','z'];

var cpt = -1;
var cpt3=-1;
var cpt4 = -1;
var cpt5=-1;
var cpt6 = -1;
var cpt7=-1;
var cpt8= -1;
var cpt9=-1;


//Init the 'par' div before click
document.querySelector("#two").innerHTML = btn2[0];
document.querySelector("#three").innerHTML = btn3[0];
document.querySelector("#four").innerHTML = btn4[0];
document.querySelector("#five").innerHTML = btn5[0];
document.querySelector("#six").innerHTML = btn6[0];
document.querySelector("#seven").innerHTML = btn7[0];
document.querySelector("#eight").innerHTML = btn8[0];
document.querySelector("#nine").innerHTML = btn9[0];

function pressBtn2 () 
{
  console.log("work");
  if(cpt<btn2.length-1)
  {console.log("if work");
    cpt++;}
  else
   { cpt=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML = btn2[cpt];
}

function pressBtn3 () 
{
  console.log("work");
  if(cpt<btn3.length-1)
  {console.log("if work");
    cpt3++;}
  else
   { cpt=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML = btn3[cpt3];
}

function pressBtn3 () 
{
  console.log("work");
  if(cpt<btn3.length-1)
  {console.log("if work");
    cpt3++;}
  else
   { cpt=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML = btn3[cpt3];
}


function pressBtn3 () 
{
  console.log("work");
  if(cpt3<btn3.length-1)
  {console.log("if work");
    cpt3++;}
  else
   { cpt3=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML = btn3[cpt3];
}


function pressBtn4 () 
{
  console.log("work");
  if(cpt4<btn3.length-1)
  {console.log("if work");
    cpt4++;}
  else
   { cpt4=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML = btn4[cpt4];
}

function pressBtn5 () 
{
  console.log("work");
  if(cpt5<btn3.length-1)
  {console.log("if work");
    cpt5++;}
  else
   { cpt5=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML = btn5[cpt5];
}







function pressBtn6 () 
{
  console.log("work");
  if(cpt6<btn6.length-1)
  {console.log("if work");
    cpt6++;}
  else
   { cpt6=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML = btn6[cpt6];
}



function pressBtn7 () 
{
  console.log("work");
  if(cpt7<btn7.length-1)
  {console.log("if work");
    cpt7++;}
  else
   { cpt7=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML = btn7[cpt7];
}

function pressBtn8 () 
{
  console.log("work");
  if(cpt8<btn8.length-1)
  {console.log("if work");
    cpt8++;}
  else
   { cpt8=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML =text+ btn8[cpt8];
}

var m ; 
function pressBtn9 () 
{
 
  console.log("work");
  if(cpt9<btn9.length-1)
  {console.log("if work");
    cpt9++;}
  else
   { cpt9=0;
    console.log("else work");
   }
  document.querySelector("#text").innerHTML = btn9[cpt9];
return btn9[cpt9];
  
}
