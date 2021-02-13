import { IOptions as IFindByIdOptions } from './methods/findById';
import { IOptions as IGetRanksOptions } from './methods/getRanks';
import { IOptions as IGetStatsOptions } from './methods/getStats';
import { UUID, Platform, PlatformAll, PlatformAllExtended } from './typings';
export * as typings from './typings';
export * as constants from './constants';
export * as utils from './utils';
declare type QueryUUID = UUID | UUID[];
declare type QueryString = string | string[];
export default class R6API {
    constructor(options: {
        email: string;
        password: string;
    });
    findByUsername: (platform: PlatformAll, query: QueryString) => Promise<{
        id: string;
        userId: string;
        idOnPlatform: string;
        platform: "uplay" | "psn" | "xbl" | "steam" | "epic" | "amazon";
        username: string;
        avatar: {
            146: string;
            256: string;
            500: string;
        };
    }[]>;
    findById: (platform: PlatformAllExtended, query: QueryUUID | QueryString, options?: IFindByIdOptions | undefined) => Promise<{
        id: string;
        userId: string;
        idOnPlatform: string;
        platform: PlatformAllExtended;
        username: string;
        avatar: {
            146: string;
            256: string;
            500: string;
        };
    }[]>;
    getPlaytime: (platform: Platform, query: QueryUUID) => Promise<{
        id: string;
        pvp: {
            general: number;
            ranked: number;
            casual: number;
            custom: number;
            other: number;
        };
        pve: {
            general: number;
        };
    }[]>;
    getProgression: (platform: Platform, query: QueryUUID) => Promise<{
        id: string;
        level: number;
        xp: number;
        lootboxProbability: {
            raw: number;
            percent: string;
        };
    }[]>;
    getRanks: (platform: Platform, query: QueryUUID, options?: IGetRanksOptions | undefined) => Promise<import("./methods/getRanks").IGetRanks[]>;
    getStats: (platform: Platform, query: QueryUUID, options?: IGetStatsOptions | undefined) => Promise<import("./methods/getStats").IGetStats[]>;
    getStatus: () => Promise<{
        appId: any;
        name: string;
        spaceId: string;
        mdm: string;
        category: "Instance";
        platform: "PC" | "PS4" | "XBOXONE" | "PS5" | "XBOX SERIES X";
        status: "Online" | "Interrupted" | "Degraded" | "Maintenance";
        maintenance: boolean | null;
        impactedFeatures: string[];
    }[]>;
    validateUsername: (username: string) => Promise<{
        valid: boolean;
        validationReports: {
            message: string;
            categories: string[] | null;
            severity: string | null;
            locale: string | null;
            errorCode: number;
            suggestions: string[] | null;
        }[];
    } | {
        valid: boolean;
        validationReports?: undefined;
    }>;
    custom: <T>(url: string, params?: any) => Promise<T>;
    getNews: (options?: import("./methods/getNews").IOptions | undefined) => Promise<{
        total: number;
        limit: number;
        categories: string;
        media: string;
        skip: number;
        startIndex: string | number;
        placement: string;
        tags: string;
        items: {
            id: string;
            title: string;
            abstract: string | undefined;
            thumbnail: {
                url: string | null;
                description: string | null;
            };
            content: string;
            description: string | undefined;
            categories: string[];
            tag: string | undefined;
            placement: string[] | null | undefined;
            type: string;
            readTime: string | undefined;
            url: string;
            date: string;
        }[];
        raw?: import("./methods/getNews").IApiResponse;
    }>;
    getNewsById: (id: string, options?: import("./methods/getNewsById").IOptions | undefined) => Promise<{
        item?: {
            id: string;
            title: string;
            abstract: string | undefined;
            thumbnail: {
                url: string | null;
                description: string | null;
            };
            content: string;
            description: string | undefined;
            categories: string[];
            tag: string | undefined;
            placement: string[] | null | undefined;
            type: string;
            readTime: string | undefined;
            url: string;
            date: string;
        };
        total: number;
        limit: number;
        categories: string;
        media: string;
        skip: number;
        startIndex: string | number;
        placement: string;
        tags: string;
        raw?: import("./methods/getNewsById").IApiResponse;
    }>;
    getAuth: () => Promise<import("./auth").IUbiAuth>;
    getToken: () => Promise<string>;
    setCredentials: (email: string, password: string) => void;
    setTokenFileLocation: (dir: string) => void;
}
//# sourceMappingURL=index.d.ts.map