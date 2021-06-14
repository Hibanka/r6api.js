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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatsCategoryName = exports.isWeaponName = exports.isWeaponTypeId = exports.isWeaponTypeIndex = exports.isOperatorName = exports.isOldRankId = exports.isRankId = exports.isOldSeasonId = exports.isSeasonIdExtended = exports.isSeasonId = exports.isRegionId = exports.isPlatformAllExtended = exports.isPlatformAll = exports.isPlatform = exports.URLS = exports.getWinRate = exports.getKD = exports.getNewsURL = exports.getAvatars = exports.getCDNURL = exports.getAvatarURL = void 0;
var constants_1 = require("./constants");
var getAvatarURL = function (id, size) {
    if (size === void 0) { size = 256; }
    return constants_1.AVATAR_BASE_URL + "/" + id + "/default_" + (size === 500 ? 'tall' : size + "_" + size) + ".png";
};
exports.getAvatarURL = getAvatarURL;
var getCDNURL = function (id, format) {
    if (format === void 0) { format = 'png'; }
    return constants_1.CDN_BASE_URL + "/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/" + id + "." + format;
};
exports.getCDNURL = getCDNURL;
var getAvatars = function (id) { return ({
    146: exports.getAvatarURL(id, 146), 256: exports.getAvatarURL(id, 256), 500: exports.getAvatarURL(id, 500)
}); };
exports.getAvatars = getAvatars;
var getNewsURL = function (language, type, id) {
    return type === 'news'
        ? "https://www.ubisoft.com/" + language + "/game/rainbow-six/siege" + id
        : "https://www.youtube.com/watch?v=" + id;
};
exports.getNewsURL = getNewsURL;
var getKD = function (obj) {
    return Number(((obj.kills || 0) / (obj.deaths || 1)).toFixed(2));
};
exports.getKD = getKD;
var getWinRate = function (obj) {
    return ((obj.wins || 0) / ((obj.wins || 0) + (obj.losses || 0) || 1) * 100)
        .toFixed(2) + '%';
};
exports.getWinRate = getWinRate;
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
        return getBaseVersion(3) +
            ("/profiles?namesOnPlatform=" + usernames.join(',') + "&platformType=" + platform);
    },
    BYID: function (platform, ids) {
        return getBaseVersion(3) + "/profiles?idsOnPlatform=" + ids.join(',') + "&platformType=" + platform;
    },
    BYUSERID: function (ids) {
        return getBaseVersion(3) + "/profiles?userIds=" + ids.join(',');
    },
    BYPROFILEID: function (ids) {
        return getBaseVersion(3) + "/profiles?profileIds=" + ids.join(',');
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
    STATUS: function () { return constants_1.STATUS_API_URL + "/" + constants_1.API_VERSIONS.V1 + "/instances"; },
    VALIDATEUSERNAME: function (userId) { return getBaseVersion(3) + "/profiles/" + userId + "/validateUpdate"; },
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
var isPlatform = function (value) {
    return constants_1.PLATFORMS.map(function (platform) { return platform.toString(); }).includes(value);
};
exports.isPlatform = isPlatform;
var isPlatformAll = function (value) {
    return constants_1.PLATFORMSALL.map(function (platform) { return platform.toString(); }).includes(value);
};
exports.isPlatformAll = isPlatformAll;
var isPlatformAllExtended = function (value) {
    return __spreadArray(__spreadArray([], __read(constants_1.PLATFORMSALL.map(function (platform) { return platform.toString(); }))), ['all']).includes(value);
};
exports.isPlatformAllExtended = isPlatformAllExtended;
var isRegionId = function (value) {
    return Object.keys(constants_1.REGIONS).includes(value);
};
exports.isRegionId = isRegionId;
var isSeasonId = function (value) {
    return Object.keys(constants_1.SEASONS).map(function (season) { return Number(season); }).includes(value);
};
exports.isSeasonId = isSeasonId;
var isSeasonIdExtended = function (value) {
    return Object.keys(constants_1.SEASONS).map(function (season) { return Number(season); }).includes(value);
};
exports.isSeasonIdExtended = isSeasonIdExtended;
var isOldSeasonId = function (value) {
    return Object.keys(constants_1.OLD_SEASONS).map(function (season) { return Number(season); }).includes(value);
};
exports.isOldSeasonId = isOldSeasonId;
var isRankId = function (value) {
    return Object.keys(constants_1.RANKS).map(function (rank) { return Number(rank); }).includes(value);
};
exports.isRankId = isRankId;
var isOldRankId = function (value) {
    return Object.keys(constants_1.OLD_RANKS).map(function (rank) { return Number(rank); }).includes(value);
};
exports.isOldRankId = isOldRankId;
var isOperatorName = function (value) {
    return Object.values(constants_1.OPERATORS).map(function (op) { return op.name; }).includes(value);
};
exports.isOperatorName = isOperatorName;
var isWeaponTypeIndex = function (value) {
    return Object.keys(constants_1.WEAPONTYPES).includes(value);
};
exports.isWeaponTypeIndex = isWeaponTypeIndex;
var isWeaponTypeId = function (value) {
    return Object.values(constants_1.WEAPONTYPES).map(function (weapontype) { return weapontype.id; }).includes(value);
};
exports.isWeaponTypeId = isWeaponTypeId;
var isWeaponName = function (value) {
    return Object.values(constants_1.WEAPONS).map(function (wp) { return wp.name; }).includes(value);
};
exports.isWeaponName = isWeaponName;
var isStatsCategoryName = function (value) {
    return Object.keys(constants_1.STATS_CATEGORIES).includes(value);
};
exports.isStatsCategoryName = isStatsCategoryName;
//# sourceMappingURL=utils.js.map