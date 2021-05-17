"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var pageEl_1 = require("../Utility/pageEl");
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.Site = require("../TestData/Global");
        this.homePageData = require("../testdata/homepage");
        this.logInData = require("../testdata/loginData");
        // head link xpath
        this.onlinebankloginXpath = this.homePageData.onlineBankLogin;
        this.personalXpath = this.homePageData.personal;
        this.smallbusinessXpath = this.homePageData.smallBusiness;
        this.insidealtromutualXpath = this.homePageData.insideAltroMutual;
        // category link xpath
        this.personalCatXpath = this.homePageData.personalCatLk;
        this.smallbusinessCatXpath = this.homePageData.smallBusinessCatLk;
        this.insidealtromutualCatXpath = this.homePageData.insideAltroMutualCatLk;
        // links under personal category xpath
        this.depositproductXpath = this.homePageData.depositProductLk;
        this.checkingXpath = this.homePageData.checkingLk;
        this.loanproductsXpath = this.homePageData.loanProductsLk;
        this.cardsLk_personalXpath = this.homePageData.cardsLk_personal;
        this.investmentsinsuranceXpath = this.homePageData.investmentsInsuranceLk;
        this.otherservices_personal = this.homePageData.otherServicesLk_personal;
        // links under small business category xpath
        this.depositproductsXpath = this.homePageData.depositProductsLk;
        this.lendingservicesXpath = this.homePageData.lendingServicesLk;
        this.cardsLk_smallbusinessXpath = this.homePageData.cardsLk_smallBusiness;
        this.insuranceXpath = this.homePageData.insuranceLk;
        this.retirementXpath = this.homePageData.retirementLk;
        this.otherservices_smallbusinessXpath = this.homePageData.otherServicesLk_smallBusiness;
        // links under Inside Altoro category xpath
        this.aboutUsXpath = this.homePageData.aboutUsLk;
        this.contactUsXpath = this.homePageData.contactUsLk;
        this.locationsXpath = this.homePageData.locationsLk;
        this.investorRelationsXpath = this.homePageData.investorRelationsLk;
        this.pressRoomXpath = this.homePageData.pressRoomLk;
        this.careersXpath = this.homePageData.careersLk;
        this.subscribeXpath = this.homePageData.subscribeLk;
        // sign in
        this.signinXpath = this.homePageData.signIn;
        // sign off
        this.signoffXpath = this.homePageData.signOff;
        // head link validation class name
        this.validateHeadingCN = this.homePageData.validateHeading;
        // homepage validation xpath
        this.homepageValidateXpath = this.homePageData.homePageValidate;
        this.homelogoXpath = this.homePageData.homeLogo;
        // input username password xpath
        this.usernameXpath = this.homePageData.usernameInput;
        this.passwordXpath = this.homePageData.passwordInput;
        this.loginbtnXpath = this.homePageData.loginBtn;
        // username password data
        this.username = this.logInData.default_username;
        this.password = this.logInData.default_password;
        // head link
        this.onlineBankLogin = new pageEl_1.pageEl(protractor_1.by.xpath(this.onlinebankloginXpath));
        this.personal = new pageEl_1.pageEl(protractor_1.by.xpath(this.personalXpath));
        this.smallBusiness = new pageEl_1.pageEl(protractor_1.by.xpath(this.smallbusinessXpath));
        this.insideAltroMutual = new pageEl_1.pageEl(protractor_1.by.xpath(this.insidealtromutualXpath));
        // category link
        this.personalCat = new pageEl_1.pageEl(protractor_1.by.xpath(this.personalCatXpath));
        this.smallBusinessCat = new pageEl_1.pageEl(protractor_1.by.xpath(this.smallbusinessCatXpath));
        this.insideAltroMutualCat = new pageEl_1.pageEl(protractor_1.by.xpath(this.insidealtromutualCatXpath));
        // links under personal category
        this.depositProduct = new pageEl_1.pageEl(protractor_1.by.xpath(this.depositproductXpath));
        this.checking = new pageEl_1.pageEl(protractor_1.by.xpath(this.checkingXpath));
        this.loanProducts = new pageEl_1.pageEl(protractor_1.by.xpath(this.loanproductsXpath));
        this.cards_personal = new pageEl_1.pageEl(protractor_1.by.xpath(this.cardsLk_personalXpath));
        this.investmentsInsurance = new pageEl_1.pageEl(protractor_1.by.xpath(this.investmentsinsuranceXpath));
        this.otherServices_personal = new pageEl_1.pageEl(protractor_1.by.xpath(this.otherservices_personal));
        // links under small business category
        this.depositProducts = new pageEl_1.pageEl(protractor_1.by.xpath(this.depositproductsXpath));
        this.lendingServices = new pageEl_1.pageEl(protractor_1.by.xpath(this.lendingservicesXpath));
        this.cards_smallBusiness = new pageEl_1.pageEl(protractor_1.by.xpath(this.cardsLk_smallbusinessXpath));
        this.insurance = new pageEl_1.pageEl(protractor_1.by.xpath(this.insuranceXpath));
        this.retirement = new pageEl_1.pageEl(protractor_1.by.xpath(this.retirementXpath));
        this.otherServices_smallBusiness = new pageEl_1.pageEl(protractor_1.by.xpath(this.otherservices_smallbusinessXpath));
        // links under inside Altro Mutual category
        this.aboutUs = new pageEl_1.pageEl(protractor_1.by.xpath(this.aboutUsXpath));
        this.contactUs = new pageEl_1.pageEl(protractor_1.by.xpath(this.contactUsXpath));
        this.locations = new pageEl_1.pageEl(protractor_1.by.xpath(this.locationsXpath));
        this.investorRelations = new pageEl_1.pageEl(protractor_1.by.xpath(this.investorRelationsXpath));
        this.pressRoom = new pageEl_1.pageEl(protractor_1.by.xpath(this.pressRoomXpath));
        this.careers = new pageEl_1.pageEl(protractor_1.by.xpath(this.careersXpath));
        this.subscribe = new pageEl_1.pageEl(protractor_1.by.xpath(this.subscribeXpath));
        // sign in
        this.signIn = new pageEl_1.pageEl(protractor_1.by.xpath(this.signinXpath));
        // sign off
        this.signOff = new pageEl_1.pageEl(protractor_1.by.xpath(this.signoffXpath));
        // validation class name fetch text for subservices
        this.validateHeading = new pageEl_1.pageEl(protractor_1.by.className(this.validateHeadingCN));
        this.validateHomePage = new pageEl_1.pageEl(protractor_1.by.xpath(this.homepageValidateXpath));
        // home logo
        this.homeLogo = new pageEl_1.pageEl(protractor_1.by.id(this.homelogoXpath));
        // username password login button
        this.userName = new pageEl_1.pageEl(protractor_1.by.xpath(this.usernameXpath));
        this.passWord = new pageEl_1.pageEl(protractor_1.by.xpath(this.passwordXpath));
        this.loginBtn = new pageEl_1.pageEl(protractor_1.by.xpath(this.loginbtnXpath));
    }
    // * sign in link
    HomePage.prototype.navigateToSignIN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signIn.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // * homapge link
    HomePage.prototype.navigateToHomePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get(this.Site.demoTestFireUrl)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //*  personal head link
    HomePage.prototype.navigateToPersonal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.personal.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //* personal category link
    HomePage.prototype.navigateToPersonalCat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.personalCat.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //*********** under personal category links ***************
    HomePage.prototype.navigateToDepositProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.depositProduct.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToChecking = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checking.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToLoanProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loanProducts.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToCardsPersonal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cards_personal.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToInvestmentsInsurance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.investmentsInsurance.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToOtherServicesPersonal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.otherServices_personal.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //*********************************************************
    // * small business head link
    HomePage.prototype.navigateToSmallBusiness = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.smallBusiness.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // * small business category link
    HomePage.prototype.navigateToSmallBusinessCat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.smallBusinessCat.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //******** under small business category links ************
    HomePage.prototype.navigateToDepositProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.depositProducts.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToLendingServices = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lendingServices.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToCards_smallBusiness = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cards_smallBusiness.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToInsurance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.insurance.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToRetirement = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retirement.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToOtherServices_SmallBusiness = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.otherServices_smallBusiness.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //*********************************************************
    //*  inside altoro mutual head link
    HomePage.prototype.navigateToInsideAltoroMutual = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.insideAltroMutual.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //* inside altoro mutual category link
    HomePage.prototype.navigateToInsideAltoroMutualCat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.insideAltroMutualCat.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //************* under inside altoro mutual links **********
    HomePage.prototype.navigateToAboutUs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.aboutUs.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToContactUs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contactUs.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToLocations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.locations.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateInvestorRelations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.investorRelations.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToPressRoom = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pressRoom.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToCareers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.careers.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToSubscribe = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subscribe.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //*********************************************************
    HomePage.prototype.navigateToOnlineBankingLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onlineBankLogin.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loginAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userName.sendKeys(this.username)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.passWord.sendKeys(this.password)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loginBtn.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.insertUserName = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userName.sendKeys(this.username)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.insertPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.passWord.sendKeys(this.password)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickLoginBtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loginBtn.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickSignOff = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signOff.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=TestFireHomePage.js.map