/*
TODO : create prototype move function to just copy the node
      and blank the letter, then appear in the word box
*/

console.log("File hangmanLetters.js loaded successfully");

function populateWordBox(word) {
  // from array of possible words, select random index
  // parse selected word into character array
  // ***** TODO: create function(s) to load text file and select a word

  for (letter of word) {
    // for each letter, create a span element with class='letterX' (e.g. letterA, letterB)
    newNode = document.createElement("SPAN");
    newNode.classList.add("word");
    letter = letter.toUpperCase();
    // console.log("letter: " + letter);

    if (letter.match(/\s/)) { // whitespace
      newNode.classList.add("letterWhitespace");
      newNode.innerHTML = ' ';
    } else if (letter.match(/[A-Za-z]/)) { // letter
      newNode.classList.add("letter" + letter);
      newNode.innerHTML = '__';
    }

    // and '_' as their innerHTML 
    // with whitespace left as whitespace
    wordBox.appendChild(newNode);
  }
}

function select(event) {
  // set position to absolute
  // left/right 

  // collect object clicked on
  let e = event.currentTarget;
  e.removeEventListener("click", select);
  console.log("e.innerhHTML: " + e.innerHTML);
  // check if letter in word
  if (word.search(e.innerHTML) == -1) { // letter NOT in word: add to movesLeft counter

  } else { // letter in word: move letter, place in answer word(s)
    let clone = e.cloneNode(true);
    clone.style.left = e.style.left;
    clone.style.top = e.style.top;
  }
  e.innerHTML = ' ';
}

function reset() {
  let allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let letters = document.getElementsByClassName("letter");
  // add the letter and event listener to each element
  for (var i = 0; i < allLetters.length; i++) {
    letters[i].innerHTML = allLetters[i];
    letters[i].addEventListener("click", select);
  }
  // TODO:  select new random word/phrase
  //        reset image
}



reset();

var wordBox = document.getElementById("wordBox");
wordBox.firstElementChild.remove(); // remove error message from page upon loading js file

var word = "word and another word";
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("rotate").addEventListener("click", getNextImage);

populateWordBox(word);
