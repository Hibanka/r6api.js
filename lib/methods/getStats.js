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
exports.optionsDocs = void 0;
var auth_1 = require("../auth");
var fetch_1 = require("../fetch");
var constants_1 = require("../constants");
var utils_1 = require("../utils");
exports.optionsDocs = [
    ['raw', '`boolean`', 'false', '`false` ', 'Include raw API response'],
    ['categories', '`string[]`', 'false', 'Requests all', 'Categories to request']
];
var getOperatorIconURL = function (name) {
    return constants_1.GITHUB_ASSETS_URL + "/operators/" + (name.includes('recruit') ? 'recruit' : name) + ".png";
};
var statGetter = function (obj, first, second, type) {
    return obj["" + first + (type || '') + "_" + second + ":infinite"] || 0;
};
var generalGetter = function (obj, type) { return (__assign(__assign(__assign({ bulletsFired: statGetter(obj, 'general', 'bulletfired', type), bulletsConnected: statGetter(obj, 'general', 'bullethit', type), kills: statGetter(obj, 'general', 'kills', type), deaths: statGetter(obj, 'general', 'death', type), kd: utils_1.getKD({
        kills: statGetter(obj, 'general', 'kills', type),
        deaths: statGetter(obj, 'general', 'death', type)
    }), assists: statGetter(obj, 'general', 'killassists', type), headshots: statGetter(obj, 'general', 'headshot', type), meleeKills: statGetter(obj, 'general', 'meleekills', type), penetrationKills: statGetter(obj, 'general', 'penetrationkills', type), blindKills: statGetter(obj, 'general', 'blindkills', type) }, type === 'pvp' && { dbno: statGetter(obj, 'general', 'dbno', type) }), type === 'pvp' && { dbnoAssists: statGetter(obj, 'general', 'dbnoassists', type) }), { revives: statGetter(obj, 'general', 'revive', type), wins: statGetter(obj, 'general', 'matchwon', type), losses: statGetter(obj, 'general', 'matchlost', type), winRate: utils_1.getWinRate({
        wins: statGetter(obj, 'general', 'matchwon', type),
        losses: statGetter(obj, 'general', 'matchlost', type)
    }), matches: statGetter(obj, 'general', 'matchplayed', type), playtime: statGetter(obj, 'general', 'timeplayed', type), gadgetsDestroyed: statGetter(obj, 'general', 'gadgetdestroy', type), rappelBreaches: statGetter(obj, 'general', 'rappelbreach', type), barricadesDeployed: statGetter(obj, 'general', 'barricadedeployed', type), reinforcementsDeployed: statGetter(obj, 'general', 'reinforcementdeploy', type), suicides: statGetter(obj, 'general', 'suicide', type), distanceTravelled: statGetter(obj, 'general', 'distancetravelled', type), xp: statGetter(obj, 'general', 'totalxp', type) })); };
var operatorsGetter = function (obj, type) {
    return Object.entries(constants_1.OPERATORS).reduce(function (acc, _a) {
        var _b = __read(_a, 2), codeName = _b[0], cur = _b[1];
        acc[codeName] = __assign(__assign({ name: cur.name, role: cur.role, unit: cur.unit, icon: getOperatorIconURL(codeName), kills: statGetter(obj, 'operator', "kills:" + cur.id, type), deaths: statGetter(obj, 'operator', "death:" + cur.id, type), kd: utils_1.getKD({
                kills: statGetter(obj, 'operator', "kills:" + cur.id, type),
                deaths: statGetter(obj, 'operator', "death:" + cur.id, type)
            }), wins: statGetter(obj, 'operator', "roundwon:" + cur.id, type), losses: statGetter(obj, 'operator', "roundlost:" + cur.id, type), winRate: utils_1.getWinRate({
                wins: statGetter(obj, 'operator', "roundwon:" + cur.id, type),
                losses: statGetter(obj, 'operator', "roundlost:" + cur.id, type)
            }), matches: statGetter(obj, 'operator', "roundwon:" + cur.id, type) +
                statGetter(obj, 'operator', "roundlost:" + cur.id, type), headshots: statGetter(obj, 'operator', "headshot:" + cur.id, type), meleeKills: statGetter(obj, 'operator', "meleekills:" + cur.id, type) }, type === 'pvp' && { dbno: statGetter(obj, 'operator', "dbno:" + cur.id, type) }), { xp: statGetter(obj, 'operator', "totalxp:" + cur.id, type), playtime: statGetter(obj, 'operator', "timeplayed:" + cur.id, type), uniqueAbility: cur.uniqueAbility
                ? {
                    name: cur.uniqueAbility.name,
                    icon: utils_1.getCDNURL(cur.uniqueAbility.icon),
                    stats: cur.uniqueAbility.stats.map(function (gadget) { return ({
                        name: gadget.name,
                        value: statGetter(obj, 'operator', gadget.id + ":" + cur.id, type)
                    }); })
                }
                : null });
        return acc;
    }, {});
};
var weaponsGetter = function (obj, type) {
    return Object.entries(constants_1.WEAPONTYPES).reduce(function (acc, _a) {
        var _b = __read(_a, 2), weaponTypeIndex = _b[0], weaponTypeVal = _b[1];
        acc[weaponTypeVal.id] = {};
        acc[weaponTypeVal.id].general = {
            name: weaponTypeVal.name,
            kills: statGetter(obj, 'weapontype', "kills:" + weaponTypeIndex, type),
            deaths: statGetter(obj, 'weapontype', "death:" + weaponTypeIndex, type),
            kd: utils_1.getKD({
                kills: statGetter(obj, 'weapontype', "kills:" + weaponTypeIndex, type),
                deaths: statGetter(obj, 'weapontype', "death:" + weaponTypeIndex, type)
            }),
            headshots: statGetter(obj, 'weapontype', "headshot:" + weaponTypeIndex, type),
            bulletsFired: statGetter(obj, 'weapontype', "bulletfired:" + weaponTypeIndex, type),
            bulletsConnected: statGetter(obj, 'weapontype', "bullethit:" + weaponTypeIndex, type),
            timesChosen: statGetter(obj, 'weapontype', "chosen:" + weaponTypeIndex, type)
        };
        acc[weaponTypeVal.id].list = Object.entries(constants_1.WEAPONS)
            .filter(function (_a) {
            var _b = __read(_a, 2), weapon = _b[1];
            return weaponTypeVal.id === weapon.category;
        })
            .reduce(function (acc2, _a) {
            var _b = __read(_a, 2), id = _b[0], weapon = _b[1];
            acc2[id] = {
                name: weapon.name,
                icon: utils_1.getCDNURL(weapon.icon),
                kills: statGetter(obj, 'weapon', "kills:" + weapon.id, type),
                deaths: statGetter(obj, 'weapon', "death:" + weapon.id, type),
                kd: utils_1.getKD({
                    kills: statGetter(obj, 'weapon', "kills:" + weapon.id, type),
                    deaths: statGetter(obj, 'weapon', "death:" + weapon.id, type)
                }),
                headshots: statGetter(obj, 'weapon', "headshot:" + weapon.id, type),
                bulletsFired: statGetter(obj, 'weapon', "bulletfired:" + weapon.id, type),
                bulletsConnected: statGetter(obj, 'weapon', "bullethit:" + weapon.id, type),
                timesChosen: statGetter(obj, 'weapon', "chosen:" + weapon.id, type)
            };
            return acc2;
        }, {});
        return acc;
    }, {});
};
exports.default = (function (platform, ids, options) {
    var raw = options && options.raw || false;
    var limit = 7500 - ids.join(',').length;
    var stats = __spreadArray([], __read(new Set(options && options.categories
        ? options.categories.map(function (category) { return constants_1.STATS_CATEGORIES[category]; }).flat(2)
        : Object.values(constants_1.STATS_CATEGORIES).flat(2)))).reduce(function (acc, cur) {
        var _a;
        var index = acc.length ? acc.length - 1 : 0;
        var string = acc[index] ? acc[index] + "," + cur : cur;
        return string.length <= limit
            ? Object.assign(acc, (_a = {}, _a[index] = string, _a))
            : __spreadArray(__spreadArray([], __read(acc)), [cur]);
    }, []);
    return Promise.all(stats.map(function (chunk) {
        return auth_1.getToken()
            .then(fetch_1.default(utils_1.URLS.STATS(platform, ids, chunk)));
    }))
        .then(function (res) {
        return Object.entries(res
            .map(function (obj) { return obj.results; })
            .reduce(function (acc, cur) {
            Object.keys(cur).map(function (key) {
                return acc[key] = Object.assign(acc[key] || [], cur[key]);
            });
            return acc;
        }, {}))
            .map(function (_a) {
            var _b = __read(_a, 2), id = _b[0], vals = _b[1];
            return (__assign(__assign({ id: id }, raw && { raw: vals }), { pvp: {
                    general: generalGetter(vals, 'pvp'),
                    operators: operatorsGetter(vals, 'pvp'),
                    weapons: weaponsGetter(vals, 'pvp'),
                    queues: {
                        ranked: {
                            name: 'Ranked',
                            kills: statGetter(vals, 'ranked', 'kills', 'pvp'),
                            deaths: statGetter(vals, 'ranked', 'death', 'pvp'),
                            kd: utils_1.getKD({
                                kills: statGetter(vals, 'ranked', 'kills', 'pvp'),
                                deaths: statGetter(vals, 'ranked', 'death', 'pvp')
                            }),
                            wins: statGetter(vals, 'ranked', 'matchwon', 'pvp'),
                            losses: statGetter(vals, 'ranked', 'matchlost', 'pvp'),
                            winRate: utils_1.getWinRate({
                                wins: statGetter(vals, 'ranked', 'matchwon', 'pvp'),
                                losses: statGetter(vals, 'ranked', 'matchlost', 'pvp')
                            }),
                            matches: statGetter(vals, 'ranked', 'matchplayed', 'pvp'),
                            playtime: statGetter(vals, 'ranked', 'timeplayed', 'pvp')
                        },
                        casual: {
                            name: 'Casual',
                            kills: statGetter(vals, 'casual', 'kills', 'pvp'),
                            deaths: statGetter(vals, 'casual', 'death', 'pvp'),
                            kd: utils_1.getKD({
                                kills: statGetter(vals, 'casual', 'kills', 'pvp'),
                                deaths: statGetter(vals, 'casual', 'death', 'pvp')
                            }),
                            wins: statGetter(vals, 'casual', 'matchwon', 'pvp'),
                            losses: statGetter(vals, 'casual', 'matchlost', 'pvp'),
                            winRate: utils_1.getWinRate({
                                wins: statGetter(vals, 'casual', 'matchwon', 'pvp'),
                                losses: statGetter(vals, 'casual', 'matchlost', 'pvp')
                            }),
                            matches: statGetter(vals, 'casual', 'matchplayed', 'pvp'),
                            playtime: statGetter(vals, 'casual', 'timeplayed', 'pvp')
                        },
                        custom: {
                            name: 'Custom',
                            playtime: statGetter(vals, 'custom', 'timeplayed', 'pvp')
                        }
                    },
                    modes: {
                        bomb: {
                            name: 'Bomb',
                            wins: statGetter(vals, 'plantbomb', 'matchwon', 'pvp'),
                            losses: statGetter(vals, 'plantbomb', 'matchlost', 'pvp'),
                            winRate: utils_1.getWinRate({
                                wins: statGetter(vals, 'plantbomb', 'matchwon', 'pvp'),
                                losses: statGetter(vals, 'plantbomb', 'matchlost', 'pvp')
                            }),
                            matches: statGetter(vals, 'plantbomb', 'matchplayed', 'pvp'),
                            bestScore: statGetter(vals, 'plantbomb', 'bestscore', 'pvp'),
                            playtime: statGetter(vals, 'plantbomb', 'timeplayed', 'pvp')
                        },
                        secureArea: {
                            name: 'Secure Area',
                            wins: statGetter(vals, 'securearea', 'matchwon', 'pvp'),
                            losses: statGetter(vals, 'securearea', 'matchlost', 'pvp'),
                            winRate: utils_1.getWinRate({
                                wins: statGetter(vals, 'securearea', 'matchwon', 'pvp'),
                                losses: statGetter(vals, 'securearea', 'matchlost', 'pvp')
                            }),
                            matches: statGetter(vals, 'securearea', 'matchplayed', 'pvp'),
                            bestScore: statGetter(vals, 'securearea', 'bestscore', 'pvp'),
                            playtime: statGetter(vals, 'securearea', 'timeplayed', 'pvp'),
                            secured: statGetter(vals, 'general', 'servershacked', 'pvp'),
                            defended: statGetter(vals, 'general', 'serverdefender', 'pvp'),
                            contested: statGetter(vals, 'general', 'serveraggression', 'pvp')
                        },
                        hostage: {
                            name: 'Hostage',
                            wins: statGetter(vals, 'rescuehostage', 'matchwon', 'pvp'),
                            losses: statGetter(vals, 'rescuehostage', 'matchlost', 'pvp'),
                            winRate: utils_1.getWinRate({
                                wins: statGetter(vals, 'rescuehostage', 'matchwon', 'pvp'),
                                losses: statGetter(vals, 'rescuehostage', 'matchlost', 'pvp')
                            }),
                            matches: statGetter(vals, 'rescuehostage', 'matchplayed', 'pvp'),
                            bestScore: statGetter(vals, 'rescuehostage', 'bestscore', 'pvp'),
                            playtime: statGetter(vals, 'rescuehostage', 'timeplayed', 'pvp'),
                            hostageRescued: statGetter(vals, 'general', 'hostagerescue', 'pvp'),
                            hostageDefended: statGetter(vals, 'general', 'hostagedefense', 'pvp')
                        }
                    }
                }, pve: {
                    general: generalGetter(vals, 'pve'),
                    operators: operatorsGetter(vals, 'pve'),
                    weapons: weaponsGetter(vals, 'pve'),
                    queues: {
                        local: {
                            normal: {
                                name: 'Normal',
                                bestScore: statGetter(vals, 'allterrohuntsolo_normal', 'bestscore')
                            },
                            hard: {
                                name: 'Hard',
                                bestScore: statGetter(vals, 'allterrohuntsolo_hard', 'bestscore')
                            },
                            realistic: {
                                name: 'Realistic',
                                bestScore: statGetter(vals, 'allterrohuntsolo_realistic', 'bestscore')
                            }
                        },
                        coop: {
                            normal: {
                                name: 'Normal',
                                bestScore: statGetter(vals, 'allterrohuntcoop_normal', 'bestscore')
                            },
                            hard: {
                                name: 'Hard',
                                bestScore: statGetter(vals, 'allterrohuntcoop_hard', 'bestscore')
                            },
                            realistic: {
                                name: 'Realistic',
                                bestScore: statGetter(vals, 'allterrohuntcoop_realistic', 'bestscore')
                            }
                        }
                    },
                    modes: {
                        disarmBomb: {
                            name: 'Disarm Bomb',
                            wins: statGetter(vals, 'plantbombpve', 'matchwon'),
                            losses: statGetter(vals, 'plantbombpve', 'matchlost'),
                            winRate: utils_1.getWinRate({
                                wins: statGetter(vals, 'plantbombpve', 'matchwon'),
                                losses: statGetter(vals, 'plantbombpve', 'matchlost')
                            }),
                            matches: statGetter(vals, 'plantbombpve', 'matchplayed'),
                            bestScore: statGetter(vals, 'plantbombpve', 'bestscore')
                        },
                        elimination: {
                            name: 'Elimination',
                            wins: statGetter(vals, 'terrohuntclassicpve', 'matchwon'),
                            losses: statGetter(vals, 'terrohuntclassicpve', 'matchlost'),
                            winRate: utils_1.getWinRate({
                                wins: statGetter(vals, 'terrohuntclassicpve', 'matchwon'),
                                losses: statGetter(vals, 'terrohuntclassicpve', 'matchlost')
                            }),
                            matches: statGetter(vals, 'terrohuntclassicpve', 'matchplayed'),
                            bestScore: statGetter(vals, 'terrohuntclassicpve', 'bestscore')
                        },
                        protectHostage: {
                            name: 'Protect Hostage',
                            wins: statGetter(vals, 'protecthostagepve', 'matchwon'),
                            losses: statGetter(vals, 'protecthostagepve', 'matchlost'),
                            winRate: utils_1.getWinRate({
                                wins: statGetter(vals, 'protecthostagepve', 'matchwon'),
                                losses: statGetter(vals, 'protecthostagepve', 'matchlost')
                            }),
                            matches: statGetter(vals, 'protecthostagepve', 'matchplayed'),
                            bestScore: statGetter(vals, 'protecthostagepve', 'bestscore')
                        },
                        extractHostage: {
                            name: 'Extract Hostage',
                            wins: statGetter(vals, 'rescuehostagepve', 'matchwon'),
                            losses: statGetter(vals, 'rescuehostagepve', 'matchlost'),
                            winRate: utils_1.getWinRate({
                                wins: statGetter(vals, 'rescuehostagepve', 'matchwon'),
                                losses: statGetter(vals, 'rescuehostagepve', 'matchlost')
                            }),
                            matches: statGetter(vals, 'rescuehostagepve', 'matchplayed'),
                            bestScore: statGetter(vals, 'rescuehostagepve', 'bestscore')
                        }
                    }
                } }));
        });
    });
});
//# sourceMappingURL=getStats.js.map