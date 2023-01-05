import { initialTime } from '../index.js';

const timeLine = document.querySelector('.quiz__timeline ');
const timeLineWidth = document.querySelector('.quiz__header').offsetWidth;
let counter;
let timeValue = null;

export function startTimeLine() {
  timeValue = 0;
  counter = setInterval(() => {
    ++timeValue;
    if (timeValue > initialTime * 100) {
      stopTimeLine();
      return;
    }

    frame(timeValue);
  }, 10);
}

export function stopTimeLine() {
  clearInterval(counter);
}

function frame(time) {
  timeLine.style.width = (time * timeLineWidth) / initialTime / 100 + 'px';
}
