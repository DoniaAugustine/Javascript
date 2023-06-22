
expand();


function expand()
{
    var w = 50;
    var h = 50;
    var foo = setInterval(function () 
    {
        if(w==500)
        {
            compress();
            
        }
        if(w>500) cancelInterval(foo)
       
        w = w + 5;
        h = h + 5;
        document.getElementById('box').style.width = w + 'px';
        document.getElementById('box').style.height = h + 'px';
        document.getElementById('box').style.background = getRandomColor();

        

    }, 1000);    
    
}






function compress()
{
    var w = 500;
    var h = 500;
    var foo = setInterval(function () 
    {
        if(w==50)
        {
            expand();
            getRandomColor();
        }

        if(w<50) cancelInterval(foo)

        w = w - 5;
        h = h - 5;
        document.getElementById('box').style.width = w + 'px';
        document.getElementById('box').style.height = h + 'px';
        document.getElementById('box').style.background = getRandomColor();


       



    }, 1000);
}



function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//compress();