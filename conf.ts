import { Config, browser } from 'protractor';

import { Reporter } from './config/Reporter';
let path = require('path');
var outputDir = path.join(process.cwd(), '/reports/json');

export let config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  SELENIUM_PROMISE_MANAGER: false,

  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 36000,
    print: function () { }
  },

  capabilities: {
    browserName: 'chrome',
    chromeOptions: { 'args': ['disable-infobars'] },
    //browserName : 'firefox',
    //marionette : true,
    acceptSslCerts: true
  },

  suites: {
    homepage: '../Features/HomePageSanityCheck.feature',
    account: '../Features/LoginAndLogout.feature',
    // test: '../Features/test.feature',
    // bothtest: ['../Features/HomePageSanityCheck.feature',
    //   '../Features/LoginAndLogout.feature']
  },

  // SELENIUM_PROMISE_MANAGER: false,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  cucumberOpts: {
    require: [
      '../outputjs/stepDef/*.js',
      '../outputjs/config/*.js'
    ],
    format: "json:./reports/json/cucumber_report.json",
    tags: false,
    profile: false,
    'no-source': true
  },

  onPrepare: async () => {
    var os = require('os');
    let globals = require('protractor');
    let browser = globals.browser;
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);

    Reporter.createDirectory(outputDir);

  },
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,
  onComplete: () => { Reporter.createHTMLReport(); }
}

