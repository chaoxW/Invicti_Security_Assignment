"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var log = require("../config/log4js").default;
describe("Fetch the params / global file parameters", function () {
    it("print the global parameters", function () {
        console.log("Reading conf.ts params section");
        console.log("Getting single key value - " + protractor_1.browser.params.appUrl);
        var customers = protractor_1.browser.params.customer;
        console.log(customers);
        for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
            var customer = customers_1[_i];
            console.log(customer);
            console.log(customer.firstName);
            console.log(customer.lastName);
            console.log(customer.postCode);
        }
    });
    xit("print the global  appglobals.ts parameters", function () {
        console.log("Reading appglobals.ts params section");
        console.log("Getting single key value - " + protractor_1.browser.appGlobal.appUrl);
        var customers = protractor_1.browser.appGlobal.customer;
        console.log(customers);
        for (var _i = 0, customers_2 = customers; _i < customers_2.length; _i++) {
            var customer = customers_2[_i];
            console.log(customer);
            console.log(customer.firstName);
            console.log(customer.lastName);
            console.log(customer.postCode);
        }
    });
});
//# sourceMappingURL=GlobalSpec.js.map