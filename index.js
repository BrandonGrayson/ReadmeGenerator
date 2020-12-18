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
    // ask the user for installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation instructions users should be aware of?'
    },
    // Access any Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'Is there any usage information?'
    },
    // Contribution Guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?'
    },
    // test instruction
    {
        type: 'input',
        name: 'test',
        message: 'what are the test instructions?'
    },
    // list of certifications for project
    {
        type: 'list'
    }
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