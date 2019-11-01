// var access =
//   document.getElementById("code2");
// var code = access.innerHTML;
// code = code + " midnight";
// alert(code);


// function init(){
//   var planet = document.getElementById("greenplanet");
//   planet.innerHTML = "Red Alert: hit by phaser fire!";
//   return planet;
// }
// var planet = init();
// planet.setAttribute("class", "redtext");
// planet.setAttribute('class', 'bluetext');
// planet.innerHTML = "All right!";

// ++++++++++++++++++++++++++++++
var scoop = document.getElementById('raspberry');
if(scoop == null){
  console.log("There is no such element");
} else {
  var altText = scoop.getAttribute('alt');
  if(altText == null){
    console.log("Oh, I guess there isn't an alt attribute.");
  } else {
    console.log("I can't see the image in the console,");
    console.log(" but I'm told it looks like " + altText);
  }
}

// function addSongs() {
  var song1 = document.getElementById("song1");
  var song2 = document.getElementById("song2");
  var song3 = document.getElementById("song3");
  song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
  song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
  song3.innerHTML = "I Code the Line, by Johnny JavaScript";
// }
  // window.onload = addSongs;

function init(){
    var planet = document.getElementById('greenplanet');
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute('class', 'redtext');
    planet.setAttribute('id', 'bg');
    var planetAttribute = planet.getAttribute('class');
    var image = document.getElementById('raspberry');
    image.setAttribute('width', '20%');
    delete 
  console.log(planetAttribute);
  }
  window.onload = init;
  

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){
  return "abcdef";
}
var test10 = null;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);

var test11 = null;
console.log (typeof test11);

//++++++++++++++++++++++++++++++++

if (99 == '99') {
  console.log("A number equals a string!");
} else {
  console.log("No way a number equals a string");
}

console.log("true" == true);
