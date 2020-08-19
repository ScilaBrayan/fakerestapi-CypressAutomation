const reporter = require('cucumber-html-reporter');
 
const options = {
    theme: 'bootstrap',
    jsonFile: 'cypress/reports/cucumber-json/cucumber_report.json',
    output: 'cypress/reports/report-html/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Name":"Fake API Automation",
        "Api Version": "V1"
    }
};

reporter.generate(options);