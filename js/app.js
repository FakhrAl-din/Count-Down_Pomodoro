const progressCircle = document.querySelector('.progress-circle')
const minutes = document.querySelector('#minutes')
const second = document.querySelector('#second')
const btns = document.querySelector('.btns');
const timeIndex1 = document.querySelector('.timeIndex1')
const removeAbleH3 = document.querySelector('.h3')

let interval;



function startFunc() {
    let sec = 60;
    let min = 25;


    interval = setInterval(() => {
        if (sec === 0 && min === 0) {
            clearInterval(interval);
            progressCircle.classList.remove('animate');

            return;
        }

        sec--;
        if (sec < 0) {
            sec = 59;


            if (min > 0) {
                min--;
                if (min < 1) {
                    progressCircle.classList.add('animate');
                }
            }
        }

        if (min === 0) {
            minutes.style.display = 'none';
            timeIndex1.style.display = 'none'
            removeAbleH3.style.display = 'none'
        }
        else {
            minutes.style.display = 'inline';
            timeIndex1.style.display = 'inline'
            removeAbleH3.style.display = 'inline'
        }

        let minDisplay = min < 10 ? `0${min}` : min;
        let sec_Display = sec < 10 ? `0${sec}` : sec;
        minutes.textContent = minDisplay;
        second.textContent = sec_Display;
    }, 1000);
}

function resetFunc() {
    clearInterval(interval)
    minutes.textContent = `00`
    second.textContent = `00`
    progressCircle.classList.remove('animate');
}

btns.addEventListener('click', (e) => {

    if (e.target && e.target.tagName == 'BUTTON') {
        let button = e.target;

        if (button.classList.contains('start')) {
            startFunc()
        }
        if (button.classList.contains('reset')) {
            resetFunc()
        }
    }
})


