import { Platform, UUID } from './typings';
export interface IUbiAuth {
    platformType: Platform;
    ticket: string;
    twoFactorAuthenticationTicket: string | null;
    profileId: UUID;
    userId: UUID;
    nameOnPlatform: string;
    environment: string;
    expiration: string;
    spaceId: UUID;
    clientIp: string;
    clientIpCountry: string;
    serverTime: string;
    sessionId: UUID;
    sessionKey: string;
    rememberMeTicket: string;
}
export declare const login: () => Promise<IUbiAuth>;
export declare const getAuth: () => Promise<IUbiAuth>;
export declare const getToken: () => Promise<string>;
export declare const setCredentials: (email: string, password: string) => void;
export declare const setTokenFileLocation: (dir: string) => void;
//# sourceMappingURL=auth.d.ts.map