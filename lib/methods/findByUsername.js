"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("../auth");
var fetch_1 = require("../fetch");
var utils_1 = require("../utils");
exports.default = (function (platform, username) {
    return auth_1.getToken()
        .then(fetch_1.default(utils_1.URLS.BYUSERNAME(platform, username)))
        .then(function (res) {
        return res.profiles
            .map(function (profile) { return ({
            id: profile.profileId,
            userId: profile.userId,
            idOnPlatform: profile.idOnPlatform,
            platform: profile.platformType,
            username: profile.nameOnPlatform,
            avatar: utils_1.getAvatars(profile.userId)
        }); });
    });
});
//# sourceMappingURL=findByUsername.js.map