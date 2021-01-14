// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util") //library
const asyncWrite = util.promisify(fs.writeFile) //method like document.ready


// TODO: Create an array of questions for user input
const generateREADME = (inquiryResponses) => 
`<h1 class="display-4">Hi! My name is ${inquiryResponses.title}</h1>`

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of this project to be called?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions you want to add for your project?',
      },
      {
        type: 'input',
        name: 'usageInfo',
        message: 'What are the required usage information?',
        //choices: ['email', 'phone', 'telekinesis'],
      },
      {
        type: 'input',
        message: 'Any concentration guidelines? If not applicable, type NA',
        name: 'guidelines',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'What are the test instructions for this project?',
      },

    ]).then((inquiryResponses) => {
        const filename = `${inquiryResponses.title}.md`;
    
        return asyncWrite(filename, generateREADME(inquiryResponses) )}
    ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;
    
    // err ? console.log(err) : console.log("Success!")

// TODO: Create a function to write README file

// function writeToFile(fileName, data) {
//     fs.writeToFile(fileName, data);
//     //this adds something to make it read the path of the folder.
// }

// // TODO: Create a function to initialize app
// function init() {
// inquirer.prompt(generateREADME).then((response) => {
//     //console.log(response)
//     writeFile("README.md"), GenerateFunction()
// })
// };


// // Function call to initialize app
// init();