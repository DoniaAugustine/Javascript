
function Countdowntimer() 
{
    var timeleft = 10.0;
    var downloadTimer = setInterval(function(){
    timeleft=timeleft-0.001;
    document.getElementById("counttimer").textContent = timeleft.toFixed(2);
    if(timeleft.toFixed(1) == 0.0)
    {
        
        Countuptimer();
    }
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);  
}


function Countuptimer()
{
    var timeleft = 0.0;
    var downloadTimer = setInterval(function(){
    timeleft=timeleft+0.001;
    document.getElementById("counttimer").textContent = timeleft.toFixed(2);
    if(timeleft.toFixed(1) == 10.0)
    {
    Countdowntimer();
    }
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
    
}



Countdowntimer();





