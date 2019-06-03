// content.js
// Finds the news section and replaces the text with a short message

// Change News heading
x = document.getElementById("In_the_news");
x.innerHTML = 'Noiseless News';
console.log(x);

// Destroy news content
var die = document.getElementById("mp-itn");
while (die.hasChildNodes()) {   
  die.removeChild(die.firstChild);
}
// Add some replacement message
var cont = document.createElement("p");
var t = document.createTextNode("Noisy news now neutralised");       // Create a text node
cont.appendChild(t);   
die.appendChild(cont);