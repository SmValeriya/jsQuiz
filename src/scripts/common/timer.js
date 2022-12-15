const timeCount = document.querySelector('.timer__time');
let counter;
const initialTime = 15;
const event = new Event('timeup');
const timerTextBox = document.querySelector('.timer__text');
export let timeValue = null;

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
