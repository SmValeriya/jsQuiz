import { questions } from './questions.js';

const quizBox = document.querySelector('.quiz');
let shuffledQuestions = [];
const nextBtn = quizBox.querySelector('.quiz__btn-next');
export let rightAnswersCount = 0;
export let questionIndex;

export function initializeQuiz() {
  const quizCountBox = quizBox.querySelector('.quiz__que-count');

  questionIndex = 0;
  rightAnswersCount = 0;
  shuffledQuestions = shuffleArray(questions);
  quizCountBox.textContent = ` ${shuffledQuestions.length} `;
  quizBox.querySelector('.quiz__btn-result').style.display = 'none';
  renderQuestion(questionIndex);
  updateCountCurrentQuestion();
}

function renderQuestion(index) {
  const questionText = quizBox.querySelector('.quiz__question');
  const questionOptList = quizBox.querySelector('.quiz__ans-list');
  const questionOptFragment = new DocumentFragment();

  questionOptList.classList.remove('disable');

  questionText.textContent =
    index + 1 + '. ' + shuffledQuestions[index].question;

  shuffledQuestions[index].options = shuffleArray(
    shuffledQuestions[index].options,
  );
  questionOptList.textContent = '';

  shuffledQuestions[index].options.forEach(option => {
    const li = document.createElement('li');
    li.classList.add('quiz__ans-list-item');
    li.textContent = option;
    questionOptFragment.appendChild(li);
  });

  questionOptList.appendChild(questionOptFragment);
  disableNextBtn();
}

export function showNextQuestion() {
  questionIndex++;
  renderQuestion(questionIndex);
  updateCountCurrentQuestion();
}

export function showQuestionResult(element) {
  const questionOptList = quizBox.querySelector('.quiz__ans-list');

  questionOptList.classList.add('disable');

  if (questionIndex < shuffledQuestions.length - 1) {
    activeNextBtn();
  }

  if (questionIndex === shuffledQuestions.length - 1) {
    quizBox.querySelector('.quiz__btn-result').style.display = 'block';
  }

  if (element?.textContent === shuffledQuestions[questionIndex].answer) {
    element.classList.add('correct');
    rightAnswersCount++;
    return;
  }

  element?.classList.add('incorrect');
  const optionsElemList = quizBox.querySelectorAll('.quiz__ans-list-item');
  optionsElemList.forEach(option => {
    if (option.textContent === shuffledQuestions[questionIndex].answer) {
      option.classList.add('correct');
    }
  });
}

function updateCountCurrentQuestion() {
  const currentQuestionBox = quizBox.querySelector('.quiz__que-passed');
  currentQuestionBox.textContent = questionIndex + 1 + ' ';
}

function disableNextBtn() {
  nextBtn.style.display = 'none';
}

function activeNextBtn() {
  nextBtn.style.display = 'block';
}

function shuffleArray(array) {
  const shuffledArray = [];

  while (shuffledArray.length < array.length) {
    const random = array[Math.floor(Math.random() * array.length)];
    if (!shuffledArray.includes(random)) {
      shuffledArray.push(random);
    }
  }

  return shuffledArray;
}
