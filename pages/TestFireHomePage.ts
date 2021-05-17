import { browser, element, by, protractor } from "protractor";
import { pageEl } from "../Utility/pageEl";
import { Util } from "../Utility/Util";

export class HomePage {
    Site = require("../TestData/Global");
    homePageData = require("../testdata/homepage");
    logInData = require("../testdata/loginData");
    // head link xpath
    onlinebankloginXpath = this.homePageData.onlineBankLogin;
    personalXpath = this.homePageData.personal;
    smallbusinessXpath = this.homePageData.smallBusiness;
    insidealtromutualXpath = this.homePageData.insideAltroMutual;
    // category link xpath
    personalCatXpath = this.homePageData.personalCatLk;
    smallbusinessCatXpath = this.homePageData.smallBusinessCatLk;
    insidealtromutualCatXpath = this.homePageData.insideAltroMutualCatLk;

    // links under personal category xpath
    depositproductXpath = this.homePageData.depositProductLk;
    checkingXpath = this.homePageData.checkingLk;
    loanproductsXpath = this.homePageData.loanProductsLk;
    cardsLk_personalXpath = this.homePageData.cardsLk_personal;
    investmentsinsuranceXpath = this.homePageData.investmentsInsuranceLk;
    otherservices_personal = this.homePageData.otherServicesLk_personal;

    // links under small business category xpath
    depositproductsXpath = this.homePageData.depositProductsLk;
    lendingservicesXpath = this.homePageData.lendingServicesLk;
    cardsLk_smallbusinessXpath = this.homePageData.cardsLk_smallBusiness;
    insuranceXpath = this.homePageData.insuranceLk;
    retirementXpath = this.homePageData.retirementLk;
    otherservices_smallbusinessXpath = this.homePageData.otherServicesLk_smallBusiness;

    // links under Inside Altoro category xpath
    aboutUsXpath = this.homePageData.aboutUsLk;
    contactUsXpath = this.homePageData.contactUsLk;
    locationsXpath = this.homePageData.locationsLk;
    investorRelationsXpath = this.homePageData.investorRelationsLk;
    pressRoomXpath = this.homePageData.pressRoomLk;
    careersXpath = this.homePageData.careersLk;
    subscribeXpath = this.homePageData.subscribeLk;

    // sign in
    signinXpath = this.homePageData.signIn;
    // sign off
    signoffXpath = this.homePageData.signOff;
    // head link validation class name
    validateHeadingCN = this.homePageData.validateHeading;
    // homepage validation xpath
    homepageValidateXpath = this.homePageData.homePageValidate;
    homelogoXpath = this.homePageData.homeLogo;
    // input username password xpath
    usernameXpath = this.homePageData.usernameInput;
    passwordXpath = this.homePageData.passwordInput;
    loginbtnXpath = this.homePageData.loginBtn;

    // username password data
    username = this.logInData.default_username;
    password = this.logInData.default_password;

    // head link
    onlineBankLogin = new pageEl(by.xpath(this.onlinebankloginXpath));
    personal = new pageEl(by.xpath(this.personalXpath));
    smallBusiness = new pageEl(by.xpath(this.smallbusinessXpath));
    insideAltroMutual = new pageEl(by.xpath(this.insidealtromutualXpath));

    // category link
    personalCat = new pageEl(by.xpath(this.personalCatXpath));
    smallBusinessCat = new pageEl(by.xpath(this.smallbusinessCatXpath));
    insideAltroMutualCat = new pageEl(by.xpath(this.insidealtromutualCatXpath));

    // links under personal category
    depositProduct = new pageEl(by.xpath(this.depositproductXpath));
    checking = new pageEl(by.xpath(this.checkingXpath));
    loanProducts = new pageEl(by.xpath(this.loanproductsXpath));
    cards_personal = new pageEl(by.xpath(this.cardsLk_personalXpath));
    investmentsInsurance = new pageEl(by.xpath(this.investmentsinsuranceXpath));
    otherServices_personal = new pageEl(by.xpath(this.otherservices_personal));

    // links under small business category
    depositProducts = new pageEl(by.xpath(this.depositproductsXpath));
    lendingServices = new pageEl(by.xpath(this.lendingservicesXpath));
    cards_smallBusiness = new pageEl(by.xpath(this.cardsLk_smallbusinessXpath));
    insurance = new pageEl(by.xpath(this.insuranceXpath));
    retirement = new pageEl(by.xpath(this.retirementXpath));
    otherServices_smallBusiness = new pageEl(by.xpath(this.otherservices_smallbusinessXpath));

    // links under inside Altro Mutual category
    aboutUs = new pageEl(by.xpath(this.aboutUsXpath));
    contactUs = new pageEl(by.xpath(this.contactUsXpath));
    locations = new pageEl(by.xpath(this.locationsXpath));
    investorRelations = new pageEl(by.xpath(this.investorRelationsXpath));
    pressRoom = new pageEl(by.xpath(this.pressRoomXpath));
    careers = new pageEl(by.xpath(this.careersXpath));
    subscribe = new pageEl(by.xpath(this.subscribeXpath));

    // sign in
    signIn = new pageEl(by.xpath(this.signinXpath));
    // sign off
    signOff = new pageEl(by.xpath(this.signoffXpath));
    // validation class name fetch text for subservices
    validateHeading = new pageEl(by.className(this.validateHeadingCN));
    validateHomePage = new pageEl(by.xpath(this.homepageValidateXpath));
    // home logo
    homeLogo = new pageEl(by.id(this.homelogoXpath));
    // username password login button
    userName = new pageEl(by.xpath(this.usernameXpath));
    passWord = new pageEl(by.xpath(this.passwordXpath));
    loginBtn = new pageEl(by.xpath(this.loginbtnXpath));

    // * sign in link
    async navigateToSignIN() {
        await this.signIn.click();
    }
    // * homapge link
    async navigateToHomePage() {
        await browser.get(this.Site.demoTestFireUrl);
    }
    //*  personal head link
    async navigateToPersonal() {
        await this.personal.click();
    }
    //* personal category link
    async navigateToPersonalCat() {
        await this.personalCat.click();
    }
    //*********** under personal category links ***************
    async navigateToDepositProduct() {
        await this.depositProduct.click();
    }

    async navigateToChecking() {
        await this.checking.click();
    }

    async navigateToLoanProducts() {
        await this.loanProducts.click();
    }

    async navigateToCardsPersonal() {
        await this.cards_personal.click();
    }

    async navigateToInvestmentsInsurance() {
        await this.investmentsInsurance.click();
    }

    async navigateToOtherServicesPersonal() {
        await this.otherServices_personal.click();
    }
    //*********************************************************

    // * small business head link
    async navigateToSmallBusiness() {
        await this.smallBusiness.click();
    }

    // * small business category link
    async navigateToSmallBusinessCat() {
        await this.smallBusinessCat.click();
    }

    //******** under small business category links ************
    async navigateToDepositProducts() {
        await this.depositProducts.click();
    }

    async navigateToLendingServices() {
        await this.lendingServices.click();
    }

    async navigateToCards_smallBusiness() {
        await this.cards_smallBusiness.click();
    }

    async navigateToInsurance() {
        await this.insurance.click();
    }

    async navigateToRetirement() {
        await this.retirement.click();
    }

    async navigateToOtherServices_SmallBusiness() {
        await this.otherServices_smallBusiness.click();
    }
    //*********************************************************

    //*  inside altoro mutual head link
    async navigateToInsideAltoroMutual() {
        await this.insideAltroMutual.click();
    }
    //* inside altoro mutual category link
    async navigateToInsideAltoroMutualCat() {
        await this.insideAltroMutualCat.click();
    }
    //************* under inside altoro mutual links **********
    async navigateToAboutUs() {
        await this.aboutUs.click();
    }

    async navigateToContactUs() {
        await this.contactUs.click();
    }

    async navigateToLocations() {
        await this.locations.click();
    }

    async navigateInvestorRelations() {
        await this.investorRelations.click();
    }

    async navigateToPressRoom() {
        await this.pressRoom.click();
    }

    async navigateToCareers() {
        await this.careers.click();
    }

    async navigateToSubscribe() {
        await this.subscribe.click();
    }
    //*********************************************************

    async navigateToOnlineBankingLogin() {
        await this.onlineBankLogin.click();
    }

    async loginAccount() {
        await this.userName.sendKeys(this.username);
        await this.passWord.sendKeys(this.password);
        await this.loginBtn.click();
        await browser.sleep(1000);
    }

    async insertUserName() {
        await this.userName.sendKeys(this.username);
    }

    async insertPassword() {
        await this.passWord.sendKeys(this.password);
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async clickSignOff() {
        await this.signOff.click();
    }
}