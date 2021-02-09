
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');


function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}



var inputWorkMinute = document.getElementById("input_work_minutes").value;
var inputWorkSeconds = document.getElementById("input_work_seconds").value;
var inputBreakMinute = document.getElementById("input_break_minutes").value;
var inputBreakSeconds = document.getElementById("input_break_seconds").value;

var submitTime = document.getElementById("submit_times");

document.getElementById('w_minutes').innerText = inputWorkMinute;
document.getElementById('w_seconds').innerText = inputWorkSeconds;
document.getElementById('b_minutes').innerText = inputBreakMinute;
document.getElementById('b_seconds').innerText = inputBreakSeconds;


//store a reference to a timer variable
var startTimer;
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = inputWorkMinute;
    ws.innerText = inputWorkSeconds;

    bm.innerText = inputBreakMinute;
    bs.innerText = inputBreakSeconds;

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})


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
      } else if(bm.innerText != 0 && bs.innerText == 0){
          bs.innerText = 59;
          bm.innerText--;
      }
  }

  //Increment Counter by one if one full cycle is completed
  if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
    document.getElementById('w_minutes').innerText = inputWorkMinute;
    document.getElementById('w_seconds').innerText = inputWorkSeconds;
    document.getElementById('b_minutes').innerText = inputBreakMinute;
    document.getElementById('b_seconds').innerText = inputBreakSeconds;

    document.getElementById('counter').innerText++;

  }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}



