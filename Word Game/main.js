const words = ["cat", "dog", "bat", "ant", "rat", "cup", "egg", "fly", "gun", "hat"];
const words2 = ["bird", "bear", "ball", "desk", "lamp", "book", "frog", "golf", "door", "star"];
const words3 = ["apple", "beach", "chess", "daisy", "eagle", "fairy", "grape", "hazel", "jelly", "karma"];
const words4 = ["banana", "church", "dragon", "flute", "guitar", "hammer", "island", "jungle", "kettle", "lemon"];
// Combine all the arrays into a single array
const combined123 = words.concat(words, words2, words3);
// Combine all the arrays into a single array
const combined1234 = words.concat(words,words2, words3, words4);

// Game Variables
let currentWordIndex = 0;
let score = 0;
let counter = 3;
let wordElement;
let interval;

// Function to start the game
function startGame() {
  wordElement = document.getElementById("word");
  interval = setInterval(dropWord, 5000);
  document.addEventListener("keydown", checkWord);
  const inputField = document.getElementById("input-field");
inputField.addEventListener("input", checkWord);
}

// Function to select a random word from the current array
function selectRandomWord() {
  let wordArray;

  if (score >= 0 && score <= 9) {
    wordArray = words;
  } else if (score >= 10 && score <= 19) {
    wordArray = words2;
  } else if (score >= 20 && score <= 29) {
    wordArray = words3;
  } else if (score >= 30 && score <= 39) {
    wordArray = words4;
  }
 else if (score >= 40 && score <= 49) {
    wordArray = combined123;
  }
 else if (score >= 50 && score <= 59) {
    wordArray = combined1234;
  }

  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}

// Function to drop a word from the top
function dropWord() {
    const word = selectRandomWord();
    wordElement.innerText = word;
    const container = document.getElementById("container");
    const containerWidth = container.offsetWidth;
    const wordWidth = wordElement.offsetWidth;
    const maxOffset = containerWidth - wordWidth;
    const randomOffset = Math.floor(Math.random() * maxOffset);
    wordElement.style.left = randomOffset + "px";
  
    let position = 0;
    const speed = 1; // Adjust this value to change the speed of the word drop
  
    const animateWord = () => {
      position += speed;
      wordElement.style.top = position + "px";
  
      if (position >= container.offsetHeight) {
        nextWord();
      } else {
        requestAnimationFrame(animateWord);
      }
    };
  
    animateWord();
  }

// Function to check the typed word
function checkWord(event) {
  if (event.keyCode === 13) {
    const typedWord = event.target.value.toLowerCase();
    const currentWord = wordElement.innerText.toLowerCase();

    if (typedWord === currentWord) {
      score++;
      if(score === 60){
        clearInterval(interval);
        gameOver();
      }
      updateScore();
      event.target.value = "";
      nextWord();
       // Clear the input field
    } else if(typedWord === null){
        counter--;
        updateLife();
        if (counter === 0) {
          clearInterval(interval);
          gameOver();
        }
    }
     else{
      event.target.value = ""; // Clear the input field
      counter--;
      updateLife();
      if (counter === 0) {
        clearInterval(interval);
        gameOver();
      }
    }
  }
}


// Function to update the score
function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = "Score: " + score;
}
function updateLife() {
    const scoreElement = document.getElementById("life");
    scoreElement.innerText = "Life: " + counter;
  }

// Function to move to the next word
function nextWord() {
    learInterval(interval);
    interval = setInterval(dropWord, 5000);

}

// Function to display game over
function gameOver() {
  const gameoverElement = document.getElementById("gameover");
  gameoverElement.style.display = "block";
}

// Start the game
startGame();