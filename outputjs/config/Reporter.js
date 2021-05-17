"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var mkdirp = require("mkdirp");
var path = require('path');
var reporter = require('cucumber-html-reporter');
var jsonReports = path.join(process.cwd(), "/reports/json");
var htmlReports = path.join(process.cwd(), "/reports/html");
var targetJson = path.join(jsonReports + "/cucumber_report.json");
var cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    screenshotsDirectory: 'screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
    metadata: {
        "App Name": "Invicti_Security_Assignment",
        "Platform": "Mac OS"
    }
};
var Reporter = /** @class */ (function () {
    function Reporter() {
    }
    Reporter.createDirectory = function (dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    };
    Reporter.createHTMLReport = function () {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file." + err);
            }
        }
    };
    return Reporter;
}());
exports.Reporter = Reporter;
//# sourceMappingURL=Reporter.js.map