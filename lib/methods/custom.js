"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("../auth");
var fetch_1 = require("../fetch");
exports.default = (function (url, params) {
    return auth_1.getToken().then(fetch_1.default(url, params));
});
//# sourceMappingURL=custom.js.map