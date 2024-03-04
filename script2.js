// /* 
// * unique name for id 
// * selecting the elements 
// * event listeners 
// * defining functions 
// * 
// */

let startStopButton = document.getElementById('timer-button');
let lapButton = document.getElementById('lap-button');
let resetButton = document.getElementById('reset-button');
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let lapsContainer = document.getElementById('laps-container');
let timerInterval;
let h = 0;
let m = 0;
let s = 0;
let lapCounter = 1;

startStopButton.addEventListener('click', toggleTimer);
lapButton.addEventListener('click', recordLap);
resetButton.addEventListener('click', resetTimer);

function toggleTimer() {
    if (startStopButton.textContent === 'Start') {
        startTimer();
        startStopButton.textContent = 'Stop';
        startStopButton.style.setProperty('background-color', 'red');
    } else {
        stopTimer();
        startStopButton.textContent = 'Start';
        startStopButton.style.setProperty('background-color', 'green');
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        updateTimerDisplay();
        s++;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    recordLap(); 
}

function updateTimerDisplay() {
    secondsElement.textContent = s.toString().padStart(2, '0');
    if (s >= 60) {
        s = 0;
        m++;
        minutesElement.textContent = m.toString().padStart(2, '0');
        if (m >= 60) {
            m = 0;
            h++;
            hoursElement.textContent = h.toString().padStart(2, '0');
        }
    }
}

function recordLap() {
    lapsContainer.innerHTML += `<p>Lap ${lapCounter}: ${hoursElement.textContent}:${minutesElement.textContent}:${secondsElement.textContent}</p>`;
    lapCounter++;
}

function resetTimer() {
    clearInterval(timerInterval);
    h = 0;
    m = 0;
    s = 0;
    lapCounter = 1;
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    lapsContainer.innerHTML = '';
}
