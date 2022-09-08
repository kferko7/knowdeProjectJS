#KNOWDECYPROJECT

KNOWDE-CY-PROJECT

##Install:
Cd mkdir create your project.
-VsCode should be installed
-Git and Git bash should be installed
-Github account should be created
-Node.js should be installed

#In Vs Code:
-cd project: knowdecyproject
-npm init then Package json should be created
-npm install cypress --save -dev -then Cypress should be installed in "package.json"

#Run tests locally
node_modules.bin\cypress open

#To run in headed
node_modules.bin\cypress run --headed

#To run in headed browsers:
-node_modules.bin\cypress run --browser chrome
-node_modules.bin\cypress run --browser firefox

#Cucumber setup:
-npm install --save-dev cypress-cucumber-preprocessor
-Add cypress/plugins/index.js --added
-Add support for feature files to your Cypress configuration --added
-Add cosmiconfig in package.json --added

#Reports:
-npm install --save-dev mochawesome then should be installed in "package.json"
-npm install --save-dev mocha -then should be installed in "package.json"
-npm install --save-dev mocha-allure-reporter allure-commandline then should be installed in "package.json"

#Run Reports:
Run all:
-node_modules\.bin\cypress run --reporter mochawesome
-run specific path
-node_modules\.bin\cypress run --reporter mochawesome --spec +path
How to run reports:
-npx mocha --reporter mochawesome

#Newman is installed:
npm i --save-dev newman -then should be installed in "package.json"

#Cuke Step Definition Generator:
plugin installed: this helps for all Gherkin syntax in features file

#Xpath setup:
-npm install -D cypress-xpath
-Add require('cypress-xpath') in plugins/index.js --added