// Include packages needed for this application
const inquirerFunction = require('inquirer');
const fileSystem = require('fs'); 
const markdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
	{
		name: 'title',
		message: 'What is the name of the project?',
		type: 'input',
	},
	{
		name: 'overview',
		message: 'Give an overview of the project?',
		type: 'input',
	},
	{
		name: 'learningObjectives',
		message: 'Learning Objectives of the project?',
		type: 'input',
	},
	{
		name: 'technologies',
		message: 'What Technologies were used?',
		type: 'input',
	},
	{
		name: 'userStories',
		message: 'What were the user stories?',
		type: 'input',
	},
	{
		name: 'acceptanceCriteria',
		message: 'What were the acceptance criteria?',
		type: 'input',
	},
	{
		name: 'license',
		message: 'What license was used?',
		type: 'input',
	},
	{
		name: 'liveLink',
		message: 'Link to live source?',
		type: 'input',
	},
];

// Creates a function to write a README file
function writeToFile(fileName, createdMarkDown) {
	fileSystem.writeFile(fileName, createdMarkDown, (error) => {
		if (error) throw error;
		console.log('File created');
	});
}

// Initialize app
function init() {
	// // try 2 just adding the array of objects also with a for each
	inquirerFunction.prompt(questions).then((userResponses) => {
		const createdMarkDown = markdown(userResponses);
		writeToFile("readREADME.md", createdMarkDown);
	});
}

// Function call to initialize app
init();
