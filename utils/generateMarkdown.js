// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
  return `# ${userResponses.title}

## Overview

${userResponses.overview}

### learning points

${userResponses.title}

## User Story

${userResponses.userStories}

## Acceptance Criteria

${userResponses.acceptanceCriteria}

## Technologies

${userResponses.technologies}
- **Server Side APIs**
- **Fetch**
- **JavaScript**
- **HTML**
- **CSS**

## Screenshot/mockup

## CodeSnippets

## License

${userResponses.license}

## Links

### live Link

${userResponses.liveLink}
`;
}

module.exports = generateMarkdown;
