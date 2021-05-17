import { Given, Then, TableDefinition, When } from "cucumber";
import { HomePage } from "../pages/TestFireHomePage";
import { Util } from "../Utility/Util";
import { brotliCompress } from "zlib";
import { browser } from "protractor";


var _ = require('lodash');

//let chai = require('chai').use(require('chai-as-promised'));
//let expect = chai.expect;
const expect = require('chai').expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

const log = require("../config/log4js").default;

var homePage: HomePage = new HomePage();

// * Starting
Given(/^I am on Test Fire home page$/, async () => {
    log.debug("Starting");
    log.debug("I am on Test Fire home page");
    await homePage.navigateToHomePage();
    await expect(await homePage.validateHomePage.getText('validateHomePage')).include("Online Banking with FREE Online Bill Pay");
    // await expect(await homePage.homeLogo.getId()).equal("HyperLink1");
    // await homePage.navigateToHomePage();
});
// * sing in 
Then(/^I navigate to Sign In$/, async () => {
    log.debug("Navigate to sign in");
    await homePage.navigateToSignIN();
    // await browser.sleep(10000);
    // log.debug(await homePage.signIn.getText('signIn'));
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Online Banking Login");
    //await browser.sleep(2000);
})
// ******************************************* head links ********************************************

Then(/^Enter the ONLINE BANKING LOGIN head link$/, async () => {
    log.debug("enter ONLINE BANKING LOGIN head link");
    await homePage.navigateToOnlineBankingLogin();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Online Banking Login");
})

Then(/^Enter the PERSONAL head link$/, async () => {
    log.debug("enter PERSONAL head link");
    await homePage.navigateToPersonal();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Personal");
})

Then(/^Enter the SMALL BUSINESS head link$/, async () => {
    log.debug("enter SMALL BUSINESS head link");
    await homePage.navigateToSmallBusiness();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Small Business");
})

Then(/^Enter the INSIDE ALTORO MUTUAL head link$/, async () => {
    log.debug("enter INSIDE ALTORO MUTUAL head link");
    await homePage.navigateToInsideAltoroMutual();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Inside Altoro");
})
// ***************************************************************************************************


// *************************************** category links ********************************************
// Then(/^Enter the ONLINE BANKING LOGIN link$/, async () => {
//     log.debug("enter ONLINE BANKING LOGIN category");
//     await homePage.navigateToOnlineBankingLogin();
//     await expect(await homePage.validateHeading.getText('validateHeading')).include("Online Banking Login");
// })

Then(/^Enter the PERSONAL category$/, async () => {
    log.debug("enter PERSONAL category");
    await homePage.navigateToPersonalCat();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Personal");
})

Then(/^Enter the SMALL BUSINESS category$/, async () => {
    log.debug("enter SMALL BUSINESS");
    await homePage.navigateToSmallBusinessCat();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Small Business");
})

Then(/^Enter the INSIDE ALTORO MUTUAL category$/, async () => {
    log.debug("enter INSIDE ALTORO MUTUAL");
    await homePage.navigateToInsideAltoroMutualCat();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Inside Altoro");
})
// ***************************************************************************************************

// *********************************** links under personal category *********************************
Then(/^Enter the Deposit Product of PERSONAL category$/, async () => {
    log.debug("enter Deposit Product of PERSONAL category");
    await homePage.navigateToDepositProduct();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Deposit Products");
})

Then(/^Enter the Checking of PERSONAL category$/, async () => {
    log.debug("enter Checking of PERSONAL category");
    await homePage.navigateToChecking();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Checking");
})

Then(/^Enter the Loan Products of PERSONAL category$/, async () => {
    log.debug("enter Loan Products of PERSONAL category");
    await homePage.navigateToLoanProducts();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Loan Products");
})

Then(/^Enter the Cards of PERSONAL category$/, async () => {
    log.debug("enter Cards of PERSONAL category");
    await homePage.navigateToCardsPersonal();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Cards");
})

Then(/^Enter the Investments & Insurance of PERSONAL category$/, async () => {
    log.debug("enter Investments & Insurance of PERSONAL category");
    await homePage.navigateToInvestmentsInsurance();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Investments & Insurance");
})

Then(/^Enter the Other Services of PERSONAL category$/, async () => {
    log.debug("enter Other Services  of PERSONAL category");
    await homePage.navigateToOtherServicesPersonal();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Other Personal Services");
})
// ********************************************************************************************************

//***************************** links under small business category ***************************************
Then(/^Enter the Deposit Products of SMALL BUSINESS category$/, async () => {
    log.debug("enter Other Services of SMALL BUSINESS category");
    await homePage.navigateToDepositProducts();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Deposit Products");
})

Then(/^Enter the Lending Services of SMALL BUSINESS category$/, async () => {
    log.debug("enter Lending Services of SMALL BUSINESS category");
    await homePage.navigateToLendingServices();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Lending");
})

Then(/^Enter the Cards of SMALL BUSINESS category$/, async () => {
    log.debug("enter Cards of SMALL BUSINESS category");
    await homePage.navigateToCards_smallBusiness();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Cards");
})

Then(/^Enter the Insurance of SMALL BUSINESS category$/, async () => {
    log.debug("enter Insurance of SMALL BUSINESS category");
    await homePage.navigateToInsurance();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Insurance");
})

Then(/^Enter the Retirement of SMALL BUSINESS category$/, async () => {
    log.debug("enter Retirement of SMALL BUSINESS category");
    await homePage.navigateToRetirement();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Retirement");
})

Then(/^Enter the Other Services of SMALL BUSINESS category$/, async () => {
    log.debug("enter Other Services of SMALL BUSINESS category");
    await homePage.navigateToOtherServices_SmallBusiness();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Other Services");
})
// ********************************************************************************************************

//***************************** links under Inside Altoro Mutual category *********************************
Then(/^Enter About Us of INSIDE ALTORO MUTUAL category$/, async () => {
    log.debug("enter About Us of INSIDE ALTORO MUTUAL category");
    await homePage.navigateToAboutUs();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("About Altoro Mutual");
})

Then(/^Enter Contact Us of INSIDE ALTORO MUTUAL category$/, async () => {
    log.debug("enter Contact Us of INSIDE ALTORO MUTUAL category");
    await homePage.navigateToContactUs();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Contact Us");
})
// ! An Error Has Occurred Page could not be found.
Then(/^Enter Locations of INSIDE ALTORO MUTUAL category$/, async () => {
    log.debug("enter Locations of INSIDE ALTORO MUTUAL category");
    await homePage.navigateToLocations();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Locations");
})

Then(/^Enter Investor Relations of INSIDE ALTORO MUTUAL category$/, async () => {
    log.debug("enter Investor Relations of INSIDE ALTORO MUTUAL category");
    await homePage.navigateInvestorRelations();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Investor Relations");
})

Then(/^Enter Press Room of INSIDE ALTORO MUTUAL category$/, async () => {
    log.debug("enter Press Room of INSIDE ALTORO MUTUAL category");
    await homePage.navigateToPressRoom();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Press Room");
})

Then(/^Enter Careers of INSIDE ALTORO MUTUAL category$/, async () => {
    log.debug("enter Careers of INSIDE ALTORO MUTUAL category");
    await homePage.navigateToCareers();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Careers at Altoro Mutual");
})

Then(/^Enter Subscribe of INSIDE ALTORO MUTUAL category$/, async () => {
    log.debug("enter Careers of INSIDE ALTORO MUTUAL category");
    await homePage.navigateToSubscribe();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Subscribe");
})

// ********************************************************************************************************


Then(/^Login with default username and password$/, async () => {
    log.debug("login with default username and password");
    await homePage.loginAccount();
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Hello Admin User");
})

Then(/^Sign off from the system$/, async () => {
    log.debug("Sign off from the system");
    await homePage.clickSignOff();
    await expect(await homePage.validateHomePage.getText('validateHomePage')).include("Online Banking with FREE Online Bill Pay");
})

Then(/^Enter with default username$/, async () => {

    log.debug("enter with default username");
    await homePage.insertUserName();
    await expect(true).to.equal(true);
})

Then(/^Enter with default password$/, async () => {

    log.debug("enter with default password");
    await homePage.insertPassword();
    await expect(true).to.equal(true);
})

Then(/^Click the login button$/, async () => {

    log.debug("click the login button");
    await homePage.clickLoginBtn();
    await expect(true).to.equal(true);
})

Then(/^I navigate to account page$/, async () => {

    log.debug("I navigate to account page");
    await expect(await homePage.validateHeading.getText('validateHeading')).include("Hello Admin User");
})

// Accept the alert from the system

Then(/^Accept the alert from the system$/, async () => {

    log.debug("Accept the alert from the system");
    await Util.VerifyAndCloseAlert("You must enter a valid password");
})

