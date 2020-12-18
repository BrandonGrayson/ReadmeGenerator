const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./generate-markdown');
//const generateMarkdown = require('generate-markdown.js')
// array of questions for user
const questions = [
    // Ask the user for project title
    {
        type: 'input',
        name: 'projectTitle',
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
        type: 'list',
        name: 'certifications',
        choices: [
            {
                key: 'mit',
                name: 'mitLicense',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            },
            {
                key: 'mozilla',
                name: 'mozilla',
                value: '[![License: MPL 2.0] (https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            },
            {
                key: 'Perl',
                name: 'perlLicense',
                value: '[![License: Artistic-2.0] (https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
            },
            {
                key: 'sil',
                name: 'silLicense',
                value: '[![License: Open Font-1.1] (https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
            }
        ]
    },
    // ask user for github username
    {
        type: 'input',
        name: 'username',
        message: 'what is your Github username?'
    },
    // ask for email address
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    // access the project title property
    // save it to a variable
    // use writeFile to append it to readme
    fs.writeFile(fileName, (data), (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    // run the inquirer. prompt function to prompt questions
    inquirer.prompt(questions).then((answers) => { 

        console.log(answers)

        writeToFile('README.md', generateMarkdown(answers))

        // console.log(JSON.stringify(answers, null, '  '))

        // let readmeData = `Title: ${answers.projectTitle} ${answers.certifications}
        // Description: ${answers.description}\n Installation: ${answers.installation}\n
        // Usage: ${answers.usage}\n Contribution: ${answers.contribution}\n 
        // test: ${answers.test}\n Certifications: ${answers.certifications}\n
        // Questions: contact ${answers.username} email: ${answers.email}`
        // fs.writeFile('readme.md', readmeData, (err) =>
        // err ? console.error(err) : console.log('Success!')
        // );
        
        // access the result from description input
        // append to a file called 
    });
     
}

// function call to initialize program
init();

// fs.writeFile('log.txt', isHome, (err) =>
// err ? console.error(err) : console.log('Success!')
// );