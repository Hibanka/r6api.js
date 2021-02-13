import { Platform, UUID, SeasonId, SeasonIdExtended, RankId, OldRankId, RegionId, BoardId } from '../typings';
interface IRank {
    max_mmr: number;
    skill_mean: number;
    deaths: number;
    profile_id: string;
    next_rank_mmr: number;
    rank: RankId | OldRankId;
    max_rank: RankId | OldRankId;
    board_id: string;
    skill_stdev: number;
    kills: number;
    last_match_skill_stdev_change: number;
    update_time: string;
    last_match_mmr_change: number;
    abandons: number;
    season: SeasonId;
    top_rank_position: number;
    last_match_skill_mean_change: number;
    mmr: number;
    previous_rank_mmr: number;
    last_match_result: 0 | 1 | 2 | 3;
    wins: number;
    region: RegionId;
    losses: number;
}
export interface IApiResponse {
    players: {
        [id: string]: IRank;
    };
}
interface IRegions {
    [id: string]: {
        id: string;
        name: string;
        skillMean: number;
        skillStdev: number;
        current: {
            id: number;
            name: string;
            mmr: number;
            icon: string;
        };
        max: {
            id: number;
            name: string;
            mmr: number;
            icon: string;
        };
        lastMatch: {
            result: string;
            mmrChange: number;
            skillMeanChange: number;
            skillStdevChange: number;
        };
        previousMmr: number;
        nextMmr: number;
        topRankPosition: number;
        kills: number;
        deaths: number;
        kd: number;
        wins: number;
        losses: number;
        winRate: string;
        matches: number;
        abandons: number;
        updateTime: string;
    };
}
interface ISeasons {
    [id: string]: {
        id: number;
        name?: string;
        color?: string;
        image?: string;
        releaseDate?: string;
        regions: IRegions;
    };
}
export interface IGetRanks {
    id: UUID;
    seasons: ISeasons;
}
export interface IOptions {
    seasons?: SeasonIdExtended | SeasonIdExtended[] | 'all';
    regions?: RegionId | RegionId[] | 'all';
    boardId?: BoardId;
}
export declare const optionsDocs: string[][];
declare const _default: (platform: Platform, ids: UUID[], options?: IOptions | undefined) => Promise<IGetRanks[]>;
export default _default;
//# sourceMappingURL=getRanks.d.ts.map