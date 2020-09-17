console.log("File hangmanAnimations.js successfully loaded");

function getNextImage(event) {
    let oldImage = document.getElementById("imgHangman");
    let source = oldImage.getAttribute("src"); // retrieve file name
    let newImage = oldImage.cloneNode(false); // copy old node
    let newNumber = source.match(/\d/)[0]; // retrieve digit from image source file name
    
    // increment the file number from 0 - 6
    if (newNumber == 6) { // end of counter
      // game over!
      newNumber = 0; // FOR TESTING PURPOSES, reset counter
    } else {
      newNumber++;
    }
    source = "img/hangman" + newNumber + ".png"; // update source file name

    newImage.setAttribute("src", source); // set clone image source to new image

    fadeReplace(oldImage, newImage);
  }

  function fadeReplace (oldElement, newElement) {
    oldElement.insertAdjacentElement('beforebegin', newElement);
    oldElement.classList.toggle('fade');
    window.setTimeout(function () {oldElement.remove() }, 3000);
  }