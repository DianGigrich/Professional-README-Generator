// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const url = axios.get("https://api.github.com/licenses")
const fs = require("fs")
const answers = require("answers.js")
LicenseChoice = answers.license.value
Console.log(LicenseChoice)

function renderLicenseBadge(license) {
  if (license === "") {
    return ""
  } else {
    src = "https://img.shields.io/badge/License-" + (LicenseChoice) + "-green"
    console.log(renderLicenseBadge)
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "") {
    return ""
  } else {
    url.url
    console.log(renderLicenseLink)
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return ""
  } else {
    return (renderLicenseBadge(data.License.value),
    renderLicenseLink(data.License.value),
    console.log(renderLicenseSection))
  }
}
let LicenseSection = renderLicenseSction(data)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title},
  ## ${data.Description},
  ## ${data.Installation},
  ## ${data.Instructions},
  ## ${data.Screenshot},
  ## ${data.Credits},
  ## ${data.License},
`;
}

module.exports = LicenseSection;
module.exports = generateMarkdown;
