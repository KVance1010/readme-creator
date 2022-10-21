// creates a license section of readREADME
function renderLicenseSection(license, name) {
	if (license) {
		return "The license used on this project was "+ name ;
	}
}

// license Badge and Link
function renderLinkAndBadge(license) {
	let badge;
	switch (license) {
		case 'MIT license':
			badge = [
				'![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
				'https://opensource.org/licenses/MIT',
			];
			break;
		case 'IBM license':
			badge = [
				'![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)',
				'https://opensource.org/licenses/IPL-1.0',
			];
			break;
		case 'Mozilla license':
			badge = [
				'![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
				'https://opensource.org/licenses/MPL-2.0',
			];
			break;
		case 'ISC license':
			badge = [
				'![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
				'https://opensource.org/licenses/ISC',
			];
			break;
		case 'Eclipse license':
			badge = [
				'![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)',
				'https://opensource.org/licenses/EPL-1.0',
			];
			break;
		case 'Apache license':
			badge = [
				'![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
				'https://opensource.org/licenses/Apache-2.0',
			];
			break;
		case 'Boost license':
			badge = [
				'![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
				'https://www.boost.org/LICENSE_1_0.txt',
			];
			break;
		default:
			badge = ['',''];
			break;
	}
	return badge;
}

// Generate markdown for README
function generateMarkdown(userResponses) {
	const license = renderLinkAndBadge(userResponses.license);
	const licenseSection = renderLicenseSection(license, userResponses.license);
	const contributors = userResponses.contribution.split(', ');
	return `# ${userResponses.title}
  
${license[0]}

## Description

${userResponses.description}

### Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${userResponses.installation}


## Usage

${userResponses.usage}


## License

${licenseSection}

[license link](${license[1]})


## Contributors

${contributors.join('\n\n')}

## Tests

${userResponses.test}

## Questions

If you have any questions regarding this project, please reach me by email at ${userResponses.question2}

[GitHub](https://github.com/${userResponses.question1}) 

[LinkedIn](https://www.linkedin.com/in/${userResponses.question3}/)
`;
}

module.exports = generateMarkdown;
