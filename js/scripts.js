//declarando variáveis//
const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a','b','c','d'];
let points = 0;
let actualQuestion = 0;


//perguntas//

const questions = [

    {
        'question': 'PHP foi desenvolvido para qual fim?',
        'answers': [
            {
                'answer':'back-end',
                'correct':true
            },
            {

                'answer':'front-end',
                'correct':false 
            },
            {
                'answer':'DB',
                'correct':false
            },
            {
                'answer':'SO',
                'correct':false
            }

        ]

    },
    {
        'question': 'O que faz uma variável no JS?',
        'answers': [
            {
                'answer':'Armazena dados',
                'correct':true
        
            },
            {
                'answer':'Armazena maizena',
                'correct':false
            },
            {
                'answer':'Nada',
                'correct':false
            },
            {
                'answer':'Cria objetos',
                'correct':false
            }
        ]
        
    },
    {
        'question':'O que significa API?',
        'answers': [
            {
                'answer':'Application Programming Interface',
                'correct':true
            },
            {
                'answer':'Alternative Programming Interface',
                'correct':false
            },
            {
                'answer':'Advanced Programming Interface',
                'correct':false
            },
            {
                'answer':'Nenhuma das alternativas',
                'correct':false
            }
        ]
    },
    {
        'question': 'O que significa JSON?',
        'answers': [
            {
                'answer':'JavaScript Object Networking',
                'correct':false
            },
            {
                'answer':'JavaScript Object Notation',
                'correct':true
            },
            {
                'answer':'Java System Operational Online',
                'correct':false
            },
            {
                'answer':'nenhuma das alternativas',
                'correct':false
            }
        ]

    },
    {
        'question': 'O que significa AJAX?',
        'answers':[
            {
                'answer':'Asynchronous JavaScript and XML',
                'correct':true
            },
            {
                'answer':'Nenhuma das alternativas',
                'correct':false
            },
            {
                'answer':'JavasScript and XML',
                'correct':false
            },
            {
                'answer':'JavaScript Object Notation',
                'correct':false 
            }
        ]
    },
    {
        'question':'O que signficar HTML?',
        'answers': [
            {
                'answer':'Hyper Test Mark Language',
                'correct':false
            },
            {
                'answer':'HyperText Markup Language,',
                'correct':true
            },
            {
                'answer':'Nenhuma das alternativas',
                'correct':false
            },
            {
                'answer':'Protocol of Internet',
                'correct':false
            }
        ]
    },
    {
        'question':'O que significa CSS?',
        'answers': [
            {
                'answer':'Conditional Style Sheets',
                'correct':true
            },
            {
                'answer':'Cascadating Style Sheets',
                'correct':false
            },
            {
                'answer':'Cascading Style Sheets',
                'correct':true
            },
            {
                'answer':'Nenhuma das Alternativas'
            }
            
        ]
    },
    {
        'question':'O que significa JS?',
        'answers': [
            {
                'answer':'Javas',
                'correct':false
            },
            {
                'answer':'JSON',
                'correct':false
            },
            {
                'answer':'Just Sheets',
                'correct':false
            },
            {
                'answer':'JavaScript',
                'correct':true
            }
        ]
    },
    {
        'question':'O que significa PHP?',
        'answers': [
            {
                'answer':'Personal Home Page',
                'correct':false
            },
            {
                'answer':'PHP: Hypertext Preprocessor',
                'correct':true
            },
            {
                'answer':'Nenhuma das alternativas',
                'correct':false
            },
            {
                'answer':'Point to Point',
                'correct':false
            }
        ]
    },
    {
        'question':'O que é MySQL?',
        'answers': [
            {
                'answer':'Nenhuma das alternativas',
                'correct':false
            },
            {
                'answer':'MySQL Hypertext Preprocessor',
                'correct':false
            },
            {
                'answer':'Protocolo de segurança',
                'correct':false
            },
            {
                'answer':'sistema de gerenciamento de banco de dados relacional (SGBDR)',
                'correct':true
            }
        ]
    }
]

// Initialize quiz
function init() {
    createQuestion(actualQuestion);
}

// Create a question
function createQuestion(i) {
    // Clear previous question
    const oldButtons = answersBox.querySelectorAll('button');
    oldButtons.forEach(btn => btn.remove());

    // Update question text
    const questionText = question.querySelector('#question-text');
    const questionNumber = question.querySelector('#question-number');

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // Insert answers
    questions[i].answers.forEach((answer, index) => {
        // Clone the answer template
        const answerTemplate = document.querySelector('.answer-template').cloneNode(true);
        const letterBtn = answerTemplate.querySelector('.btn-letter');
        const answerText = answerTemplate.querySelector('.question-answer');

        letterBtn.textContent = letters[index];
        answerText.textContent = answer['answer'];

        // Set correct answer attribute
        answerTemplate.setAttribute('correct-answer', answer['correct']);

        // Remove hide and template classes
        answerTemplate.classList.remove('hide');
        answerTemplate.classList.remove('answer-template');

        // Append to answers box
        answersBox.appendChild(answerTemplate);

        // Add click event listener
        answerTemplate.addEventListener('click', function () {
            const isCorrect = this.getAttribute('correct-answer') === 'true';
            if (isCorrect) {
                points++;
            }
            actualQuestion++;
            if (actualQuestion < questions.length) {
                createQuestion(actualQuestion);
            } else {
                displayScore();
            }
        });
    });
}

// Display final score
function displayScore() {
    quizzContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    const displayScore = document.querySelector('#display-score');
    const correctAnswers = document.querySelector('#correct-answers');
    const questionsQty = document.querySelector('#questions-qty');

    displayScore.textContent = ((points / questions.length) * 100).toFixed(0);
    correctAnswers.textContent = points;
    questionsQty.textContent = questions.length;
}

// Start the quiz
init();
