import { Platform, UUID } from '../typings';
declare const _default: (platform: Platform, ids: UUID[]) => Promise<{
    id: string;
    level: number;
    xp: number;
    lootboxProbability: {
        raw: number;
        percent: string;
    };
}[]>;
export default _default;
//# sourceMappingURL=getProgression.d.ts.map