const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const styleFilePath = path.join(__dirname, '..', 'style.styl');

const { version } = require(packageJsonPath);

if (!version) {
  console.error('Error: Version not found in package.json');
  process.exit(1);
}

const styleFileContent = fs.readFileSync(styleFilePath, 'utf8');
const versionRegex = /(@version\s+)([\d\w\.-]+)/;

if (!versionRegex.test(styleFileContent)) {
  console.error(`Error: @version tag not found in ${styleFilePath}`);
  process.exit(1);
}

const updatedContent = styleFileContent.replace(versionRegex, `$1${version}`);
fs.writeFileSync(styleFilePath, updatedContent, 'utf8');
console.log(`Updated @version in style.styl to ${version}`);