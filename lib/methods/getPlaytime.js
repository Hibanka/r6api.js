"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("../auth");
var fetch_1 = require("../fetch");
var utils_1 = require("../utils");
var statGetter = function (obj, id, stat, type) {
    return obj.results[id]["" + stat + type + "_timeplayed:infinite"] || 0;
};
exports.default = (function (platform, ids) {
    return auth_1.getToken()
        .then(fetch_1.default(utils_1.URLS.PLAYTIME(platform, ids)))
        .then(function (res) {
        return Object.keys(res.results).map(function (id) { return ({
            id: id,
            pvp: {
                general: statGetter(res, id, 'general', 'pvp'),
                ranked: statGetter(res, id, 'ranked', 'pvp'),
                casual: statGetter(res, id, 'casual', 'pvp'),
                custom: statGetter(res, id, 'custom', 'pvp'),
                other: statGetter(res, id, 'general', 'pvp') -
                    (statGetter(res, id, 'ranked', 'pvp') +
                        statGetter(res, id, 'casual', 'pvp') +
                        statGetter(res, id, 'custom', 'pvp'))
            },
            pve: {
                general: statGetter(res, id, 'general', 'pve')
            }
        }); });
    });
});
//# sourceMappingURL=getPlaytime.js.map