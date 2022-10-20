// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const url = axios.get("https://api.github.com/licenses")
const fs = require("fs")
const index = require("index.js")


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
    index.key.license
    console.log(renderLicenseSection)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title},
  ## ${data.}

`;
}

module.exports = generateMarkdown;
