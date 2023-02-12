const wm = document.getElementById('w_minutes');
const ws = document.getElementById('w_seconds');
const bm = document.getElementById('b_minutes');
const bs = document.getElementById('b_seconds');
const mejdu = document.querySelector('#break-timer');
const chasie = document.querySelector('#work-timer');
const bszero = document.querySelector('#bs_zero');
const wszero = document.querySelector('#ws_zero');
const bmzero = document.querySelector('#bm_zero');
const wmzero = document.querySelector('#wm_zero');
const info = document.querySelector("#info1");

var startTimer;

var chas = 40;
var mejduchasie = 10;
var broi = 0;

var testsame;

const chasove_c = [7, 8, 9, 10, 11, 11, 12, 13];
const chasove_m = [30, 20, 10, 15, 5, 55, 40, 30];
const mejduchasiq = [10, 10, 25, 10, 10, 5, 10];

mejdu.style.display = "none";
wmzero.style.display = "none";
bmzero.style.display = "none";
wszero.style.display = "none";
bszero.style.display = "none";

wm.innerText = 0;
ws.innerText = chas;
bm.innerText = 0;
bs.innerText = mejduchasiq[broi];

setInterval(() => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    if (hours == chasove_c[broi] && minutes == chasove_m[broi]) {
        if(startTimer === undefined){
            startTimer = setInterval(timer, 1000)
        } 
    } 

    for (let i = 0; i < chasove_m.length; i++) {
        if (chasove_c[i] === hours && chasove_m[i] === minutes && broi != i) {
            broi = i;
            bs.innerText = mejduchasiq[broi];
            break;
        }
    }

    if(ws.innerText < 10){
        wszero.style.display = "initial";
    } else wszero.style.display = "none";
    if(bs.innerText < 10){
        bszero.style.display = "initial";
    } else bszero.style.display = "none";
    if(wm.innerText < 10){
        wmzero.style.display = "initial";
    } else wmzero.style.display = "none";
    if(bm.innerText < 10){
        bmzero.style.display = "initial";
    } else bmzero.style.display = "none";

}, 1);

//Start Timer Function
function timer(){

    document.getElementById('counter').innerText = broi;

    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;       
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--; 
    } 
    if(wm.innerText == 0 && (ws.innerText ==  0 || ws.innerText == 0 )) {  
        mejdu.style.display = "initial";
    }
    if(bm.innerText == 0 && (bs.innerText == 1 || bs.innerText == 0 )) {  
        mejdu.style.display = "none";
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){       
        if(bs.innerText != 0){
            bs.innerText--;       
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    if (mejdu.style.display == "none") {
        chasie.style.display = "initial";
    } else chasie.style.display = "none";

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){       
        broi++;

        wm.innerText = chas;
        ws.innerText = 0;

        bm.innerText = mejduchasiq[broi];
        bs.innerText = 0;     
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}