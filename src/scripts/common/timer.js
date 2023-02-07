import { initialTime } from '../index.js';

const timeCount = document.querySelector('.timer__time');
const event = new Event('timeup');
const timerTextBox = document.querySelector('.timer__text');
const timeLine = document.querySelector('.quiz__timeline ');
const timeLineWidth = document.querySelector('.quiz__header').offsetWidth;
let counter;
let timeValue = null;
let counterTime = null;

export function startTimer() {
  timerTextBox.textContent = 'Time Left';
  timeValue = initialTime;
  timeCount.textContent = timeValue;
  counterTime = initialTime * 100;
  counter = setInterval(() => {
    --counterTime;
    if (counterTime % 100 === 0) {
      --timeValue;
      let time = timeValue;
      if (timeValue < 10) {
        time = '0' + timeValue;
      }

      timer(time);
    }

    frame(counterTime);
    if (timeValue === 0) {
      timerTextBox.textContent = 'Time Off';
      stopTimer();
      document.dispatchEvent(event);
    }
  }, 10);
}

export function stopTimer() {
  clearInterval(counter);
}

function timer(time) {
  timeCount.textContent = time;
}

function frame(time) {
  timeLine.style.width =
    ((initialTime * 100 - time) * timeLineWidth) / initialTime / 100 + 'px';
}
