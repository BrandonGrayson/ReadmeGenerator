var inquirer = require('inquirer')
// array of questions for user
const questions = [
    // Ask the user for project title
    {
        type: 'input',
        name: 'project title',
        message: 'what is your project title?'
    },
    // get a description of project
    {
        type: 'input',
        name: 'description',
        message: 'How would you best describe your project?'
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
      });
}

// function call to initialize program
init();