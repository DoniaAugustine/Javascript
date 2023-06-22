(function() {
    'use strict'
    // your code will start here...
    console.log('main.js loaded');
    paper.install(window);
   paper.setup(document.getElementById('mainCanvas'));


   
   
   /* random radius generation */
   function generateRandom(min, max)
   {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
   }
   console.log(generateRandom());




/* random color generation */
   const randomColors = (colorArray) => {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
  };
  
  // only these colors are allowed
  const colors = ['pink', 'orange', 'yellow', 'purple', 'green'];
  
  // get a random color from the array
  console.log(randomColors(colors));





var tool = new Tool();
    tool.onMouseDown = function(event) 
    {
        let minlimit = 5, maxlimit = 25;
        let randomradius = generateRandom(minlimit,maxlimit);
        let randomcolor = randomColors(colors);
        
        var c = Shape.Circle(event.point, randomradius);
     c.fillColor = randomcolor;
    };

    paper.view.draw();
 // ...and end here
}())