"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Gary Hembree
      Date:   5-8-25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
//Part 3
function timer(min, sec) {
     this.min = min
     this.sec = sec
}

timer.minutes = min
timer.seconds = sec
timer.timeID = null
//Part 4
timer.prototype.runPause(timer, minBox, secBox) = function (){
      //Part 5
      if (timer.timedID = timer.timedID.value) {
            window.clearInterval(timer.timeID)
            timer.timeID = null
      }
      else {
            window.setInterval(timer)
            countdown() = 1000
      }
      //Part 6
      if (timer.seconds > 0) {
            timer.seconds - 1
      }
      else if (timer.minutes > 0) {
            timer.minutes - 1
            timer.seconds = 59
      }
      else {
            window.clearInterval(timer.timeID)
            timer.timeID = null
      }
      timer.minutes = minBox.value
      timer.seconds = secBox.value
}


/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

//Part 7
let myTimer = new timer(minBox.value, secBox.value)
//Part 8
minBox.onchange = function() {
      myTimer.minutes = minBox.value
}
secBox.onchange = function() {
      myTimer.seconds = secBox.value
}
//Part 9
runPauseTimer.onclick = function() {
      runPause(myTimer, minBox, secBox) = myTimer
}