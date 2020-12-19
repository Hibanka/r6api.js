"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsDocs = void 0;
var auth_1 = require("../auth");
var fetch_1 = require("../fetch");
var constants_1 = require("../constants");
var utils_1 = require("../utils");
exports.optionsDocs = [
    [
        'seasons', '`number \\| number[] \\| \'all\'`', 'false', '`-1`',
        "Numbers from `6` to `" + Object.keys(constants_1.SEASONS).slice(-1)[0] + "` or `-1`"
    ],
    [
        'regions', '`string \\| string[]`', 'false', '`[\'emea\', \'ncsa\', \'apac\']`', ''
    ],
    [
        'board', '`\'pvp_ranked\' \\| \'pvp_casual\'`', 'false', '`\'pvp_ranked\'`', ''
    ]
];
var getRankName = function (seasonId, rankId) {
    return seasonId < 15 ? constants_1.OLD_RANKS[rankId] : constants_1.RANKS[rankId];
};
var getRankIconURL = function (seasonId, rankId) {
    return constants_1.GITHUB_ASSETS_URL + "/ranks/v" + (seasonId < 14 ? '3' : seasonId < 15
        ? [17, 18, 19, 20].includes(rankId) ? '3.1' : '3'
        : [1, 6, 11, 23].includes(rankId)
            ? '3.2' : [19, 20, 21, 22].includes(rankId) ? '3.1' : '3') + "/" + encodeURIComponent(getRankName(seasonId, rankId)) + ".png";
};
var getMatchResult = function (id) {
    return ({ 0: 'unknown', 1: 'win', 2: 'loss', 3: 'abandon' }[id]);
};
var getBoardName = function (boardId) {
    return ({ 'pvp_ranked': 'Ranked', 'pvp_casual': 'Casual' })[boardId];
};
exports.default = (function (platform, ids, options) {
    var seasons = options && options.seasons === 'all'
        ? Object.keys(constants_1.SEASONS).map(function (season) { return Number(season); })
        : options && options.seasons && [].concat(options.seasons) || [-1];
    var regions = options && options.regions === 'all'
        ? Object.keys(constants_1.REGIONS)
        : (options && options.regions && [].concat(options.regions))
            || Object.keys(constants_1.REGIONS);
    var board = options && options.boardId || 'pvp_ranked';
    return Promise.all(seasons.map(function (season) {
        return Promise.all(regions.map(function (region) {
            return auth_1.getToken()
                .then(fetch_1.default(utils_1.URLS.RANKS(platform, ids, season, region, board)));
        }));
    }))
        .then(function (res) {
        return Object.values(res
            .flat()
            .reduce(function (acc, _a) {
            var players = _a.players;
            Object.entries(players)
                .map(function (_a) {
                var _b = _a, _c = __read(_b, 2), id = _c[0], _d = _c[1], seasonId = _d.season, regionId = _d.region, val = __rest(_d, ["season", "region"]);
                acc[id] = acc[id] || {
                    id: id,
                    boardId: board,
                    boardName: getBoardName(board),
                    seasons: {}
                };
                acc[id].seasons[seasonId] = acc[id].seasons[seasonId] || __assign(__assign({ id: seasonId }, constants_1.SEASONS[seasonId] && {
                    name: constants_1.SEASONS[seasonId].name,
                    color: constants_1.SEASONS[seasonId].color,
                    image: utils_1.getCDNURL(constants_1.SEASONS[seasonId].image, 'jpg'),
                    releaseDate: constants_1.SEASONS[seasonId].releaseDate
                }), { regions: {} });
                acc[id].seasons[seasonId].regions[regionId] = {
                    id: regionId,
                    name: constants_1.REGIONS[regionId],
                    skillMean: val.skill_mean,
                    skillStdev: val.skill_stdev,
                    current: {
                        id: val.rank,
                        name: getRankName(seasonId, val.rank),
                        mmr: val.mmr,
                        icon: getRankIconURL(seasonId, val.rank)
                    },
                    max: {
                        id: val.max_rank,
                        name: getRankName(seasonId, val.max_rank),
                        mmr: val.max_mmr,
                        icon: getRankIconURL(seasonId, val.max_rank)
                    },
                    lastMatch: {
                        result: getMatchResult(val.last_match_result),
                        mmrChange: val.last_match_mmr_change,
                        skillMeanChange: val.last_match_skill_mean_change,
                        skillStdevChange: val.last_match_skill_stdev_change
                    },
                    previousMmr: val.previous_rank_mmr,
                    nextMmr: val.next_rank_mmr,
                    topRankPosition: val.top_rank_position,
                    kills: val.kills,
                    deaths: val.deaths,
                    kd: utils_1.getKD(val),
                    wins: val.wins,
                    losses: val.losses,
                    winRate: utils_1.getWinRate(val),
                    matches: val.wins + val.losses,
                    abandons: val.abandons,
                    updateTime: val.update_time
                };
            });
            return acc;
        }, {}));
    });
});
//# sourceMappingURL=getRanks.js.map