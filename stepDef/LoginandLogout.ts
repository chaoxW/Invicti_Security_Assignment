import { Given, Then, TableDefinition } from "cucumber";
import { Util } from "../Utility/Util";
import { AccountPage } from "../pages/AccountPage";
import { HomePage } from "../pages/TestFireHomePage";
import { brotliCompress } from "zlib";
import { browser } from "protractor";

var _ = require('lodash');
var homePage: HomePage = new HomePage();
const expect = require('chai').expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
const log = require("../config/log4js").default;
var openAccount: AccountPage = new AccountPage();

Then(/^I select account$/, async (table: TableDefinition) => {
    var firstAccount: string = '';
    var scondAccount: string = '';

    log.debug(table);
    var rows = table.hashes();
    firstAccount = rows[0].accountName;
    log.debug(firstAccount);
    await openAccount.selectACustomer(firstAccount);
    await openAccount.navigateToAccountPage();
    await expect(await homePage.validateHeading.getText('validateHeading')).include(firstAccount);
    await openAccount.navigateToViewAccountSummary();
    scondAccount = rows[1].accountName;
    log.debug(scondAccount);
    await openAccount.selectACustomer(scondAccount);
    await openAccount.navigateToAccountPage();
    await expect(await homePage.validateHeading.getText('validateHeading')).include(scondAccount);
    await openAccount.navigateToViewAccountSummary();
})

Then(/^I select first account$/, async () => {
    await openAccount.SelectFirstAccount();
    await openAccount.navigateToAccountPage();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Account History - 800000 Corporate");
})

Then(/^I select second account$/, async () => {
    await openAccount.SelectSecondAccount();
    await openAccount.navigateToAccountPage();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Account History - 800001 Checking");
})

Then(/^I navigate to View Account Summary$/, async () => {
    await openAccount.SelectSecondAccount();
    await openAccount.navigateToAccountPage();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Account History - 800001 Checking");
})