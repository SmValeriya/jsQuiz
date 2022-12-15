const timeLine = document.querySelector('.quiz__timeline ');
const timeLineWidth = document.querySelector('.quiz__header').offsetWidth;
let counter;
const totalTime = 15;
export let timeValue = null;

export function startTimeLine() {
  timeValue = 0;
  counter = setInterval(() => {
    ++timeValue;
    if (timeValue > totalTime * 100) {
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
  timeLine.style.width = (time * timeLineWidth) / totalTime / 100 + 'px';
}
