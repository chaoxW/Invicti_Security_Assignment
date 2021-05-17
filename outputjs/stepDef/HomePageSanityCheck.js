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
var cucumber_1 = require("cucumber");
var TestFireHomePage_1 = require("../pages/TestFireHomePage");
var Util_1 = require("../Utility/Util");
var _ = require('lodash');
var expect = require('chai').expect;
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(60 * 1000);
var log = require("../config/log4js").default;
var homePage = new TestFireHomePage_1.HomePage();
// * Starting
cucumber_1.Given(/^I am on Test Fire home page$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("Starting");
                log.debug("I am on Test Fire home page");
                return [4 /*yield*/, homePage.navigateToHomePage()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHomePage.getText('validateHomePage')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Online Banking with FREE Online Bill Pay")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
// * sing in 
cucumber_1.Then(/^I navigate to Sign In$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("Navigate to sign in");
                return [4 /*yield*/, homePage.navigateToSignIN()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Online Banking Login")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
// ******************************************* head links ********************************************
cucumber_1.Then(/^Enter the ONLINE BANKING LOGIN head link$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter ONLINE BANKING LOGIN head link");
                return [4 /*yield*/, homePage.navigateToOnlineBankingLogin()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Online Banking Login")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the PERSONAL head link$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter PERSONAL head link");
                return [4 /*yield*/, homePage.navigateToPersonal()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Personal")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the SMALL BUSINESS head link$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter SMALL BUSINESS head link");
                return [4 /*yield*/, homePage.navigateToSmallBusiness()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Small Business")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the INSIDE ALTORO MUTUAL head link$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter INSIDE ALTORO MUTUAL head link");
                return [4 /*yield*/, homePage.navigateToInsideAltoroMutual()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Inside Altoro")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
// ***************************************************************************************************
// *************************************** category links ********************************************
cucumber_1.Then(/^Enter the PERSONAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter PERSONAL category");
                return [4 /*yield*/, homePage.navigateToPersonalCat()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Personal")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the SMALL BUSINESS category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter SMALL BUSINESS");
                return [4 /*yield*/, homePage.navigateToSmallBusinessCat()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Small Business")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the INSIDE ALTORO MUTUAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter INSIDE ALTORO MUTUAL");
                return [4 /*yield*/, homePage.navigateToInsideAltoroMutualCat()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Inside Altoro")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
// ***************************************************************************************************
// *********************************** links under personal category *********************************
cucumber_1.Then(/^Enter the Deposit Product of PERSONAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Deposit Product of PERSONAL category");
                return [4 /*yield*/, homePage.navigateToDepositProduct()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Deposit Products")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Checking of PERSONAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Checking of PERSONAL category");
                return [4 /*yield*/, homePage.navigateToChecking()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Checking")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Loan Products of PERSONAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Loan Products of PERSONAL category");
                return [4 /*yield*/, homePage.navigateToLoanProducts()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Loan Products")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Cards of PERSONAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Cards of PERSONAL category");
                return [4 /*yield*/, homePage.navigateToCardsPersonal()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Cards")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Investments & Insurance of PERSONAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Investments & Insurance of PERSONAL category");
                return [4 /*yield*/, homePage.navigateToInvestmentsInsurance()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Investments & Insurance")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Other Services of PERSONAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Other Services  of PERSONAL category");
                return [4 /*yield*/, homePage.navigateToOtherServicesPersonal()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Other Personal Services")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
// ********************************************************************************************************
//***************************** links under small business category ***************************************
cucumber_1.Then(/^Enter the Deposit Products of SMALL BUSINESS category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Other Services of SMALL BUSINESS category");
                return [4 /*yield*/, homePage.navigateToDepositProducts()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Deposit Products")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Lending Services of SMALL BUSINESS category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Lending Services of SMALL BUSINESS category");
                return [4 /*yield*/, homePage.navigateToLendingServices()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Lending")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Cards of SMALL BUSINESS category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Cards of SMALL BUSINESS category");
                return [4 /*yield*/, homePage.navigateToCards_smallBusiness()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Cards")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Insurance of SMALL BUSINESS category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Insurance of SMALL BUSINESS category");
                return [4 /*yield*/, homePage.navigateToInsurance()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Insurance")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Retirement of SMALL BUSINESS category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Retirement of SMALL BUSINESS category");
                return [4 /*yield*/, homePage.navigateToRetirement()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Retirement")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter the Other Services of SMALL BUSINESS category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Other Services of SMALL BUSINESS category");
                return [4 /*yield*/, homePage.navigateToOtherServices_SmallBusiness()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Other Services")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
// ********************************************************************************************************
//***************************** links under Inside Altoro Mutual category *********************************
cucumber_1.Then(/^Enter About Us of INSIDE ALTORO MUTUAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter About Us of INSIDE ALTORO MUTUAL category");
                return [4 /*yield*/, homePage.navigateToAboutUs()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("About Altoro Mutual")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter Contact Us of INSIDE ALTORO MUTUAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Contact Us of INSIDE ALTORO MUTUAL category");
                return [4 /*yield*/, homePage.navigateToContactUs()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Contact Us")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
// ! An Error Has Occurred Page could not be found.
cucumber_1.Then(/^Enter Locations of INSIDE ALTORO MUTUAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Locations of INSIDE ALTORO MUTUAL category");
                return [4 /*yield*/, homePage.navigateToLocations()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Locations")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter Investor Relations of INSIDE ALTORO MUTUAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Investor Relations of INSIDE ALTORO MUTUAL category");
                return [4 /*yield*/, homePage.navigateInvestorRelations()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Investor Relations")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter Press Room of INSIDE ALTORO MUTUAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Press Room of INSIDE ALTORO MUTUAL category");
                return [4 /*yield*/, homePage.navigateToPressRoom()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Press Room")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter Careers of INSIDE ALTORO MUTUAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Careers of INSIDE ALTORO MUTUAL category");
                return [4 /*yield*/, homePage.navigateToCareers()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Careers at Altoro Mutual")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter Subscribe of INSIDE ALTORO MUTUAL category$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("enter Careers of INSIDE ALTORO MUTUAL category");
                return [4 /*yield*/, homePage.navigateToSubscribe()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Subscribe")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
// ********************************************************************************************************
cucumber_1.Then(/^Login with default username and password$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("login with default username and password");
                return [4 /*yield*/, homePage.loginAccount()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Hello Admin User")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Sign off from the system$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("Sign off from the system");
                return [4 /*yield*/, homePage.clickSignOff()];
            case 1:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, homePage.validateHomePage.getText('validateHomePage')];
            case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Online Banking with FREE Online Bill Pay")];
            case 3:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter with default username$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                log.debug("enter with default username");
                return [4 /*yield*/, homePage.insertUserName()];
            case 1:
                _a.sent();
                return [4 /*yield*/, expect(true).to.equal(true)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter with default password$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                log.debug("enter with default password");
                return [4 /*yield*/, homePage.insertPassword()];
            case 1:
                _a.sent();
                return [4 /*yield*/, expect(true).to.equal(true)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Click the login button$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                log.debug("click the login button");
                return [4 /*yield*/, homePage.clickLoginBtn()];
            case 1:
                _a.sent();
                return [4 /*yield*/, expect(true).to.equal(true)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I navigate to account page$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                log.debug("I navigate to account page");
                _a = expect;
                return [4 /*yield*/, homePage.validateHeading.getText('validateHeading')];
            case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).include("Hello Admin User")];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Accept the alert from the system$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                log.debug("Accept the alert from the system");
                return [4 /*yield*/, Util_1.Util.VerifyAndCloseAlert("You must enter a valid password")];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=HomePageSanityCheck.js.map