var text ="";
var m ; 
var n =""; 
document.getElementById("one").addEventListener("click", function() {
  randomQuote();

  });
  document.getElementById("two").addEventListener("click", function() {
   var zero ;  
  setTimeout(() => {
   zero =PressBtn(0);
  }, 1500);
  sum(zero);
  });

  document.getElementById("three").addEventListener("click", function() {
    PressBtn(1);
  });

  document.getElementById("four").addEventListener("click", function() {
    PressBtn(2);
  });

  document.getElementById("five").addEventListener("click", function() {
    PressBtn(3);
  });

  document.getElementById("six").addEventListener("click", function() {
    PressBtn(4);
  });

  document.getElementById("seven").addEventListener("click", function() {
    PressBtn(5);
  });

  document.getElementById("eight").addEventListener("click", function() {
    PressBtn(6);
  });

  document.getElementById("nine").addEventListener("click", function() {
 PressBtn(7);
   
   
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
var keypad = [btn2,btn3,btn4,
btn5,btn6,btn7,btn8,btn9];
var counterkey=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
cpt9=-1;
//Init the 'par' div before click
document.querySelector("#two").innerHTML = btn2[0];
document.querySelector("#three").innerHTML = btn3[0];
document.querySelector("#four").innerHTML = btn4[0];
document.querySelector("#five").innerHTML = btn5[0];
document.querySelector("#six").innerHTML = btn6[0];
document.querySelector("#seven").innerHTML = btn7[0];
document.querySelector("#eight").innerHTML = btn8[0];
document.querySelector("#nine").innerHTML = btn9[0];

function PressBtn(key){
  
 
  if(counterkey[key]<keypad[key].length-1){
    
    counterkey[key]=counterkey[key]+1;
  }
  else{
    counterkey[key]=0;
    console.log("f");
  }
  var keke = counterkey[key];
  var h =keypad[key][keke];
  
 return  document.querySelector("#text").innerHTML = h;
 
}

function sum (key){
text = text+key;
}

