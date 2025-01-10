let [milliseconds, seconds, minutes, hours] = [0,0,0,0];

let timerDisplay = document.querySelector(".timer-display");
let pauseBtn = document.getElementById("pause-timer");
let startBtn = document.getElementById("start-timer");
let resetBtn = document.getElementById("reset-timer");

let timerId = null; //  Initially, no timer is running

startBtn.addEventListener('click' , function() {
  if(timerId !== null) {
    clearInterval(timerId);
  }
 timerId =  setInterval(startTimer, 10) ;
});

pauseBtn.addEventListener('click' , function() {
  clearInterval(timerId);
});

resetBtn.addEventListener('click' , function() {
  clearInterval(timerId);
  [milliseconds, seconds, minutes, hours] = [0,0,0,0]; //  Reset time values
  timerDisplay.innerHTML = `00 : 00 : 00 : 00`;
});


function startTimer() {
  milliseconds++;
  if(milliseconds == 100) {
    milliseconds = 0;
    seconds++;
    if(seconds == 60) {
      seconds = 0;
      minutes++;
      if(minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  // let millisecondsString;
  // if(milliseconds < 10) {
  //   millisecondsString = `0${milliseconds}`;
  // }
  // else {
  //   millisecondsString = milliseconds;
  // }

  let millisecondsString = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
  let secondsString = seconds < 10 ? `0${seconds}` : seconds;
  let minutesString = minutes < 10 ? `0${minutes}` : minutes;
  let hoursString = hours < 10 ? `0${hours}` : hours;

  timerDisplay.innerHTML = `${hoursString} : ${minutesString} : ${secondsString} : ${millisecondsString}`;

}