// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents 
  *[Descripton](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}

  
  ## Questions
  
  For any further questions you may have, please contact me at ${data.email}. 
  Further projects I have worked on are available here: [${data.username}](https://github.com/${data.github}/).
  
  
`;
}
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under ${license}.`
    )
  }
  return ''
}

module.exports = generateMarkdown;
