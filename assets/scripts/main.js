$(function() {
        $('body').sakura();

var i = 0;
var txt = 'welcome to my website'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}    
typeWriter()
});






