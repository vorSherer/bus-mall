'use strict';

//Add the project requirements as comment lines, to be replaced by code later.

//Start with Proof of Life
// console.log('Proof of Life');

//Global variables
var photoOne = document.getElementById('photo1');
var photoTwo = document.getElementById('photo2');
var photoThree = document.getElementById('photo3');
var photoBin = document.getElementById('photoBin');
var pixArray = [];

//Image Constructor
function Picture (src, nom) {
  this.src = `./img/${src}.jpg`;
  this.title = nom;
  this.alt = nom;
  this.viewed = 0;
  this.clicked = 0;

  pixArray.push(this);
}

//Helper functions

//Random Index Generator function
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Image Generator Engine, displaying non-matching images
function picSelect() {
  var indexOne = randomIndex(pixArray.length);

  photoOne.src = pixArray[indexOne].src;
  photoOne.title = pixArray[indexOne].title;
  photoOne.alt = pixArray[indexOne].alt;

  var indexTwo = randomIndex(pixArray.length);

  while(indexTwo === indexOne);
  indexTwo = randomIndex(pixArray.length);

  photoTwo.src = pixArray[indexTwo].src;
  photoTwo.title = pixArray[indexTwo].title;
  photoTwo.alt = pixArray[indexTwo].alt;

  var indexThree = randomIndex(pixArray.length);

  while(indexThree === indexOne || indexThree === indexTwo);
  indexThree = randomIndex(pixArray.length);

  photoThree.src = pixArray[indexThree].src;
  photoThree.title = pixArray[indexThree].title;
  photoThree.alt = pixArray[indexThree].alt;

  console.log('indices', indexOne, indexTwo, indexThree);
}

//Major Functions

function createOnPageLoad() {
  new Picture ('bag', 'R2-D2 Roller Luggage');
  new Picture ('banana', 'Banana Slicer');
  new Picture ('bathroom', 'Bathroom Tablet Holder');
  new Picture ('boots', 'Open-toed Wellies');
  // new Picture ('breakfast', 'Breakfast Station');
  // new Picture ('bubblegum', 'Meatball Bubblegum');
  // new Picture ('chair', 'Camel-seat Chair');
  // new Picture ('cthulu', 'Cthulu Doll');
  // new Picture ('dog-duck', 'Dog Duck Muzzle');
  // new Picture ('dragon', 'Canned Dragon Meat');
  // new Picture ('pen', 'Plasticware Pen Toppers');
  // new Picture ('pet-sweep', 'Pet Duster Boots');
  // new Picture ('scissors', 'Pizza Scissors');
  // new Picture ('shark', 'Shark Sleepingbag');
  // new Picture ('sweep', 'Baby Creeper Sweeper');
  // new Picture ('tauntaun', 'Star Wars Tauntaun Sleeping Bag');
  // new Picture ('unicorn', 'Canned Unicorn Meat');
  // new Picture ('usb', 'Tentacle USB Drive');
  // new Picture ('water-can', 'Recursive Water Can');
  // new Picture ('wine-glass', 'Wine Siffer Snifter');

}

//Function Calls
createOnPageLoad();

//Add an Event Listener
photoBin.addEventListener('click', handleClick);

//Generate Image set
picSelect();

//Prove all pictures made it into the array
console.table(pixArray);

