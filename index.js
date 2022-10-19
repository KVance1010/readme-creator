// Include packages needed for this application
const inquirerFunction = require ('inquirer');
const fileSystem = require ('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
"What is the name of the project?",
"Give an overview of the project?",
"What Technologies were used?",
" "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
fileSystem.writeFile(path.join(__dirname,'randomRead.md'),'info to write to file' ,  (error)=> {console.log(error);});
}

// TODO: Create a function to initialize app
function init() {
//   questions.forEach(element => {
    inquirerFunction.prompt([{
        name:"question1",
        message:"message",
        type:"input",
        }]).then(function(data){
            console.log(data);
            writeToFile("random", "12jl");
        })}
// })


// Function call to initialize app
init();