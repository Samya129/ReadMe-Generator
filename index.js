// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util") //library
const asyncWrite = util.promisify(fs.writeFile) //method like document.ready

// TODO: Create an array of questions for user input
const generateREADME = (inquiryResponses) => {
 const licenseBadges = {
   MIT:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
 }
 console.log(licenseBadges.MIT)
 const yourLicense = inquiryResponses.license;
 //console.log(licenseBadges.yourLicense)
 ${licenseBadges.yourLicense}
 //['MIT', 'Apache', 'Boost', 'BSD','None']
  return `# ${inquiryResponses.title} 

  ## Description 
  
  ${inquiryResponses.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ### Installation
  
  \`\`\`
  ${inquiryResponses.installation}
  \`\`\`
  
  ### Usage
  
  ${inquiryResponses.usageInfo}
  
  ### License 
  
   This project is licensed under an ${inquiryResponses.license} license.
  
  ## Contributing 
  
  ${inquiryResponses.contributingGuidelines}
  
  ## Tests
  
  To run test, run the following commands:
  
  \`\`\`
  ${inquiryResponses.testInstructions}
  \`\`\`
  
  ## Questions
  
  * If you have any questions regarding this repository, contact me either by email at **${inquiryResponses.email}**, or you can find more of my work within my github account attached here [${inquiryResponses.github}](https://github.com/${inquiryResponses.github}). Here, you can open an issue if needed.
   
  `;
}


//init function
function init(){
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
        message: 'What are the required usage information needed for this project?',
      },
      {
        type: 'list',
        message: 'What is the license for this project?',
        name: 'license',
        choices: ['MIT', 'Apache', 'Boost', 'BSD','None'],
        function (choices) {
          if (choices.length < 1) {
              return console.log("A valid GitHub repo is required for a badge.");
          }
          return true;
      }

      },
      {
        type: 'input',
        message: 'Any contributing guidelines you would like to add? If not applicable, type NA',
        name: 'contributingGuidelines',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions for this project?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },

    ]).then((inquiryResponses) => {
        const filename = `${inquiryResponses.title}.md`;
    
        return asyncWrite(filename, generateREADME(inquiryResponses) )}
    ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;
}
  init();