import { Platform, UUID, WeaponTypeId, OperatorName, StatsCategoryName } from '../typings';
interface IGeneral {
    bulletsFired: number;
    bulletsConnected: number;
    kills: number;
    deaths: number;
    kd: number;
    assists: number;
    headshots: number;
    meleeKills: number;
    penetrationKills: number;
    blindKills: number;
    revives: number;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    playtime: number;
    gadgetsDestroyed: number;
    rappelBreaches: number;
    barricadesDeployed: number;
    reinforcementsDeployed: number;
    suicides: number;
    distanceTravelled: number;
    xp: number;
}
interface IGeneralpvp extends IGeneral {
    dbno: number;
    dbnoAssists: number;
}
interface IQueuepvpbase {
    name: string;
    kills: number;
    deaths: number;
    kd: number;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    playtime: number;
}
interface IQueuespvp {
    ranked: IQueuepvpbase;
    casual: IQueuepvpbase;
    custom: {
        name: string;
        playtime: number;
    };
}
interface IQueuepvebase {
    name: string;
    bestScore: number;
}
interface IQueuespve {
    local: {
        normal: IQueuepvebase;
        hard: IQueuepvebase;
        realistic: IQueuepvebase;
    };
    coop: {
        normal: IQueuepvebase;
        hard: IQueuepvebase;
        realistic: IQueuepvebase;
    };
}
interface IModepvpbase {
    name: string;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    bestScore: number;
    playtime: number;
}
interface IModepvpsecurearea extends IModepvpbase {
    secured: number;
    defended: number;
    contested: number;
}
interface IModepvphostage extends IModepvpbase {
    hostageRescued: number;
    hostageDefended: number;
}
interface IModespvp {
    bomb: IModepvpbase;
    secureArea: IModepvpsecurearea;
    hostage: IModepvphostage;
}
interface IModespvebase {
    name: string;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    bestScore: number;
}
interface IModespve {
    disarmBomb: IModespvebase;
    elimination: IModespvebase;
    protectHostage: IModespvebase;
    extractHostage: IModespvebase;
}
interface IOperatorStats {
    name: string;
    role: string;
    unit: string;
    icon: string;
    kills: number;
    deaths: number;
    kd: number;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    headshots: number;
    meleeKills: number;
    xp: number;
    playtime: number;
    uniqueAbility: {
        name: string;
        icon: string;
        stats: {
            name: string;
            value: number;
        }[];
    } | null;
}
interface IOperatorStatspvp extends IOperatorStats {
    dbno: number;
}
interface IWeaponStats {
    name: WeaponTypeId;
    icon: string;
    kills: number;
    deaths: number;
    kd: number;
    headshots: number;
    bulletsFired: number;
    bulletsConnected: number;
    timesChosen: number;
}
interface IWeaponCategory {
    general: {
        name: string;
        kills: number;
        deaths: number;
        kd: number;
        headshots: number;
        bulletsFired: number;
        bulletsConnected: number;
        timesChosen: number;
    };
    list: IWeaponStats[];
}
export interface IGetStats {
    id: UUID;
    raw?: any;
    pvp: {
        general: IGeneralpvp;
        operators: Record<OperatorName, IOperatorStatspvp>;
        weapons: Record<WeaponTypeId, IWeaponCategory>;
        queues: IQueuespvp;
        modes: IModespvp;
    };
    pve: {
        general: IGeneral;
        operators: Record<OperatorName, IOperatorStats>;
        weapons: Record<WeaponTypeId, IWeaponCategory>;
        queues: IQueuespve;
        modes: IModespve;
    };
}
export interface IOptions {
    raw?: boolean;
    categories?: StatsCategoryName[];
}
export declare const optionsDocs: string[][];
declare const _default: (platform: Platform, ids: UUID[], options?: IOptions | undefined) => Promise<IGetStats[]>;
export default _default;
//# sourceMappingURL=getStats.d.ts.map