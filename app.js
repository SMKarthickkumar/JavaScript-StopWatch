

let count = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = 0;
let timerRunning = false;

// set timer

let startTimer = () => {
    count++;

    minutes =Math.floor((count/100)/60);
	seconds = Math.floor((count/100) - (minutes*60));
	milliseconds = Math.floor(count-(seconds*100) - (minutes*6000));

    document.querySelector("#minutes").innerText = leadingZero(minutes);
    document.querySelector("#seconds").innerText = leadingZero(seconds);
    document.querySelector("#m-seconds").innerText = leadingZero(milliseconds);
}


//leading zero

let leadingZero = (time) => {
	if(time <= 9) {
		return "0" + time;
	}
	else {
		return time;
	}
}


//start button
let startbutton = document.querySelector("#start-btn");
startbutton.addEventListener('click', function() {
    if(!timerRunning) {
    interval = setInterval(startTimer, 10);
    }
});


// stop button
let stopbutton = document.querySelector("#stop-btn");
stopbutton.addEventListener('click', function() {
    clearInterval(interval);
});

//Reset button
 let resetbutton = document.querySelector("#reset-btn");
 resetbutton.addEventListener('click', function() {
    clearInterval(interval);
    count = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    interval = 0;
    timerRunning = false;
    
    document.querySelector("#minutes").innerText = '00';
    document.querySelector("#seconds").innerText = '00';
    document.querySelector("#m-seconds").innerText = '00';
 });
