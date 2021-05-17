"use strict";
var log4js = require('log4js');
log4js.configure('./config/log4js.json');
exports.default = log4js.getLogger('default');
//# sourceMappingURL=log4js.js.map