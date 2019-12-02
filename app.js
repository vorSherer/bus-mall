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
var voteRounds = 4;
var round = 1;

//Image Generation Constructor
function Picture (src, nom) {
  this.src = `./img/${src}.jpg`;
  this.title = nom;
  this.alt = nom;
  this.viewed = 0; //Tallies how many times a particular image was displayed
  this.clicked = 0; //Tallies how many times a particular image was clicked on.

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
  // console.log('pixArray length ', pixArray.length);
  // console.log('Index 1 = ', indexOne);
  photoOne.src = pixArray[indexOne].src;
  photoOne.title = pixArray[indexOne].title;
  photoOne.alt = pixArray[indexOne].alt;

  pixArray[indexOne].viewed ++; //Increments the this.viewed property for the first image

  var indexTwo = randomIndex(pixArray.length);

  while(indexTwo === indexOne) {
    indexTwo = randomIndex(pixArray.length);
  }

  photoTwo.src = pixArray[indexTwo].src;
  photoTwo.title = pixArray[indexTwo].title;
  photoTwo.alt = pixArray[indexTwo].alt;

  pixArray[indexTwo].viewed ++; //Increments the this.viewed property for the second image

  var indexThree = randomIndex(pixArray.length);

  while(indexThree === indexOne || indexThree === indexTwo) {
    indexThree = randomIndex(pixArray.length);
  }

  photoThree.src = pixArray[indexThree].src;
  photoThree.title = pixArray[indexThree].title;
  photoThree.alt = pixArray[indexThree].alt;

  pixArray[indexThree].viewed ++; //Increments the this.viewed property for the third image

  // console.log('indices', indexOne, indexTwo, indexThree);
  console.table(pixArray);
}

//Add an Event Handler
function handleClick(event) {
  console.log(event.target.title); //Cleaner console display
  var vote = event.target.title; //Creates a tally mechanism for the image that was clicked on.
  console.log(vote, ' was clicked.');
  for ( var i = 0; i < pixArray.length; i++ ) {
    if ( vote === pixArray[i].title) {
      pixArray[i].clicked ++;
      console.log('round ', round);
      round++;
    }
  }
  picSelect();
  // console.log('You clicked me!!');  //Proof of Life
  //Prove all pictures made it into the array
}


// //Major Functions
// Image Instantiator Function
function createOnPageLoad() {
  new Picture ('bag', 'R2-D2 Roller Luggage');
  new Picture ('banana', 'Banana Slicer');
  new Picture ('bathroom', 'Toilet Paper and Tablet Holder');
  new Picture ('boots', 'Open-toed Wellies');
  new Picture ('breakfast', 'Breakfast Station');
  new Picture ('bubblegum', 'Meatball Bubblegum');
  new Picture ('chair', 'Camel-seat Chair');
  new Picture ('cthulhu', 'Cthulhu Action Figure');
  new Picture ('dog-duck', 'Doggie Duck Muzzle');
  new Picture ('dragon', 'Canned Dragon Meat');
  new Picture ('pen', 'Plasticware Pen Toppers');
  new Picture ('pet-sweep', 'Pet Duster Boots');
  new Picture ('scissors', 'Pizza Scissors');
  new Picture ('shark', 'Shark Sleeping bag');
  new Picture ('sweep', 'Baby Creeper Sweeper');
  new Picture ('tauntaun', 'Star Wars Tauntaun Sleeping Bag');
  new Picture ('unicorn', 'Canned Unicorn Meat');
  new Picture ('usb', 'USB Tentacle');
  new Picture ('water-can', 'Recursive Water Can');
  new Picture ('wine-glass', 'Wine Sniffer Snifter');
}

//Function Calls
createOnPageLoad();

//Add an Event Listener
//Wrap the event Listener in a function that limits its use to the number of voting rounds specified by the user
// while (+round < +voteRounds) {
  photoBin.addEventListener('click', handleClick);
// } else {
//   finalTally();
// }

//Generate Image set
picSelect();
