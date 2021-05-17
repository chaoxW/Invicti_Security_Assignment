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
var AddCustomerPage_1 = require("../pages/AddCustomerPage");
var ManagerPage_1 = require("../pages/ManagerPage");
var OpenAccountPage_1 = require("../pages/OpenAccountPage");
var HomePage_1 = require("../pages/HomePage");
var log = require("../config/log4js").default;
describe("Banking project test", function () {
    return __awaiter(this, void 0, void 0, function () {
        var custData, homePage, addCustPage, managerPage, openAccountPage;
        return __generator(this, function (_a) {
            custData = require("../testdata/Cust");
            homePage = new HomePage_1.HomePage();
            addCustPage = new AddCustomerPage_1.AddCustomerPage();
            managerPage = new ManagerPage_1.ManagerPage();
            openAccountPage = new OpenAccountPage_1.OpenAccountPage();
            beforeEach(function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, protractor_1.browser.get(custData.siteurl)];
                            case 1:
                                _c.sent();
                                /*browser.getCurrentUrl().then(function(txt){
                                    log.debug(txt);
                                })*/
                                _b = (_a = log).debug;
                                return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                            case 2:
                                /*browser.getCurrentUrl().then(function(txt){
                                    log.debug(txt);
                                })*/
                                _b.apply(_a, [_c.sent()]);
                                return [2 /*return*/];
                        }
                    });
                });
            });
            xit("verify add customer & open account", function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                /*homePage.mainHeading.getText().then(function(txt){
                                    log.debug(txt);
                                    expect<any>(txt).toBe("XYZ Bank");
                                })*/
                                //expect<any>(await homePage.mainHeading.getText()).toBe("XYZ Bank");
                                //log.debug(await homePage.mainHeading.getText());
                                protractor_1.browser.sleep(2000);
                                return [4 /*yield*/, homePage.navigateToBankManagerLogin()];
                            case 1:
                                _a.sent();
                                //browser.sleep(1000);
                                return [4 /*yield*/, managerPage.navigateToAddCustomer()];
                            case 2:
                                //browser.sleep(1000);
                                _a.sent();
                                //browser.sleep(1000);
                                return [4 /*yield*/, new AddCustomerPage_1.AddCustomerPage().AddCustomer()];
                            case 3:
                                //browser.sleep(1000);
                                _a.sent();
                                //browser.sleep(1000);
                                return [4 /*yield*/, managerPage.navigateToOpenAccount()];
                            case 4:
                                //browser.sleep(1000);
                                _a.sent();
                                //browser.sleep(2000);
                                return [4 /*yield*/, openAccountPage.SelectACustomer()];
                            case 5:
                                //browser.sleep(2000);
                                _a.sent();
                                //browser.sleep(3000);
                                return [4 /*yield*/, openAccountPage.SelectDollar()];
                            case 6:
                                //browser.sleep(3000);
                                _a.sent();
                                //browser.sleep(3000);
                                return [4 /*yield*/, openAccountPage.ProcessIt()];
                            case 7:
                                //browser.sleep(3000);
                                _a.sent();
                                protractor_1.browser.sleep(3000);
                                return [2 /*return*/];
                        }
                    });
                });
            });
            it("verify add customer & open account", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                /*homePage.mainHeading.getText().then(function(txt){
                                    log.debug(txt);
                                    expect<any>(txt).toBe("XYZ Bank");
                                })*/
                                _a = expect;
                                return [4 /*yield*/, homePage.mainHeading.getText("SiteMainHeader")];
                            case 1:
                                /*homePage.mainHeading.getText().then(function(txt){
                                    log.debug(txt);
                                    expect<any>(txt).toBe("XYZ Bank");
                                })*/
                                _a.apply(void 0, [_d.sent()]).toBe("XYZ Bank");
                                _c = (_b = log).debug;
                                return [4 /*yield*/, homePage.mainHeading.getText("SiteMainHeader")];
                            case 2:
                                _c.apply(_b, [_d.sent()]);
                                protractor_1.browser.sleep(2000);
                                return [4 /*yield*/, homePage.navigateToBankManagerLogin()];
                            case 3:
                                _d.sent();
                                //browser.sleep(1000);
                                return [4 /*yield*/, managerPage.navigateToAddCustomer()];
                            case 4:
                                //browser.sleep(1000);
                                _d.sent();
                                return [4 /*yield*/, addCustPage.AddCustomer()
                                    //await addCustPage.enter2ndInput();
                                ];
                            case 5:
                                _d.sent();
                                //await addCustPage.enter2ndInput();
                                protractor_1.browser.sleep(3000);
                                return [2 /*return*/];
                        }
                    });
                });
            });
            return [2 /*return*/];
        });
    });
});
//# sourceMappingURL=BankManagerTest.js.map