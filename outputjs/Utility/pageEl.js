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
var log = require("../config/log4js").default;
var pageEl = /** @class */ (function () {
    function pageEl(byEl) {
        this.index = 0;
        this.EC = protractor_1.protractor.ExpectedConditions;
        this.byEL = byEl;
    }
    pageEl.prototype.click = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getElement()];
                    case 1: return [4 /*yield*/, (_a.sent()).click()];
                    case 2:
                        _a.sent();
                        log.debug("Clicked on " + this.byEL);
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        log.debug(ex_1);
                        throw new Error(ex_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    pageEl.prototype.sendKeys = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getElement()];
                    case 1: return [4 /*yield*/, (_a.sent()).sendKeys(text)];
                    case 2:
                        _a.sent();
                        log.debug("Entered " + text + " on " + this.byEL);
                        return [3 /*break*/, 4];
                    case 3:
                        ex_2 = _a.sent();
                        log.debug(ex_2);
                        throw new Error(ex_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    pageEl.prototype.getText = function (elementText) {
        return __awaiter(this, void 0, void 0, function () {
            var text, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getElement()];
                    case 1: return [4 /*yield*/, (_a.sent()).getText()];
                    case 2:
                        text = _a.sent();
                        //log.debug("Fetched  value as "+ text + " from " + this.byEL);
                        log.debug("Fetched value as " + text + " from " + elementText);
                        return [2 /*return*/, text];
                    case 3:
                        ex_3 = _a.sent();
                        log.debug(ex_3);
                        throw new Error(ex_3);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    pageEl.prototype.waitForEl = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(this.EC.presenceOf(protractor_1.element(this.byEL)), 30000, 'Element didnot found')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pageEl.prototype.getElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitForEl()];
                    case 1:
                        _a.sent();
                        if (this.index == 0) {
                            this.el = protractor_1.element(this.byEL).getWebElement();
                        }
                        else {
                            this.el = protractor_1.element.all(this.byEL).get(this.index).getWebElement();
                        }
                        return [2 /*return*/, this.el];
                }
            });
        });
    };
    pageEl.prototype.getElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitForEl()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, protractor_1.element.all(this.byEL).asElementFinders_()];
                }
            });
        });
    };
    pageEl.prototype.size = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getElements()];
                    case 1: return [2 /*return*/, (_a.sent()).length];
                }
            });
        });
    };
    pageEl.prototype.get = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.index = index;
                return [2 /*return*/, this];
            });
        });
    };
    pageEl.prototype.getId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getElement()];
                    case 1: return [2 /*return*/, (_a.sent()).getId()];
                }
            });
        });
    };
    //elem.get(9).getText();
    //this.radiobtns.get(6).click()
    // async selectByOptionText(text: string) {
    //     try {
    //         await (await this.getElement()).findElement(by.xpath('option[.= "' + text + '"]')).click();
    //         log.debug("Selected " + text + " from " + this.byEL);
    //     }
    //     catch (ex) {
    //         log.debug(ex);
    //         throw new Error(ex);
    //     }
    // }
    pageEl.prototype.selectByOptionText = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getElement()];
                    case 1: return [4 /*yield*/, (_a.sent()).findElement(protractor_1.by.xpath('option[.= "' + text + '"]')).click()];
                    case 2:
                        _a.sent();
                        log.debug("Selected " + text + " from " + this.byEL);
                        return [3 /*break*/, 4];
                    case 3:
                        ex_4 = _a.sent();
                        log.debug(ex_4);
                        throw new Error(ex_4);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return pageEl;
}());
exports.pageEl = pageEl;
//# sourceMappingURL=pageEl.js.map