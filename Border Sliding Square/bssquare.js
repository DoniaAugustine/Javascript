
var rotationCount = 0;

function Count() {
  rotationCount++;
  document.getElementById("counttimer").textContent = rotationCount;
}

  
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function moveSquare() {
    var container = document.getElementById("container");
    var square = document.createElement("div");
    square.className = "square";
  
    var maxX = window.innerWidth - 70;
    var maxY = window.innerHeight - 70;
  
    var positions = [
      { top: 0, left: 0 },
      { top: 0, left: maxX },
      { top: maxY, left: maxX },
      { top: maxY, left: 0 },
      { top: 0, left: 0 },
    ];
  
    var reversePositions = positions.slice().reverse();
    positions = positions.concat(reversePositions);
  
    var currentRotation = 0;
   // var rotationStep = 1;
  
    var interval = setInterval(function () {
      var position = positions.shift();
      positions.push(position);
  
      square.style.left = position.left + "px";
      square.style.top = position.top + "px";
      square.style.backgroundColor = getRandomColor();
  
      //currentRotation += rotationStep;
      //square.style.transform = "rotate(" + currentRotation + "deg)";
  
      if (positions.length === 0) {
        clearInterval(interval);
        container.removeChild(square);
        Count();
        setTimeout(moveSquare, 1000);
      }
    }, 2000);
  
    container.appendChild(square);
  }
  
  window.onload = function () {
    moveSquare();
  };
  