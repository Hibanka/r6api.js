export interface IUbiAuth {
    ticket: string;
    expiration: string;
}
export declare const login: () => Promise<IUbiAuth>;
export declare const getToken: () => Promise<string>;
export declare const setCredentials: (email: string, password: string) => void;
export declare const setTokenFileLocation: (dir: string) => void;
//# sourceMappingURL=auth.d.ts.map