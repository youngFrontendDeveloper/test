// alert('Привет, JS');
// alert('Давай знакомиться');
var message; //a-z, A-Z, 0-9, $, _
var Message;
var myMessage;
myMessage = "Сообщение, значение";


var myNumber = 10.484; //Число   Числа в кавычки не заключаются
var myString = "Привет, Вася!"; // СТРОКА   Текст обязательно заключается в кавычки.
//Число в кавычках '12' будет воспринято как строка
var myBoolean = true; //false  булево значение
var myNull = null; //Значение равно пустоте
var myUndefined = myUndefined; //переменная не имеет какого-либо значения
var myObject =  {
    name:'Nina',
    age:18
};    //ОБЪЕКТ   Может содержать в себе числа, строки и т.д.

// function doIt(param) {
//     param = 2;
// }
// var test = 1;
// doIt(test);
// console.log(test);


// ++++++++++++++++++++++++++++

// function clunk(times) {
//   var num = times;
//   while (num > 0) {
//     display("clunk");
//     num = num - 1;
//   }
// }
// function thingamajig(size) {
//   var facky = 1;
//   clunkCounter = 0;
//   if(size == 0) {
//     display("clank");
//   } else if (size == 1) {
//     display("thunk");
//   } else {
//     while (size > 1){
//       facky = facky * size;
//       size = size - 1;
//     }
//     clunk(facky);
//   }
// }
// function display(output) {
//   console.log(output);
//   clunkCounter = clunkCounter + 1;
// }
// var clunkCounter = 0;
// thingamajig(4);
// console.log(clunkCounter);


// ++++++++++++++++++++++

// Неправильный вариант написания функции Воровство со счета в банке
// var balance = 10500;
// var cameraOn = true;
// function steal(balance, amount) {
//     cameraOn = false;
//     if (amount < balance) {
//         balance = balance - amount;
//     }
//     return amount;
//     cameraOn = true;
// }
// var amount = steal(balance, 1250);
// alert("Criminal: you stole " + amount + "!");


//Правильный вариант написания функции Воровство со счета в банке
// var balance = 10500;
// var amount = 1500;
// var cameraOn =true;
// function steal(balance, amount){
//   cameraOn = false;
//   if(amount < balance) {
//     balance = balance - amount;
//   }
//   cameraOn = true;
//   return balance;
// }
// balance = steal(balance, amount);
// steal(balance, amount);
// alert("Criminal: you stole " + amount + "!");
// alert(balance);

// ++++++++++++++++++++++

// Определяем название последнего элемента в массиве
// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// var last = products.length - 1;
// var recent = products[last];
// alert(last);
// console.log(recent);


// ++++++++++++++++++++++


// function makePhrases() {
//       var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
//       var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
//       var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
//       var rand1 = Math.floor(Math.random() * words1.length);
//       var rand2 = Math.floor(Math.random() * words2.length);
//       var rand3 = Math.floor(Math.random() * words3.length);
//       var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//       alert(phrase);
//     }
//     makePhrases();
// var myArrey = [0,5,8,10,32,45,49,56,78,89];
// var index = myArrey[myArrey.length - 1]
// alert(myArrey.length);
// alert(index);
// console.log(myArrey[myArrey.length - 1]);

// var bubbleSolution =[60,50,60,100,38,45,10,12,55,48,67];
// var output;
// var i = 0;
// while (i < bubbleSolution.length){
//   output = "bubble solution #" + i + " score: " + bubbleSolution[i];
//   console.log(output);
//   i = i + 1;
// }
// var tests = bubbleSolution.length;

// -------------------------

// var products = ["Choo Choo Chocolate","Icy Mint", "Cake Batter", "Bubblegum"];
// var hasBubbleGum = [false,false,false,true];
// var i = 0;
// while (i < hasBubbleGum.length){
//   if (hasBubbleGum[i]){
//     console.log(products[i] + " contains bubble gum");
//
//   }
//   i = i + 1;
// }
   //ИЛИ
// var products = ["Choo Choo Chocolate","Icy Mint", "Cake Batter", "Bubblegum"];
// var hasBubbleGum = [false,false,false,true];
// for (var i = 0; i < hasBubbleGum.length;  i = i + 1){
//   if (hasBubbleGum[i]){
//     console.log(products[i] + " contains bubble gum");
//   }
// }
 // ++++++++++++++++++++++++++++++

//  var bubbleSolution = [60,50,60,100,38,45,10,12,55,48,67,48,100,61,57,23,62,93,41,39,64,100];
//  var output;
//  var highScore = 0;
//  var bestSolutions = [];
//  for (var i = 0; i < bubbleSolution.length; i++) {
//   output = "bubble solution #" + i +
//   " score: " + bubbleSolution[i];
//   console.log(output);
//   if (highScore < bubbleSolution[i]){
//     highScore = bubbleSolution[i];
//   }
//  }
//  console.log("Bubbles tests: " + bubbleSolution.length);
//  console.log("Highest bubble score: " + highScore);
// for (var i = 0; i < bubbleSolution.length; i++) {
//   if(bubbleSolution[i] == highScore){
//     bestSolutions.push(i);
//   }
// }
// console.log("Solutions with the highest score: " + bestSolutions);


// ИЛИ без push:

// var bubbleSolution = [60,50,60,100,38,45,10,12,55,48,67,48,100,61,57,23,62,93,41,39,64,100];
// var output;
// var highScore = 0;
// var bestSolutions = [];
// var x = 0;
// for (var i = 0; i < bubbleSolution.length; i++) {
//  output = "bubble solution #" + i +
//  " score: " + bubbleSolution[i];
//  console.log(output);
//  if (highScore < bubbleSolution[i]){
//    highScore = bubbleSolution[i];
//  }
// }
// console.log("Bubbles tests: " + bubbleSolution.length);
// console.log("Highest bubble score: " + highScore);
//
// for (var i = 0; i < bubbleSolution.length; i++) {
//   if( bubbleSolution[i] == highScore){
//     bestSolutions[x] = i;
//       x++;
//   }
// }
// console.log("Solutions with the highest score: " + bestSolutions);

// +++++++++++++++++++++++++++
// То же самое, но с использованием функции:

// var bubbleSolution = [60,50,60,100,38,45,10,12,55,48,67,48,100,
//                       61,57,23,62,93,41,39,64,100];
// var costs = [.25, .27, .25, .25, .25, .25,
//              .33, .31, .25, .29, .27, .22,
//              .31, .25, .25, .33, .21, .25,
//              .25, .25, .28, .25, .24, .22,
//              .20, .25, .30, .25, .24, .25,
//              .25, .25, .27, .25, .26, .29];
//
// function printAndGetHighScore(array){
//   var highScore = 0;
//   var output;
//   for (var i = 0; i < array.length; i++) {
//     output = "Bubble solution #" + i + " score: " + array[i];
//     console.log(output);
//     if (highScore < array[i]){
//       highScore = array[i];
//     }
//   }
//   return highScore;
//  }
// function  getBestResults(array, bestResult){
//   var bestSolutions = [];
//   for(var i = 0; i < array.length; i++){
//     if(array[i] == bestResult){
//       bestSolutions.push(i);
//     }
//   }
//   return bestSolutions;
// }
// highScore = printAndGetHighScore(bubbleSolution);
// console.log("Bubbles tests: " + bubbleSolution.length);
// bestSolutions = getBestResults(bubbleSolution, highScore);
// console.log("Highest bubble score: " + highScore);
// console.log("Solutions with the highest score: " + bestSolutions);
//
//
// function getMostCostEffectiveSolution(array, costs, bestResult){
//   var cost = 100;
//   var index;
//   for(var i = 0; i < array.length; i++){
//     if (array[i] == bestResult) {
//       if (cost > costs[i]) {
//         index = i;
//         cost = costs[i];
//       }
//     }
//   }
//   return index;
// }
// var lowerCost = getMostCostEffectiveSolution(bubbleSolution, costs, highScore);
// console.log("Самые низкие затраты у образца № " + lowerCost);


// OBJECTS

var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};
var bark;
if (dog.weight > 20) {
   bark = "WOOF WOOF";
} else {
   bark = "woof woof";
}
var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);
console.log(dog);
delete dog.age;
console.log(dog);
dog.age = 4;
console.log(dog);

// +++++++++++++++++++++++++

var taxi = {
    make:"Webville Motors",
    model:"Taxi",
    year:1955,
    color:"yellow",
    passengers:4,
    convertible:false,
    mileage:281341
};
var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color:"tan",
  passengers: 5,
  convertible: false,
  mileage:12845
};
var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

function prequal(car){
  if(car.mileage > 10000){
    return false;
  } else if(car.year > 1960){
    return false;
  }
  return true;
}

var worthALook = prequal(taxi);
if (worthALook){
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
     console.log("You should really pass on the " + taxi.make + " " + taxi.model);
  }
var worthALook = prequal(cadi);
if (worthALook){
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
     console.log("You should really pass on the " + taxi.make + " " + taxi.model);
  }
var worthALook = prequal(fiat);
if (worthALook){
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
     console.log("You should really pass on the " + taxi.make + " " + taxi.model);
  }
var worthALook = prequal(chevy);
if (worthALook){
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
     console.log("You should really pass on the " + taxi.make + " " + taxi.model);
  }


// ++++++++++++++++++++++++++++++++++++++++++++++

function getSecret(file, secretPassword){
  file.opened = file.opened + 1;
  if (secretPassword ==file.password){
    return file.contents;
  } else {
    return "Invalid password! No secret for you.";
  }
}
function setSecret(file,secretPassword, secret){
  if(secretPassword == file.password){
    file.opened = 0;
    file.contents = secret;
  }
}

var superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);
console.log(superSecretFile.contents);

// Генератор новых машин

function makeCar() {
       var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
       var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
       var years = [1955, 1957, 1948, 1954, 1961];
       var colors = ["red", "blue", "tan", "yellow", "white"];
       var convertible = [true, false];
       var rand1 = Math.floor(Math.random() * makes.length);
       var rand2 = Math.floor(Math.random() * models.length);
       var rand3 = Math.floor(Math.random() * years.length);
       var rand4 = Math.floor(Math.random() * colors.length);
       var rand5 = Math.floor(Math.random() * 5) + 1;
       var rand6 = Math.floor(Math.random() * 2);
       var car = {
           make: makes[rand1],
           model: models[rand2],
           year: years[rand3],
           color: colors[rand4],
           passengers: rand5,
           convertible: convertible[rand6],
           mileage: 0
       };
       return car;
   }
   function displayCar(car) {
       console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
   }
   var carToSell = makeCar();
   displayCar(carToSell);

// ++++++++++++++++++++++++++++++++++++++++++
//              Методы объекта.    This

// var fiat = {
//     make: "Fiat",
//     model: "500",
//     year: 1957,
//     color: "Medium Blue",
//     passengers: 2,
//     convertible: false,
//     mileage: 88000,
//     started: false,
//     start: function(){
//       this.started = true;
//     },
//     stop: function(){
//       this.started = false;
//     },
//     drive: function() {
//       if(this.started){
//          alert("Zoom zoom!");
//       } else {
//         alert("You need to start the engine first.");
//       }
//     }
// };
// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.stop();


// ++++++++++++++++++++++++++
// Код с ошибками (исправляем ошибки)

// var song = {
//     name: "Walk This Way",
//     artist: "Run-D.M.C.",
//     minutes: 4,
//     seconds: 3,
//     genre: "80s",
//     playing: false,
//     play: function() {
//       if(!this.playing){
//         this.playing = true;
//         console.log("Playing " + this.name + " by " + this.artist);
//       }
//     },
//     pause: function() {
//       if(this.playing){
//         this.playing = false;
//         console.log("Now nothing plays");
//       }
//     }
// };
// song.play();
// song.pause();


// ++++++++++++++++++++++++++++++++++++++++

var eightBall = { index: 0,
                  advice: ["yes", "no", "maybe", "not a chance"],
                  shake: function(){
                    this.index = this.index + 1;
                    if(this.index >= this.advice.length){
                      this.index = 0;
                    }
                  },
                  look: function(){
                    return this.advice[this.index];
                  }

};
eightBall.shake();
console.log(eightBall.look() );
eightBall.shake();
console.log(eightBall.look() );
eightBall.shake();
console.log(eightBall.look() );
eightBall.shake();
console.log(eightBall.look() );
eightBall.shake();
console.log(eightBall.look() );
eightBall.shake();
console.log(eightBall.look() );
eightBall.shake();
console.log(eightBall.look() );

// ++++++++++++++++++++++++++++++++++++

//
// var cadi = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892,
//     started: false,
//     start: function() {
//        this.started = true;
//     },
//     stop: function() {
//        this.started = false;
//     },
//     drive: function() {
//        if (this.started) {
//          alert(this.make + " " +
//                this.model + " goes zoom zoom!");
//        } else {
//          alert("You need to start the engine first.");
//        }
//     }
// };
//
// var chevy = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021,
//     started: false,
//     start: function() {
//        this.started = true;
//     },
//     stop: function() {
//        this.started = false;
//     },
//     drive: function() {
//        if (this.started) {
//          alert(this.make + " " +
//                this.model + " goes zoom zoom!");
//        } else {
//          alert("You need to start the engine first.");
//        }
//     }
// };
//
// var taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341,
//     started: false,
//     start: function() {
//        this.started = true;
//     },
//     stop: function() {
//        this.started = false;
//     },
//     drive: function() {
//        if (this.started) {
//          alert(this.make + " " +
//                this.model + " goes zoom zoom!");
//        } else {
//          alert("You need to start the engine first.");
//        }
//     }
// };
//
// cadi.start();
// cadi.drive();
// cadi.stop();
// chevy.start();
// chevy.drive();
// chevy.stop();
// taxi.start();
// taxi.drive();
// taxi.stop();

// ++++++++++++++++++++++++++++++++++

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 81341,
    started: false,
    fuel:0,
    start: function() {
       this.started = true;
    },
    stop: function() {
       this.started = false;
    },
    drive: function() {
       if (this.started) {
         if(this.fuel > 0){
          alert(this.make + " " +
                 this.model + " goes zoom zoom!");
          this.fuel = this.fuel - 1;
        } else{
          alert("Uh oh, out of fuel.");
          this.stop();
        }
       } else {
         alert("You need to start the engine first.");
       }
    },
    addFuel: function(amount){
      this.fuel = this.fuel + amount;
    }
};

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();
