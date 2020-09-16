var text = document.getElementById("text").innerHTML;
document.getElementById("one").addEventListener("click", function() {
      text= text+"1";
      document.getElementById("text").innerHTML = text;

  });
  document.getElementById("two").addEventListener("click", function() {
  
    text= text+"2";
      document.getElementById("text").innerHTML = text;
  
  });

  document.getElementById("three").addEventListener("click", function() {
    text= text+"3";
    document.getElementById("text").innerHTML = text;  
  });

  document.getElementById("four").addEventListener("click", function() {
    text= text+"4";
      document.getElementById("text").innerHTML = text;
  });

  document.getElementById("five").addEventListener("click", function() {
    text= text+"5";
    document.getElementById("text").innerHTML = text;
  });

  document.getElementById("six").addEventListener("click", function() {
    text= text+"6";
    document.getElementById("text").innerHTML = text;
  });

  document.getElementById("seven").addEventListener("click", function() {
    text= text+"7";
      document.getElementById("text").innerHTML = text;
  });

  document.getElementById("eight").addEventListener("click", function() {
    text= text+"8";
    document.getElementById("text").innerHTML = text;
  });

  document.getElementById("nine").addEventListener("click", function() {
    text= text+"9";
    document.getElementById("text").innerHTML = text;

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
  