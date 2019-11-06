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

// function init(){
//     var planet = document.getElementById('greenplanet');
//     planet.innerHTML = "Red Alert: hit by phaser fire!";
//     planet.setAttribute('class', 'redtext');
//     planet.setAttribute('id', 'bg');
//     var planetAttribute = planet.getAttribute('class');
//     var image = document.getElementById('raspberry');
//     image.setAttribute('width', '20%');
//     delete 
//   console.log(planetAttribute);
//   }
//   window.onload = init;
  

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

function findCarInLot(car) {
  for (var i = 0; i < lot.length; i++) {
    if (car === lot[i]) {
      return i;
    }
  }
  return -1;
}
var chevy = {
  make: "Chevy",
  model: "Bel Air"
};
var taxi = {
  make: "Webville Motors",
  model: "Taxi"
};
var fiat1 = {
  make: "Fiat",
  model: "500"
};
var fiat2 = {
  make: "Fiat",
  model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chevy);
var loc4 = findCarInLot(fiat1);

console.log(loc1);
console.log(loc2);
console.log(loc3);
console.log(loc4);

//+++++++++++++++++++++++++++ Детектор лжи

function lieDetectorTest() {
  var lies = 0;
  var stolenDiamond = { };
  if (stolenDiamond) {
      console.log("You stole the diamond");
      lies++;
  }
  var car = {
      keysInPocket: null
  };
  if (car.keysInPocket) {
      console.log("Uh oh, guess you stole the car!");
      lies++;
  }
  if (car.emptyGasTank) {
      console.log("You drove the car after you stole it!");
      lies++;
  }
  var foundYouAtTheCrimeScene = [ ];
  if (foundYouAtTheCrimeScene) {
      console.log("A sure sign of guilt");
      lies++;
  }
  if (foundYouAtTheCrimeScene[0]) {
      console.log("Caught with a stolen item!");
      lies++;
  }
  var yourName = " ";
  if (yourName) {
      console.log("Guess you lied about your name");
      lies++;
  }
  return lies;
}
var numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
  console.log("guilty as charged");
}


//============================= Проверяем текст

// var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
// var presentableText = text.toLowerCase();
// if (presentableText.length > 0) {
//   alert(presentableText);
// }

// var name = "Yakov";
// document.write(name.length);

//++++++++++++++++Строчные методы
//Метод split - Разбивка строки

var st = "one two three four five six";

var st_sp_1 = st.split(" ");
console.log(st_sp_1);

var st_sp_2 = st.split("t");
console.log(st_sp_2);

var st_sp_3 = st.split("/");
console.log(st_sp_3);

var data = "name/phone/adress";
var vals = data.split("/");
console.log("Split array is ", vals);

//Борьба за кресло

// function validate_1(phoneNumber){
//   if (phoneNumber.length !== 8) {
//     return false;
//   }
//   for (var i = 0; i < phoneNumber.length; i++){
//     if (i === 3) {
//       if (phoneNumber.charAt(i) !== '-') {
//         return false;
//       }
//     } else if (isNaN(phoneNumber.charAt(i))) {
//       return false;
//     }
//   }
//   return true;

// }

// function validate_2(phoneNumber){
//   if (phoneNumber.length !== 8) {
//     return false;
//   }
//   var first = phoneNumber.substring(0,3);
//   var second = phoneNumber.substring(4);
//   if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
//     return false;
//   }
//   return true;
// }

function validate_1(phoneNumber) {
  if (phoneNumber.length > 8 || phoneNumber.length < 7) {
    return false;
  }
    for (var i = 0; i < phoneNumber.length; i++) {
      if (i === 3){
        if (phoneNumber.length === 8 &&
          phoneNumber.charAt(i) !== '-'){
            return false;
          } else if (phoneNumber.length === 7 &&
            isNaN(phoneNumber.charAt(i))) {
              return false;
            }
      } else if (isNaN(phoneNumber.charAt(i))) {
        return false;
      }
    }
    return true;
}

function validate_2(phoneNumber) {
  if (phoneNumber.length > 8 ||
    phoneNumber.length < 7) {
      return false;
    }
  var first = phoneNumber.substring(0,3);
  var second = phoneNumber.substring(phoneNumber.length - 4);

  if (isNaN(first) || isNaN(second)) {
    return false;
  }
  if (phoneNumber.length === 8) {
    return (phoneNumber.charAt(3) === '-');
  }
  return true;
}

function validate(phoneNumber) {
  return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

var phoneNumber = prompt("Введите номер вашего телефона");
var tel = validate(phoneNumber);
var tel_1 = validate_1(phoneNumber);
var tel_2 = validate_2(phoneNumber);
console.log(tel);    //Выводится null
console.log(tel_1);
console.log(tel_2);

