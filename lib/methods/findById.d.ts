import { PlatformAllExtended, UUID } from '../typings';
export interface IOptions {
    isUserId?: boolean;
}
export declare const optionsDocs: string[][];
declare const _default: (platform: PlatformAllExtended, ids: UUID[] | string[], options?: IOptions | undefined) => Promise<{
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
export default _default;
//# sourceMappingURL=findById.d.ts.map