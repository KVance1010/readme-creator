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
function generateMarkdown(data) {
  return `# ${data.title}

## Overview

${data.overview}

### learning points

${data.title}

## User Story

${data.userStories}

## Acceptance Criteria

${data.acceptanceCriteria}

## Technologies

${data.technologies}
- **Server Side APIs**
- **Fetch**
- **JavaScript**
- **HTML**
- **CSS**

## Screenshot/mockup

## CodeSnippets

## License

${data.license}

## Links

### live Link

${data.liveLink}
`;
}

module.exports = generateMarkdown;
