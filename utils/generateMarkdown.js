// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${generateLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents 
  * [Descripton](#description)
  * [Installation](#installation)
  * [Usage](#usage) 
  ${generateLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
  
  ${generateLicenseSection(data.license)}
    
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  
  ## Questions
  For any further questions you may have, please contact me at ${data.email}. 
  Further projects I have worked on are available here: [${data.username}](https://github.com/${data.username}/).
  
  
`;
}
function generateLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function generateLicenseLink(license) {
  if (license !== "None") {
    return (
      `* [License](#license)`
    )
  }
  return ''
}

function generateLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project is licensed under ${license}.`
    )
  }
  return ''
}

module.exports = generateMarkdown;
