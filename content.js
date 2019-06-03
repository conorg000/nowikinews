// content.js
//var firstHref = $("a[href^='http']").eq(0).attr("href");
//console.log(firstHref);

// try to destroy Content div
//var die = document.getElementById("content")
//while (die.hasChildNodes()) {   
//  die.removeChild(die.firstChild);
//}

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
var t = document.createTextNode("Lots of real nice things happened today. Hurrah. [Neutralising noisy news since '19]");       // Create a text node
cont.appendChild(t);   
die.appendChild(cont);