"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.constants = exports.typings = void 0;
var auth_1 = require("./auth");
var findByUsername_1 = require("./methods/findByUsername");
var findById_1 = require("./methods/findById");
var getProgression_1 = require("./methods/getProgression");
var getPlaytime_1 = require("./methods/getPlaytime");
var getRanks_1 = require("./methods/getRanks");
var getStats_1 = require("./methods/getStats");
var getStatus_1 = require("./methods/getStatus");
var validateUsername_1 = require("./methods/validateUsername");
var custom_1 = require("./methods/custom");
var getNews_1 = require("./methods/getNews");
var getNewsById_1 = require("./methods/getNewsById");
exports.typings = require("./typings");
exports.constants = require("./constants");
exports.utils = require("./utils");
var checkQueryLimit = function (_a) {
    var method = _a.method, platform = _a.platform, query = _a.query, options = _a.options, limit = _a.limit;
    var queryArray = Array.isArray(query) ? query : [query];
    if (queryArray.length > limit)
        return Promise.reject(new TypeError("You can't pass more than " + limit + " ids/usernames"));
    return method(platform, queryArray, options);
};
var R6API = (function () {
    function R6API(options) {
        this.findByUsername = function (platform, query) {
            return checkQueryLimit({ method: findByUsername_1.default, platform: platform, query: query, limit: 50 });
        };
        this.findById = function (platform, query, options) {
            return checkQueryLimit({ method: findById_1.default, platform: platform, query: query, options: options, limit: 50 });
        };
        this.getPlaytime = function (platform, query) {
            return checkQueryLimit({ method: getPlaytime_1.default, platform: platform, query: query, limit: 200 });
        };
        this.getProgression = function (platform, query) {
            return checkQueryLimit({ method: getProgression_1.default, platform: platform, query: query, limit: 200 });
        };
        this.getRanks = function (platform, query, options) {
            return checkQueryLimit({ method: getRanks_1.default, platform: platform, query: query, options: options, limit: 200 });
        };
        this.getStats = function (platform, query, options) {
            return checkQueryLimit({ method: getStats_1.default, platform: platform, query: query, options: options, limit: 200 });
        };
        this.getStatus = getStatus_1.default;
        this.validateUsername = validateUsername_1.default;
        this.custom = custom_1.default;
        this.getNews = getNews_1.default;
        this.getNewsById = getNewsById_1.default;
        this.getAuth = auth_1.getAuth;
        this.getToken = auth_1.getToken;
        this.setCredentials = auth_1.setCredentials;
        this.setTokenFileLocation = auth_1.setTokenFileLocation;
        auth_1.setCredentials(options.email, options.password);
    }
    return R6API;
}());
exports.default = R6API;
//# sourceMappingURL=index.js.map