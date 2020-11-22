const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
    {
        type: "input",
        message: "Please provide your GitHub username.",
        name: "username"
        
      },
      {
        type: "input",
        message: "Please provide your email address.",
        name: "email"
        
      }, 
      {
        type: "input",
        message: "Please provide a title for your project.",
        name: "title"
        
      },
      {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description"
        
      },
      {
        type: "input",
        message: "Please provide installation instructions for your project.",
        name: "installation"
        
      },
      {
        type: "list",
        message: "If applicable, please provide any license rqeuired for your project. ",
        name: "license",
        choices: ["MIT", "GNU GPLv3","APACHE 2.0","BSD 3","N/A"]
      },
      {
        type: "input",
        message: "Please provide instructions on running any tests, if applicable.",
        name: "tests"
        
      },
      {
        type: "input",
        message: "Please provide any guidelines for contributing to your project.",
        name: "contributing"
        
      }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Generating README...");
      writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
  
}

// function call to initialize program
init();



