import { initialTime } from '../index.js';

const timeCount = document.querySelector('.timer__time');
const event = new Event('timeup');
const timerTextBox = document.querySelector('.timer__text');
let counter;
let timeValue = null;

export function startTimer() {
  timerTextBox.textContent = 'Time Left';
  timeValue = initialTime;
  timeCount.textContent = timeValue;
  counter = setInterval(() => {
    --timeValue;
    let time = timeValue;
    if (timeValue < 10) {
      time = '0' + timeValue;
    }

    timer(time);

    if (timeValue === 0) {
      timerTextBox.textContent = 'Time Off';
      stopTimer();
      document.dispatchEvent(event);
    }
  }, 1000);
}

export function stopTimer() {
  clearInterval(counter);
}

function timer(time) {
  timeCount.textContent = time;
}
