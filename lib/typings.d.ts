import * as constants from './constants';
export declare type UUID = string;
export declare type Platform = typeof constants.PLATFORMS[number];
export declare type PlatformAll = typeof constants.PLATFORMSALL[number];
export declare type PlatformAllExtended = PlatformAll | 'all';
export declare type RegionId = keyof typeof constants.REGIONS;
export declare type SeasonId = keyof typeof constants.SEASONS;
export declare type SeasonIdExtended = SeasonId | -1;
export declare type OldSeasonId = keyof typeof constants.OLD_SEASONS;
export declare type RankId = keyof typeof constants.RANKS;
export declare type OldRankId = keyof typeof constants.OLD_RANKS;
export declare type OperatorName = keyof typeof constants.OPERATORS;
export declare type WeaponTypeIndex = keyof typeof constants.WEAPONTYPES;
export declare type WeaponTypeId = typeof constants.WEAPONTYPES[keyof typeof constants.WEAPONTYPES]['id'];
export declare type WeaponName = keyof typeof constants.WEAPONS;
export declare type MPType = 'pvp' | 'pve';
export declare type BoardId = 'pvp_ranked' | 'pvp_casual';
export declare type StatsCategoryName = keyof typeof constants.STATS_CATEGORIES;
//# sourceMappingURL=typings.d.ts.map