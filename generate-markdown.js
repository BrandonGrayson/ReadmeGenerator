//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}
  
  ## License Badge
  ${data.license}

  click badge for more info.
  
  <details>
  <summary> Table of Contents </summary

  -[Description] (#Description)

  -[Installation] (#Installation)

  -[Usage] (#Usage)

  -[Contributors] (#Contributors)

  -[Test] (#Test)

  -[Contact] (#Contact)
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