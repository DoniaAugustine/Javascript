// Array of image URLs
const images = [
    "apple.png",
    "eggImg.jpeg",
    "irritated.jpeg",
    "orange.png",
    "Pineapple.jpeg",
    "smile.png",
    "wink.jpeg",
    "tasty.jpeg"
  ];
  
  // Global variables
  let tiles = [];
  let flippedTiles = [];
  let matchedTiles = [];
  let clicks = 0;
  let timer;
  let seconds = 0;
  
  // Shuffle function to randomize the image order
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Function to start the game
  function startGame() {
   // startTimer();
    // Reset variables and UI
    clearInterval(timer);
    tiles = [];
    flippedTiles = [];
    matchedTiles = [];
    clicks = 0;
    seconds = 0;
    document.getElementById("clicks").textContent = "0";
    document.getElementById("timer").textContent = "0";
  
    // Shuffle the images and select 8 unique ones
    const shuffledImages = shuffle(images);
    const selectedImages = shuffledImages.slice(0, 8);
    const duplicatedImages = [...selectedImages, ...selectedImages];
  
    // Shuffle the duplicated images again
    const shuffledDuplicatedImages = shuffle(duplicatedImages);
  
    // Generate the game board HTML
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";
  
    for (let i = 0; i < 4; i++) {
      const row = document.createElement("tr");
  
      for (let j = 0; j < 4; j++) {
        const cell = document.createElement("td");
        const tile = document.createElement("div");
        tile.classList.add("tile");
  
        const image = document.createElement("img");
        image.src = shuffledDuplicatedImages[i * 4 + j];
        image.classList.add("hidden");
  
        tile.appendChild(image);
        cell.appendChild(tile);
        row.appendChild(cell);
        tiles.push(tile);
      }
  
      gameBoard.appendChild(row);
    }
  
    // Attach click event listeners to the tiles
    tiles.forEach((tile) => {
      tile.addEventListener("click", flipTile);
    });
  
    // Start the timer
    timer = setInterval(updateTimer, 1000);
  }
  
  // Function to flip a tile
  function flipTile() {
    // Prevent flipping more than 2 tiles at a time
    if (flippedTiles.length >= 2) return;
  
    // Start the timer on the first click
    if (clicks === 0) {
      timer = setInterval(updateTimer, 1000);
    }
  
    this.classList.add("flipped");
    const image = this.querySelector("img");
    image.classList.remove("hidden");
  
    flippedTiles.push(this);
  
    if (flippedTiles.length === 2) {
      const firstImage = flippedTiles[0].querySelector("img").src;
      const secondImage = flippedTiles[1].querySelector("img").src;
      clicks++;
  
      if (firstImage === secondImage) {
        matchedTiles.push(flippedTiles[0]);
        matchedTiles.push(flippedTiles[1]);
        flippedTiles = [];
  
        // Check if all tiles are matched
        if (matchedTiles.length === tiles.length) {
          clearInterval(timer);
          alert("Congratulations! You won the game!");
        }
      } else {
        setTimeout(() => {
          flippedTiles.forEach((tile) => {
            tile.classList.remove("flipped");
            const image = tile.querySelector("img");
            image.classList.add("hidden");
          });
          flippedTiles = [];
        }, 1000);
      }
  
      document.getElementById("clicks").textContent = clicks;
    }
  }
  
  // Function to update the timer
  function updateTimer() {
    seconds++;
    document.getElementById("timer").textContent = seconds;
  }
  
  // Attach click event listener to the start button
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", startGame);
  

  // function startTimer() {
  //   var timerElement = document.getElementById("timer");
  //   var seconds = 0;
  //   var timerInterval = setInterval(function() {
  //     seconds++;
  //     timerElement.textContent = "Timer: " + seconds + " seconds";
  //   }, 1000);
  // }
  