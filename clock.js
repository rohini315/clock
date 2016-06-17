$(document).ready(function() {

  function displayTime() {
    currentTime = new Date(); 
    var hour = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();


    function time(face) {
      if (face < 10) {
        return "0" + face;
      } else {
        return face;
      }
    }

    var morning = "AM";
    if (hour > 12) {
      hour = hour - 12;
      morning = "PM";
    }

    hour = time(hour);
    min = time(min);
    sec = time(sec);
    var new_clock=document.getElementById("clock").innerHTML
    var clockdiv = document.getElementById("clock");
    clockdiv.innerHTML = hour + ":" + min + ":" + sec + " " + morning;
   
   var changeclock=$("#clock");
    if (min % 2==0){
      changeclock.css("color","white");
      } else{
      changeclock.css("color","black");
      }
    

  } // End of the displayTime function

  function setbackground(){
    var background=["green","red"];
    var changebg=Math.floor((Math.random() * background.length));
    console.log(changebg);
    var body=$("#bodybg")

    if (changebg==0){
      body.css("background-image","url(rise.gif)");
    }

    if (changebg==1){
      body.css("background-image","url(set.gif)");
    }
  } // End of the setbackground function

  function randomcolors(){
    var colors=["red","green","orange"];
    var x=Math.floor((Math.random() * 3));
    var clockcolor=$("#clock");
    clockcolor.css("color", colors[x])
    console.log(colors[x])
    } 

    setInterval(function(){displayTime() }, 1000);
    setInterval(function(){randomcolors() }, 3.6e+6);
    setInterval(function(){setbackground() }, 300000);
     
     

  }) // End of Document.ready

  

  
   

