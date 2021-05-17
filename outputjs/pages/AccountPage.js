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
var log = require("../config/log4js").default;
var AccountPage = /** @class */ (function () {
    function AccountPage() {
        this.accountPageData = require("../testdata/AccountPage");
        // selectAccounts = new pageEl(by.xpath("//select[@id='listAccounts']"))
        this.fisrtAccount = this.accountPageData.fisrtAccount;
        this.secondAccount = this.accountPageData.secondAccount;
        this.selectaccountsXpath = this.accountPageData.selectAccounts;
        this.enteraccountBtnXpath = this.accountPageData.enterAccountBtn;
        this.viewaccountsummaryXpath = this.accountPageData.viewAccountSummaryLk;
        this.enterAccountBtn = new pageEl_1.pageEl(protractor_1.by.xpath(this.enteraccountBtnXpath));
        this.selectAccounts = new pageEl_1.pageEl(protractor_1.by.xpath(this.selectaccountsXpath));
        this.viewAccountSummary = new pageEl_1.pageEl(protractor_1.by.xpath(this.viewaccountsummaryXpath));
    }
    AccountPage.prototype.SelectFirstAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fisrtAccount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fisrtAccount = this.fisrtAccount;
                        log.debug(fisrtAccount);
                        return [4 /*yield*/, this.selectAccounts.selectByOptionText(fisrtAccount)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.SelectSecondAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var secondAccount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        secondAccount = this.secondAccount;
                        log.debug(secondAccount);
                        return [4 /*yield*/, this.selectAccounts.selectByOptionText(secondAccount)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.selectACustomer = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.debug(account);
                        return [4 /*yield*/, this.selectAccounts.selectByOptionText(account)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.navigateToAccountPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.enterAccountBtn.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.navigateToViewAccountSummary = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewAccountSummary.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AccountPage;
}());
exports.AccountPage = AccountPage;
//# sourceMappingURL=AccountPage.js.map