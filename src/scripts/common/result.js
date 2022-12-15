import { questions } from './questions.js';

const resultText = [
  `and congrats! ${String.fromCodePoint(0x1f60e)}, You got`,
  `and nice ${String.fromCodePoint(0x1f609)}, You got`,
  `and sorry ${String.fromCodePoint(0x1f622)}, You got only`,
];

const resultTextBox = document.querySelector('.result__score');

export function renderResults(score) {
  const scoreInPercent = Math.floor((score * 100) / questions.length);
  let message = '';
  if (scoreInPercent > 75) {
    message += resultText[0];
  } else if (scoreInPercent > 40) {
    message += resultText[1];
  } else {
    message += resultText[2];
  }

  message += ` ${score}  out of ${questions.length}`;

  resultTextBox.textContent = message;
}
