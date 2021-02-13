"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsDocs = void 0;
var auth_1 = require("../auth");
var fetch_1 = require("../fetch");
var utils_1 = require("../utils");
exports.optionsDocs = [
    [
        'isUserId', '`boolean`', 'false', '`false`', 'Whether `id` is `userId` or not'
    ]
];
exports.default = (function (platform, ids, options) {
    var isUserId = options && options.isUserId;
    return auth_1.getToken()
        .then(platform === 'all'
        ? isUserId
            ? fetch_1.default(utils_1.URLS.BYUSERID(ids))
            : fetch_1.default(utils_1.URLS.BYPROFILEID(ids))
        : fetch_1.default(utils_1.URLS.BYID(platform, ids)))
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
//# sourceMappingURL=findById.js.map