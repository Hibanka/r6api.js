import { UUID, Platform, PlatformAll, PlatformAllExtended, RegionId, SeasonIdExtended, BoardId } from './typings';
export declare const getAvatarURL: (id: UUID, size?: number) => string;
export declare const getCDNURL: (id: UUID, format?: string) => string;
export declare const getAvatars: (id: UUID) => {
    146: string;
    256: string;
    500: string;
};
export declare const getNewsURL: (language: string, type: string, id: string) => string;
export declare const getKD: (obj: {
    kills?: number;
    deaths?: number;
}) => number;
export declare const getWinRate: (obj: {
    wins?: number;
    losses?: number;
}) => string;
export declare const URLS: {
    LOGIN: () => string;
    BYUSERNAME: (platform: PlatformAll, usernames: string[]) => string;
    BYID: (platform: PlatformAll, ids: UUID[] | string[]) => string;
    BYUSERID: (ids: UUID[]) => string;
    PROGRESS: (platform: Platform, ids: UUID[]) => string;
    PLAYTIME: (platform: Platform, ids: UUID[]) => string;
    RANKS: (platform: Platform, ids: UUID[], season: SeasonIdExtended, region: RegionId, board: BoardId) => string;
    STATS: (platform: Platform, ids: UUID[], stats: string) => string;
    STATUS: () => string;
    NEWS: (category: string, filter: string, locale: string, fallbackLocale: string, limit: number, skip: number, startIndex: number | null) => string;
    NEWSBYID: (id: string, locale: string, fallbackLocale: string) => string;
};
export declare const isPlatform: (value: string) => value is "uplay" | "psn" | "xbl";
export declare const isPlatformAll: (value: string) => value is "uplay" | "psn" | "xbl" | "steam";
export declare const isPlatformAllExtended: (value: string) => value is PlatformAllExtended;
export declare const isRegionId: (value: string) => value is "emea" | "ncsa" | "apac";
export declare const isSeasonId: (value: number) => value is 10 | 9 | 8 | 7 | 6 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export declare const isSeasonIdExtended: (value: number) => value is SeasonIdExtended;
export declare const isOldSeasonId: (value: number) => value is 2 | 1 | 5 | 4 | 3;
export declare const isRankId: (value: number) => value is 0 | 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 22 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 23 | 21;
export declare const isOldRankId: (value: number) => value is 0 | 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export declare const isOperatorName: (value: string) => value is "zero" | "recruit_sas" | "recruit_fbi" | "recruit_gign" | "recruit_spetsnaz" | "recruit_gsg9" | "smoke" | "mute" | "sledge" | "thatcher" | "castle" | "pulse" | "ash" | "thermite" | "doc" | "rook" | "twitch" | "montagne" | "kapkan" | "tachanka" | "glaz" | "fuze" | "jager" | "bandit" | "blitz" | "iq" | "frost" | "buck" | "valkyrie" | "blackbeard" | "caveira" | "capitao" | "echo" | "hibana" | "mira" | "jackal" | "lesion" | "ying" | "ela" | "zofia" | "vigil" | "dokkaebi" | "lion" | "finka" | "maestro" | "alibi" | "clash" | "maverick" | "kaid" | "nomad" | "mozzie" | "gridlock" | "warden" | "nokk" | "goyo" | "amaru" | "wamai" | "kali" | "oryx" | "iana" | "melusi" | "ace" | "aruni";
export declare const isWeaponTypeIndex: (value: string) => value is "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "B";
export declare const isWeaponTypeId: (value: string) => value is "assault" | "smg" | "lmg" | "marksman" | "pistol" | "shotgun" | "mp" | "shield" | "launcher" | "utility";
export declare const isWeaponName: (value: string) => value is "417" | "l85a2" | "ar33" | "g36c" | "r4-c" | "556xi" | "f2" | "ak-12" | "aug_a2" | "552_commando" | "416-c_carbine" | "c8-sfw" | "mk17_cqb" | "para-308" | "type-89" | "c7e" | "m762" | "v308" | "spear_.308" | "ar-15.50" | "m4" | "ak-74m" | "arx200" | "f90" | "commando_9" | "sc3000k" | "fmg-9" | "mp5k" | "ump45" | "mp5" | "p90" | "9x19vsn" | "mp7" | "9mm_c1" | "mpx" | "m12" | "mp5sd" | "pdw9" | "vector_.45_acp" | "t-5_smg" | "scorpion_evo_3_a1" | "k1a" | "mx4_storm" | "aug_a3" | "p10_roni" | "6p41" | "g8a1" | "m249" | "t-95_lsw" | "lmg-e" | "alda_5.56" | "m249_saw" | "ots-03" | "camrs" | "sr-25" | "mk_14_ebr" | "csrx_300" | "p226_mk_25" | "m45_meusoc" | "5.7_usg" | "p9" | "lfp586" | "gsh-18" | "pmm" | "p12" | "mk1_9mm" | "d-50" | "prb92" | "p229" | "usp40" | "q-929" | "rg15" | "bailiff_410" | "keratos_.357" | "1911_tacops" | "p-10c" | ".44_mag_semi-auto" | "sdp_9mm" | "m590a1" | "m1014" | "sg-cqb" | "sasg-12" | "m870" | "super_90" | "spas-12" | "spas-15" | "supernova" | "ita12l" | "ita12s" | "six12" | "six12_sd" | "fo-12" | "bosg.12.2" | "acs12" | "tcsg12" | "super_shorty" | "smg-11" | "bearing_9" | "c75_auto" | "smg-12" | "spsmg9";
export declare const isStatsCategoryName: (value: string) => value is "pvp" | "pve" | "general" | "generalpvp" | "generalpve" | "operators" | "operatorspvp" | "operatorspve" | "weapons" | "weaponspvp" | "weaponspve" | "queues" | "queuespvp" | "queuespve" | "modes" | "modespvp" | "modespve" | "ranked" | "casual" | "custom" | "local" | "coop" | "normal" | "hard" | "realistic" | "normallocal" | "hardlocal" | "realisticlocal" | "normalcoop" | "hardcoop" | "realisticcoop" | "bomb" | "secureArea" | "hostage" | "elimination" | "disarmBomb" | "protectHostage" | "extractHostage";
//# sourceMappingURL=utils.d.ts.map