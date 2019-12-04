'use strict';

//Add the project requirements as comment lines, to be replaced by code later.

//Start with Proof of Life
// console.log('Proof of Life');

//Global variables
var photoOne = document.getElementById('photo1');
var photoTwo = document.getElementById('photo2');
var photoThree = document.getElementById('photo3');
var photoBin = document.getElementById('photoBin');
var marketBlurb = document.getElementById('verbage')
var resultsSection = document.getElementById('list');
var pixArray = [];
var picArrayContainers = [photoOne, photoTwo, photoThree];
var voteRounds = 25;

//Image Generation Constructor
function Picture(src, nom) {
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
  var currentImages = [];
  for (var i = 0; i < picArrayContainers.length; i++) {
    var currentRandomIndex = randomIndex(pixArray.length);
    // console.log('outside while', currentRandomIndex);
    while (currentImages.includes(currentRandomIndex)) {
      // console.log('inside while', currentRandomIndex);
      currentRandomIndex = randomIndex(pixArray.length);
      // console.log('new random inside while', currentRandomIndex);
      // console.log(currentImages);
    }
    currentImages.push(currentRandomIndex);
    // console.log(currentImages);
    picArrayContainers[i].src = pixArray[currentRandomIndex].src;
    picArrayContainers[i].title = pixArray[currentRandomIndex].title;
    picArrayContainers[i].alt = pixArray[currentRandomIndex].alt;
    pixArray[currentRandomIndex].viewed++;
  }
  // console.table(pixArray);
}

//Add an Event Handler
function handleClick(event) {
  voteRounds--;
  if (voteRounds !== 0) {
    console.log(event.target.title); //Cleaner console display
    var vote = event.target.title; //Creates a tally mechanism for the image that was clicked on.
    console.log(vote, ' was clicked.');
    for (var i = 0; i < pixArray.length; i++) {
      if (vote === pixArray[i].title) {
        pixArray[i].clicked++;
      }
    }
    picSelect();
    // console.log('You clicked me!!');  //Proof of Life
    //Prove all pictures made it into the array
  } else {
    photoBin.removeEventListener('click', handleClick);
    // console.log('i stopped');
    analysis();
    hide(photoBin);
    hide(marketBlurb);
  }
}

// Show an element
function show(elem) {
  elem.style.display = 'block';
}

// Hide an element
function hide(elem) {
  elem.style.display = 'none';
}

function analysis() {
  var ulEl = document.createElement('ul');
  for (var i = 0; i < pixArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${pixArray[i].title}: ${pixArray[i].clicked} clicks & ${pixArray[i].viewed} views`;
    ulEl.appendChild(liEl);
  }
  resultsSection.appendChild(ulEl);
}

// //Major Functions
// Image Instantiator Function
function createOnPageLoad() {
  new Picture('bag', 'R2-D2 Roller Luggage');
  new Picture('banana', 'Banana Slicer');
  new Picture('bathroom', 'Toilet Paper and Tablet Holder');
  new Picture('boots', 'Open-toed Wellies');
  new Picture('breakfast', 'Breakfast Station');
  new Picture('bubblegum', 'Meatball Bubblegum');
  new Picture('chair', 'Camel-seat Chair');
  new Picture('cthulhu', 'Cthulhu Action Figure');
  new Picture('dog-duck', 'Doggie Duck Muzzle');
  new Picture('dragon', 'Canned Dragon Meat');
  new Picture('pen', 'Plasticware Pen Toppers');
  new Picture('pet-sweep', 'Pet Duster Boots');
  new Picture('scissors', 'Pizza Scissors');
  new Picture('shark', 'Shark Sleeping bag');
  new Picture('sweep', 'Baby Creeper Sweeper');
  new Picture('tauntaun', 'Star Wars Tauntaun Sleeping Bag');
  new Picture('unicorn', 'Canned Unicorn Meat');
  new Picture('usb', 'USB Tentacle');
  new Picture('water-can', 'Recursive Water Can');
  new Picture('wine-glass', 'Wine Sniffer Snifter');
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
