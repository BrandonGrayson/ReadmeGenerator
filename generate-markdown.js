//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`
  
  
  
  
  ;

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