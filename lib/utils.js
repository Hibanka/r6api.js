"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatsCategoryName = exports.isWeaponName = exports.isWeaponTypeId = exports.isWeaponTypeIndex = exports.isOperatorName = exports.isOldRankId = exports.isRankId = exports.isOldSeasonId = exports.isSeasonIdExtended = exports.isSeasonId = exports.isRegionId = exports.isPlatformAllExtended = exports.isPlatformAll = exports.isPlatform = exports.URLS = exports.getWinRate = exports.getKD = exports.getNewsURL = exports.getAvatars = exports.getCDNURL = exports.getAvatarURL = void 0;
var constants_1 = require("./constants");
exports.getAvatarURL = function (id, size) {
    if (size === void 0) { size = 256; }
    return constants_1.AVATAR_BASE_URL + "/" + id + "/default_" + (size === 500 ? 'tall' : size + "_" + size) + ".png";
};
exports.getCDNURL = function (id, format) {
    if (format === void 0) { format = 'png'; }
    return constants_1.CDN_BASE_URL + "/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/" + id + "." + format;
};
exports.getAvatars = function (id) { return ({
    146: exports.getAvatarURL(id, 146), 256: exports.getAvatarURL(id, 256), 500: exports.getAvatarURL(id, 500)
}); };
exports.getNewsURL = function (language, type, id) {
    return type === 'news'
        ? "https://www.ubisoft.com/" + language + "/game/rainbow-six/siege" + id
        : "https://www.youtube.com/watch?v=" + id;
};
exports.getKD = function (obj) {
    return Number(((obj.kills || 0) / (obj.deaths || 1)).toFixed(2));
};
exports.getWinRate = function (obj) {
    return ((obj.wins || 0) / ((obj.wins || 0) + (obj.losses || 0) || 1) * 100)
        .toFixed(2) + '%';
};
var getBaseVersion = function (version, base) {
    return (base ? base : constants_1.BASE_API_URL) + "/" + constants_1.API_VERSIONS["V" + version];
};
var getSpacesAndSandboxes = function (platform) {
    return "spaces/" + constants_1.SPACE_IDS[platform] + "/sandboxes/" + constants_1.SANDBOXES[platform];
};
var getStatsBase = function (platform) {
    return getBaseVersion(1) + "/" + getSpacesAndSandboxes(platform);
};
exports.URLS = {
    LOGIN: function () { return getBaseVersion(3) + "/profiles/sessions"; },
    BYUSERNAME: function (platform, usernames) {
        return getBaseVersion(2) +
            ("/profiles?nameOnPlatform=" + usernames.join(',') + "&platformType=" + platform);
    },
    BYID: function (platform, ids) {
        return getBaseVersion(2) + "/profiles?idOnPlatform=" + ids.join(',') + "&platformType=" + platform;
    },
    BYUSERID: function (ids) {
        return getBaseVersion(2) + "/profiles?userId=" + ids.join(',');
    },
    PROGRESS: function (platform, ids) {
        return getStatsBase(platform) + '/r6playerprofile/playerprofile/progressions' +
            ("?profile_ids=" + ids.join(','));
    },
    PLAYTIME: function (platform, ids) {
        return getStatsBase(platform) + ("/playerstats2/statistics?populations=" + ids.join(',')) +
            '&statistics=generalpvp_timeplayed,rankedpvp_timeplayed,casualpvp_timeplayed,' +
            'custompvp_timeplayed,generalpve_timeplayed';
    },
    RANKS: function (platform, ids, season, region, board) {
        return getStatsBase(platform) + ("/r6karma/players?board_id=" + board) +
            ("&profile_ids=" + ids + "&region_id=" + region + "&season_id=" + season);
    },
    STATS: function (platform, ids, stats) {
        return getStatsBase(platform) + '/playerstats2/statistics' +
            ("?populations=" + ids.join(',') + "&statistics=" + stats);
    },
    STATUS: function () {
        return constants_1.STATUS_API_URL + "/" + constants_1.API_VERSIONS.V1 + "/instances";
    },
    NEWS: function (category, filter, locale, fallbackLocale, limit, skip, startIndex) {
        return constants_1.ALT_API_URL + "/api/updates/items" +
            ("?categoriesFilter=" + category + "&mediaFilter=" + filter) +
            ("&locale=" + locale + "&fallbackLocale=" + fallbackLocale) +
            ("&limit=" + limit + "&skip=" + skip + "&startIndex=" + startIndex) +
            '&tags=BR-rainbow-six%20GA-siege';
    },
    NEWSBYID: function (id, locale, fallbackLocale) {
        return constants_1.ALT_API_URL + "/api/updates/items" +
            ("?entryId=" + id + "&locale=" + locale + "&fallbackLocale=" + fallbackLocale) +
            '&tags=BR-rainbow-six%20GA-siege';
    }
};
exports.isPlatform = function (value) {
    return constants_1.PLATFORMS.map(function (platform) { return platform.toString(); }).includes(value);
};
exports.isPlatformAll = function (value) {
    return constants_1.PLATFORMSALL.map(function (platform) { return platform.toString(); }).includes(value);
};
exports.isPlatformAllExtended = function (value) {
    return __spread(constants_1.PLATFORMSALL.map(function (platform) { return platform.toString(); }), ['all']).includes(value);
};
exports.isRegionId = function (value) {
    return Object.keys(constants_1.REGIONS).includes(value);
};
exports.isSeasonId = function (value) {
    return Object.keys(constants_1.SEASONS).map(function (season) { return Number(season); }).includes(value);
};
exports.isSeasonIdExtended = function (value) {
    return Object.keys(constants_1.SEASONS).map(function (season) { return Number(season); }).includes(value);
};
exports.isOldSeasonId = function (value) {
    return Object.keys(constants_1.OLD_SEASONS).map(function (season) { return Number(season); }).includes(value);
};
exports.isRankId = function (value) {
    return Object.keys(constants_1.RANKS).map(function (rank) { return Number(rank); }).includes(value);
};
exports.isOldRankId = function (value) {
    return Object.keys(constants_1.OLD_RANKS).map(function (rank) { return Number(rank); }).includes(value);
};
exports.isOperatorName = function (value) {
    return Object.values(constants_1.OPERATORS).map(function (op) { return op.name; }).includes(value);
};
exports.isWeaponTypeIndex = function (value) {
    return Object.keys(constants_1.WEAPONTYPES).includes(value);
};
exports.isWeaponTypeId = function (value) {
    return Object.values(constants_1.WEAPONTYPES).map(function (weapontype) { return weapontype.id; }).includes(value);
};
exports.isWeaponName = function (value) {
    return Object.values(constants_1.WEAPONS).map(function (wp) { return wp.name; }).includes(value);
};
exports.isStatsCategoryName = function (value) {
    return Object.keys(constants_1.STATS_CATEGORIES).includes(value);
};
//# sourceMappingURL=utils.js.map