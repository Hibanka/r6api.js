"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("../auth");
var fetch_1 = require("../fetch");
var utils_1 = require("../utils");
exports.default = (function (platform, ids) {
    return auth_1.getToken()
        .then(fetch_1.default(utils_1.URLS.PROGRESS(platform, ids)))
        .then(function (res) {
        return res.player_profiles.map(function (profile) { return ({
            id: profile.profile_id,
            level: profile.level,
            xp: profile.xp,
            lootboxProbability: {
                raw: profile.lootbox_probability,
                percent: profile.lootbox_probability
                    .toString()
                    .replace(/\B(?=(\d{2})+(?!\d))/, '.') + '%'
            }
        }); });
    });
});
//# sourceMappingURL=getProgression.js.map