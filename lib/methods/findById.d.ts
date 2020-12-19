import { PlatformAllExtended, UUID } from '../typings';
declare const _default: (platform: PlatformAllExtended, ids: UUID[] | string[]) => Promise<{
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