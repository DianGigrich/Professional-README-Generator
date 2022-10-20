// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require("fs")
const answers = require("answers.js")
const LicenseChoice = answers.license.value
Console.log(LicenseChoice)

const url = ("https://api.github.com/licenses/" + LicenseChoice + "?per_page=1")



function renderLicenseBadge(license) {
  if (license === "") {
    return ""
  } else {
    return ("https://img.shields.io/badge/License-" + (LicenseChoice) + "-green"}

}
console.log(renderLicenseBadge)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (license === "") {
    return ""
  } else {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
    
    return [License URL](data.html_url)
      }
}
console.log(renderLicenseLink)
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (renderLicenseLink === "" || renderLicenseBadge === "") {
    return ""
  } else {
    return (renderLicenseBadge(),
      renderLicenseLink(),
      console.log(renderLicenseSection))
  }
}
let LicenseSection = renderLicenseSection(data)

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title},
  ## ${answers.Description},
  ## ${answers.Installation},
  ## ${answers.Instructions},
  ## ${answers.Screenshot},
  ## ${answers.Credits},
  ## ${answers.License},
  ${LicenseSection}
`;
}

module.exports = LicenseSection;
module.exports = generateMarkdown;
