<!--
  * browser: architecture
  * version: 1.0.0
  * updated: 2021-05-17T09:39:34Z
  * contact: Shuai Wang (shuai.wang.kaos@gmail.com)
-->

# Invicti_Security_Assignment

Use protractor and cucumber to make the automation test, use POM(page object module) to build the test framework.

Contents:

* [Installation](#installation)
* [The architecture information](#the-architecture-information)
* [How to run the tests](#how-to-run-the-tests)


## Installation

* Use `npm install` to install the package

## The architecture information

Introduction about the project:

  * **/.vscode/settings.json**
    *  cucumber auto complete configuration

  * **/config**
    * **/config/hooks.ts** the hooks for the tests
    
    * **/config/log4js.ts** the configuration for the log
    
    * **/config/Reporter.ts** the configuration for the test report

  * **/Features**
    * The fueature files which contain all the test scenarios  

  * **/pages**
    * Manage all the pages (POM)

  * **/reports**
    * **/reports/html** the html test report
    * **/reports/json** the json test report

  * **/stepDef**
    * step definitions for the scenarios

  * **/testData**
    * manage all the test data

  * **/Utility**
    * the utility function for the tests

  * **/conf.ts**
    * the configuration file for the test framework

## How to run the tests:
  * Run command `node_modules/.bin/webdriver-manager update` to update the webdriver
  * Run command `node_modules/.bin/webdriver-manager start` to start the webdriver
  * Run command `npm run test` to run the test
