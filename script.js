var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var zero = document.getElementById('zero');

var startTimer;

var broi = 0;
var chas = 20;
var mejduchasie = 10;
var nachalenchas = 16;
var nachalenmin = 52;

setInterval(() => {
    var hours = new Date().getHours();
var minutes = new Date().getMinutes();
    if (hours == nachalenchas && minutes == nachalenmin) {
        if(startTimer === undefined){
            startTimer = setInterval(timer, 1000)
        } 
    } 

    if (broi == 1) {
        mejduchasie = 25;
    } else if (broi == 5) {
        mejduchasie = 5;
    } else mejduchasie = 10;
    
}, 1000);


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
            if (bs.innerText > 10) {
                
            }
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 0//chas;
        ws.innerText = chas;

        bm.innerText = 0//;
        bs.innerText = mejduchasie;

        document.getElementById('counter').innerText++;
        broi++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}