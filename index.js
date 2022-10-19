// Include packages needed for this application
const inquirerFunction = require('inquirer');
const fileSystem = require('fs');
const filePath = require('path');
const markdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
	// 'What is the name of the project?',
	// 'Give an overview of the project?',
	// 'Learning Objectives of the project?',
	// 'What Technologies were used?',
	// 'What were the user stories?',
	// 'What were the acceptance criteria?',
	// 'What license was used?',
	// 'Link to live source?',
	{
		name: 'question1',
		message: 'What is the name of the project?',
		type: 'input',
	},
	{
		name: 'question2',
		message: 'Give an overview of the project?',
		type: 'input',
	},
	{
		name: 'question3',
		message: 'Learning Objectives of the project?',
		type: 'input',
	},
	{
		name: 'question4',
		message: 'What Technologies were used?',
		type: 'input',
	},
	{
		name: 'question5',
		message: 'What were the user stories?',
		type: 'input',
	},
	{
		name: 'question6',
		message: 'What were the acceptance criteria?',
		type: 'input',
	},
	{
		name: 'question7',
		message: 'What license was used?',
		type: 'input',
	},
	{
		name: 'question8',
		message: 'Link to live source?',
		type: 'input',
	},
];

// Creates a function to write a README file
function writeToFile(fileName, data) {
	fileSystem.writeFile(filePath.join(__dirname, fileName), data, (error) => {
		console.log(error);
	});
}

// Initialize app
function init() {
	prompt(questions).then(function (data) {
		console.log(data);
	});
	// inquirerFunction
	// 	.prompt([{
	// 			name: 'question' + i,
	// 			message: 'question',
	// 			type: 'input'
	// 		}])
	// 	.then(function (data) {
	//         console.log(data);
	// 	});
}

// })

// Function call to initialize app
init();


