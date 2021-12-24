var readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;
let highestScores = [
  {name: 'benny', score: 5}
];


// Questions Answers Arrays
let questions = [
    {
      question: 'Where do I live?',
      answer: 'jammu and kashmir'
    },
    {
      question: 'What is my full name ?',
      answer: 'moeen ul islam'
    },
    {
      question: 'What is my favourite food ?',
      answer: 'momos'
    },

    {
      question: 'Which is my favourite movie ?',
      answer: 'inception'
    },
    {
      question: 'what do I study ?',
      answer: 'computer science'
    }
]
// getting name
let name = readlineSync.question('What is your name ?');
console.log(`Welcome ${name}, do you know Moeen ?`);

// Looping through each object stored in 'questions' array
questions.forEach((question) => {
  // Asking the question via command line
  let answer = readlineSync.question(chalk.yellow(`${question.question} `));
  // checking the answer against the one stored in 'questions' array
  if(answer.toLocaleLowerCase() === question.answer){
    console.log(chalk.green('right!'));
    console.log(chalk.green(`current score ${++score}`));
    console.log('---------------');
  }
  else{
    console.log(chalk.red('wrong!'));
    console.log(chalk.red(`current score ${--score}`));
    console.log('---------------');

  }
});

// Giving the score outputs
if (score > 0) console.log(chalk.green(`yay! you scored ${score}`));
else console.log(chalk.redBright(`oops! you scored ${score} try again`));

console.log('Checkout the score board!');
highestScores.push({name: name, score: score});
highestScores.forEach((info) => { 
  console.log(chalk.green(`${info.name} : ${info.score}`));
})
