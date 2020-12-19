"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("../fetch");
var utils_1 = require("../utils");
var platforms = ['PC', 'PS4', 'XBOXONE', 'PS5', 'XBOX SERIES X'];
exports.default = (function () {
    return fetch_1.default(utils_1.URLS.STATUS())()
        .then(function (res) {
        return res
            .filter(function (app) {
            return app.Name.includes('Rainbow Six Siege') && platforms.includes(app.Platform);
        })
            .map(function (app) { return ({
            appId: app['AppID '],
            name: app.Name,
            spaceId: app.SpaceID,
            mdm: app.MDM,
            category: app.Category,
            platform: app.Platform,
            status: app.Status,
            maintenance: app.Maintenance,
            impactedFeatures: app.ImpactedFeatures
        }); });
    });
});
//# sourceMappingURL=getStatus.js.map