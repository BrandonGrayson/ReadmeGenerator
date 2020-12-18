//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}
  
  ## License Badge
  ${data.license}

  click badge for more info.

  <details>

  <summary> Table of Contents </summary

  [Description](###Description)

  [Installation](###Installation)

  [Usage](###Usage)

  [Contributors](###Contributors)

  [Test](###Test)

  -[Contact](###Contact)

</details>

  ### Description
  ${data.description}

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Contributors
  ${data.contribution}

  ### Tests
  ${data.test}

  ### Questions?

  ### Contact
 * [${data.username} Github Account] (https://github.com/${data.username})
 * Email: [${data.email}]
  `;

  // //let readmeData = `Title: ${answers.projectTitle} ${answers.certifications}
  // Description: ${answers.description}\n Installation: ${answers.installation}\n
  // Usage: ${answers.usage}\n Contribution: ${answers.contribution}\n 
  // test: ${answers.test}\n Certifications: ${answers.certifications}\n
  // Questions: contact ${answers.username} email: ${answers.email}`
  // fs.writeFile('readme.md', readmeData, (err) =>
  // err ? console.error(err) : console.log('Success!')
  // );

}

module.exports = generateMarkdown;