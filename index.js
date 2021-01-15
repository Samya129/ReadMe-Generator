// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util") //library
const asyncWrite = util.promisify(fs.writeFile) //method like document.ready

// TODO: Create an array of questions for user input
const generateREADME = (inquiryResponses) => 
`# ${inquiryResponses.title} 

## Description 

\`\`\`
${inquiryResponses.description}
\`\`\`

## Table of Contents

### Installation Instructions

\`\`\`
* ${inquiryResponses.installation}
\`\`\`

### Usage Instructions

\`\`\`
* ${inquiryResponses.usageInfo}
\`\`\`

### Guidelines 

\`\`\`
** ${inquiryResponses.guidelines}**
\`\`\`

### Test instructions 

\`\`\`
${inquiryResponses.instructions}
\`\`\`

## Submission

\`\`\`
* [Github](${inquiryResponses.github})-The Github Repository
* [Deployment](${inquiryResponses.deployment})- The Deployed Application
\`\`\`

## Table of Contents
* **Installation**: Node
* **Usage**:
* **Credits**: 
* **Licenses**: 
`
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
        message: 'What are the required usage information?',
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
      {
        type: 'input',
        name: 'github',
        message: 'Please attach your github repository link ',
      },
      {
        type: 'input',
        name: 'deployment',
        message: 'Now, attach your deployment link',
      },
    ]).then((inquiryResponses) => {
        const filename = `${inquiryResponses.title}.md`;
    
        return asyncWrite(filename, generateREADME(inquiryResponses) )}
    ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;
}
  init();