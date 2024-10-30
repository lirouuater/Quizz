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

//Substituição do quizz para a primeira pergunta//
function init() {
    //criar a primeira pergunta
    createQuestion(0)
}

//Cria uma pergunta//

function createQuestion(i) {

    //limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll('button');

    oldButtons.forEach(function(btn) {
        btn.remove();
    });

    //alterar o texto da pergunta 
    const questionText = question.querySelector('#question-text');
    const questionNumber = question.querySelector('#question-number');

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    //inserindo as alternativas//

    question[i].answers.forEach(function(answer, i) {

        //template do botão do quizz

        const answerTemplate = document.querySelector('.answer-template').cloneNode(true);
        


        console.log(answerTemplate);    
    });






};


//inicialização do Quizz//
init();
