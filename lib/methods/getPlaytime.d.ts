import { Platform, UUID } from '../typings';
declare const _default: (platform: Platform, ids: UUID[]) => Promise<{
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
export default _default;
//# sourceMappingURL=getPlaytime.d.ts.map