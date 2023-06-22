
    function getRandomColor() 
    {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function createSquare() 
    {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.backgroundColor = getRandomColor(); 
      square.style.left = Math.random() * (window.innerWidth - 50) + "px";
      square.style.top = "-50px";
      document.getElementById("container").appendChild(square);

      setTimeout(() => 
      {
        square.style.top = window.innerHeight + "px";
        setTimeout(() => {
          square.remove();
          createSquare();
        }, 1000);
      }, 10);
    }

    window.onload = function() {
      createSquare();
    };
