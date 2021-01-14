// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
    ]);

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data);
    //this adds something to make it read the path of the folder.
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((response) => {
    //console.log(response)
    writeFile("README.md"), GenerateFunction()
})
};


// Function call to initialize app
init();