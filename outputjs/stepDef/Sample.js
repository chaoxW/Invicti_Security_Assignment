"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var _ = require('lodash');
cucumber_1.Given(/^Profile entry screen$/, function () {
    console.log("Profile entry screen");
});
cucumber_1.When(/^Enter Name ([^"]*)$/, function (name) {
    console.log("Enter Name " + name);
});
cucumber_1.Then(/^Enter Tool ([^"]*)$/, function (Tool) {
    console.log("Enter Tool " + Tool);
});
cucumber_1.Then(/^Enter Exp ([^"]*)$/, function (Exp) {
    console.log("Enter Exp " + Exp);
});
cucumber_1.Then(/^validate profiles saved with out error$/, function () {
    console.log("validate profiles saved with out error");
});
cucumber_1.Given(/^Profiles report screen$/, function () {
    console.log("Profiles report screen");
});
cucumber_1.When(/^Fetch the profiles$/, function () {
    console.log("Fetch the profiles");
});
cucumber_1.Then(/^Validate profiles$/, function (table) {
    console.log("validate profiles - Display all profiles");
    var rows = table.hashes(); //based on header fetch the value, header is the key
    _.each(rows, function (row) {
        console.log(row.Name + " " + row.Tool + " " + row.Exp);
    });
    /* var rows = table.rows(); //retuns each row as object excluding 1st row
    rows.forEach(function(value){
      console.log(value[0] + " " + value[1] + " " + value[2]);
    }) */
    /* | Key | Value|
    | UserName | "qavbox"|
    | Password | "qavbox123" |
    var rows = table.rowsHash(); //table has to have 2 column data, excluding 1st row, column acts as key
    console.log(rows.UserName);
    console.log(rows.Password); */
});
//# sourceMappingURL=Sample.js.map