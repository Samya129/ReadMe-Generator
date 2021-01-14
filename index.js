// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util") //library
const asyncWrite = util.promisify(fs.writeFile) //method like document.ready
// TODO: Create an array of questions for user input
const generateREADME = (inquiryResponses) => 
`<h1 class="display-4">Hi! My name is ${inquiryResponses.name}</h1>`

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of this project to be called?',
      },
      {
          type: 'input',
          message: 'What is the description of your project?',
          name: 'description',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
    ]).then((inquiryResponses) => {
        const filename = `${inquiryResponses.title}.md`;
    
        return asyncWrite(filename, generateREADME(inquiryResponses) )}
    ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;
    
    // err ? console.log(err) : console.log("Success!")






// TODO: Create a function to write README file
// function writeFile(fileName, data) {
//     fs.writeFile(fileName, data);
    //this adds something to make it read the path of the folder.
// }

// TODO: Create a function to initialize app
// function init() {
// inquirer.prompt(questions).then((response) => {
//     //console.log(response)
//     writeFile("README.md"), GenerateFunction()
// })
// };


// Function call to initialize app
// init();