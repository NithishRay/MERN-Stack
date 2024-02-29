// /*
// *unique name for id
// * selecting the elementx
// * event listener
// * defining function
// * 
// */

let changedtext = document.getElementById('timer-button');
let hrelement = document.getElementById('hours');
let mnelement = document.getElementById('minutes');
let scelement = document.getElementById('seconds');
let reelement = document.getElementById('reset-button')
let timerInterval;
let h = 0;
let m = 0;
let s = 1;

changedtext.addEventListener('click', runTimer);
reelement.addEventListener('click',resetTimer);

function runTimer() {
    if (changedtext.textContent === 'Start') { 
        changedtext.textContent = 'Stop';
        changedtext.style.setProperty('background-color', 'red');
        startTimer();
    } else { 
        changedtext.textContent = 'Start';
        changedtext.style.setProperty('background-color', 'green');
        stopTimer();
    }
}

function startTimer() {
    timerInterval = setInterval(function() {    
        scelement.textContent = s.toString().padStart(2, '0');
        if (s >= 59) {
            s = 0;
            if (m >= 59) {
                m = 0;
                hrelement.textContent = h.toString().padStart(2, '0');
                ++h;
            } else {
                m++;
            }
        }
        mnelement.textContent = m.toString().padStart(2, '0');
        ++s;
    }, 1000);
}


function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(reelement);
    h = 0;
    m = 0;
    s = 0;
    hrelement.textContent = '00';
    mnelement.textContent = '00';
    scelement.textContent = '00';
}
