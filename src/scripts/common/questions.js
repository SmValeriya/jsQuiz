export const questions = [
  {
    id: 1,
    question: 'new Array(5).toString();',
    answer: ',,,,',
    options: ['[]', '"[]"', ',,,,', '[,,,,]'],
  },
  {
    id: 2,
    question: '(true + false) > 2 + true',
    answer: 'false',
    options: ['true', 'false', 'TypeError', 'NaN'],
  },
  {
    id: 3,
    question: 'new String("This is a string") instanceof String',
    answer: 'true',
    options: ['true', 'false', 'TypeError', 'ReferenceError'],
  },
  {
    id: 4,
    question: 'NaN === NaN',
    answer: 'false',
    options: ['true', 'false', 'TypeError', 'undefined'],
  },
  {
    id: 5,
    question: 'How do you locate the first X in a string?',
    answer: 'using indexOf() function',
    options: [
      'using find function',
      'using locate function',
      'using indexOf() function',
      'using countTo() function',
    ],
  },
  {
    id: 6,
    question: 'How can you reference part of a string?',
    answer: 'text.substr(5,6)',
    options: [
      'text.substr(5,6)',
      'text.part(5,6)',
      'text.piece(5,6)',
      'text.split(5,6)',
    ],
  },
  {
    id: 7,
    question: 'Which event is triggered when a field loses the focus?',
    answer: 'onblur',
    options: ['onmouseout', 'onblur', 'onunfocus', 'onkeyup'],
  },
  {
    id: 8,
    question: 'What language defines the behavior of a web page',
    answer: 'Javascript',
    options: ['HTML', 'CSS', 'XML', 'Javascript'],
  },
  {
    id: 9,
    question:
      'Which of the following method is used to evaluate a string of Javascript code in the context of the specified object?',
    answer: 'Eval',
    options: ['Eval', 'ParseDoule', 'ParseObject', 'Efloat'],
  },
  {
    id: 10,
    question: 'What is 12%5',
    answer: '2',
    options: ['7', '2', '60', '17'],
  },
];
