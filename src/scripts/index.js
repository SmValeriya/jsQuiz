import { initializeTheme, toggleTheme } from './common/theme.js';
import {
  questionIndex,
  initializeQuiz,
  showNextQuestion,
  showQuestionResult,
  rightAnswersCount,
} from './common/quiz.js';
import { renderResults } from './common/result.js';
import { questions } from './common/questions.js';
import { startTimer, stopTimer } from './common/timer.js';
import { startTimeLine, stopTimeLine } from './common/timeLine.js';

const greetingBox = document.querySelector('.greeting');
const infoBox = document.querySelector('.info');
const quizBox = document.querySelector('.quiz');
const resultBox = document.querySelector('.result');
export const initialTime = 15;

document.addEventListener('DOMContentLoaded', function () {
  initializeTheme();
  document.addEventListener('click', function (e) {
    if (e.target.closest('.mode')) {
      toggleTheme();
    }
  });

  greetingBox.addEventListener('click', function (e) {
    if (e.target.closest('.greeting__btn')) {
      greetingBox.classList.remove('active');
      infoBox.classList.add('active');
    }
  });

  infoBox.addEventListener('click', function (e) {
    if (e.target.closest('.info__btn-quit')) {
      infoBox.classList.remove('active');
      greetingBox.classList.add('active');
    }

    if (e.target.closest('.info__btn-start')) {
      infoBox.classList.remove('active');
      quizBox.classList.add('active');
      initializeQuiz();
      startTimer();
      startTimeLine();
    }
  });

  quizBox.addEventListener('click', function (e) {
    if (
      e.target.closest('.quiz__btn-next') &&
      questions.length - 1 > questionIndex
    ) {
      stopTimer();
      stopTimeLine();
      showNextQuestion();
      startTimer();
      startTimeLine();
    }

    if (e.target.closest('.quiz__ans-list-item')) {
      stopTimer();
      stopTimeLine();
      showQuestionResult(e.target);
    }

    if (e.target.closest('.quiz__btn-result')) {
      quizBox.classList.remove('active');
      renderResults(rightAnswersCount);
      resultBox.classList.add('active');
    }
  });

  resultBox.addEventListener('click', function (e) {
    if (e.target.closest('.result__btn-quit')) {
      resultBox.classList.remove('active');
      greetingBox.classList.add('active');
    }

    if (e.target.closest('.result__btn-start')) {
      resultBox.classList.remove('active');
      quizBox.classList.add('active');
      initializeQuiz();
      startTimer();
      startTimeLine();
    }
  });
});

document.addEventListener('timeup', function () {
  showQuestionResult(null);
});
