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
var HomePage_1 = require("../pages/HomePage");
var AddCustomerPage_1 = require("../pages/AddCustomerPage");
var OpenAccountPage_1 = require("../pages/OpenAccountPage");
var ManagerPage_1 = require("../pages/ManagerPage");
var protractor_1 = require("protractor");
var _ = require('lodash');
//let chai = require('chai').use(require('chai-as-promised'));
//let expect = chai.expect;
var expect = require('chai').expect;
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(60 * 1000);
var log = require("../config/log4js").default;
var homePage = new HomePage_1.HomePage();
var addCustPage = new AddCustomerPage_1.AddCustomerPage();
var openAccount = new OpenAccountPage_1.OpenAccountPage();
cucumber_1.Given(/^I am on XYZ Bank home page$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                log.debug("Starting");
                return [4 /*yield*/, homePage.navigateToHomePage()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I go to Add Customer screen$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.navigateToBankManagerLogin()];
            case 1:
                _a.sent();
                return [4 /*yield*/, new ManagerPage_1.ManagerPage().navigateToAddCustomer()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I enter ([^"]*), ([^"]*), ([^"]*) to create a customer$/, function (fname, lname, pcode) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                log.debug(fname + lname + pcode);
                return [4 /*yield*/, addCustPage.addCustomer(fname, lname, pcode)];
            case 1:
                _a.sent();
                expect(true).to.equal(true);
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Given(/^I am on Open Account Page$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, new ManagerPage_1.ManagerPage().navigateToOpenAccount()];
            case 1:
                _b.sent();
                return [4 /*yield*/, protractor_1.browser.sleep(2000)];
            case 2:
                _b.sent();
                _a = expect;
                return [4 /*yield*/, openAccount.Process.getText('ProcessBtn')];
            case 3: 
            //log.debug(await Util.getText(openAccount.Process));
            return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).to.equal("Process")];
            case 4:
                //log.debug(await Util.getText(openAccount.Process));
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I select customerName as customer$/, function (table) { return __awaiter(void 0, void 0, void 0, function () {
    var name, rows;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = '';
                log.debug(table);
                rows = table.hashes();
                name = rows[0].customerName;
                log.debug(name);
                return [4 /*yield*/, openAccount.selectACustomer(name)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I select currency as "([^"]*)"$/, function (currency) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, openAccount.selectACurrency(currency)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I should click on Process to create an account$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, openAccount.ProcessIt()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=Customers.js.map