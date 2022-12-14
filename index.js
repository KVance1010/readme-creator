// Include packages needed for this application
const inquirerFunction = require('inquirer');
const fileSystem = require('fs');
const markdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
	{
		name: 'title',
		message: 'What is the name of the project?',
		type: 'input'
	},
	{
		name: 'description',
		message: 'Give an overview of what your project does?',
		type: 'input'
	},
	{
		name: 'installation',
		message: 'How and what is required for the projects installation?',
		type: 'input'
	},
	{
		name: 'usage',
		message: 'How should the project be used?',
		type: 'input'
	},
	{
		name: 'license',
		message:
			'please select a license from the list of licenses(use the arrow keys to select and option)',
		type: 'list',
		choices: [
			'MIT license',
			'IBM license',
			'Mozilla license',
			'ISC license',
			'Eclipse license',
			'Apache license',
			'Boost license',
			'no license',
		],
	},
	{
		name: 'contribution',
		message: 'Please list the contributors:(separated with commas and do not include the "and" for the last person)',
		type: 'input',
	},
	{
		name: 'test',
		message: 'what are the test instructions?',
		type: 'input',
	},
	{
		name: 'question1',
		message: 'What is your GitHub username?',
		type: 'input',
	},
	{
		name: 'question2',
		message: 'What is your email address?',
		type: 'input',
	},
	{
		name: 'question3',
		message: 'What is your LinkedIn profile name?',
		type: 'input',
	}
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
		writeToFile('readREADME.md', createdMarkDown);
	});
}

// Function call to initialize app
init();
