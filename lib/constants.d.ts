export declare const AVATAR_BASE_URL = "https://ubisoft-avatars.akamaized.net";
export declare const CDN_BASE_URL = "https://staticctf.akamaized.net";
export declare const GITHUB_ASSETS_URL = "https://github.com/danielwerg/r6api.js/raw/typescript/assets";
export declare const BASE_API_URL = "https://public-ubiservices.ubi.com";
export declare const ALT_API_URL = "https://www.ubisoft.com";
export declare const STATUS_API_URL = "https://game-status-api.ubisoft.com";
export declare const API_VERSIONS: {
    readonly V1: "v1";
    readonly V2: "v2";
    readonly V3: "v3";
};
export declare const SPACE_IDS: {
    readonly uplay: "5172a557-50b5-4665-b7db-e3f2e8c5041d";
    readonly psn: "05bfb3f7-6c21-4c42-be1f-97a33fb5cf66";
    readonly xbl: "98a601e5-ca91-4440-b1c5-753f601a2c90";
};
export declare const SANDBOXES: {
    readonly uplay: "OSBOR_PC_LNCH_A";
    readonly psn: "OSBOR_PS4_LNCH_A";
    readonly xbl: "OSBOR_XBOXONE_LNCH_A";
};
export declare const PLATFORMS: readonly ["uplay", "psn", "xbl"];
export declare const PLATFORMSALL: readonly ["uplay", "psn", "xbl", "steam", "epic", "amazon"];
export declare const REGIONS: {
    readonly emea: "Europe, Middle East and Africa";
    readonly ncsa: "North, Central and South America";
    readonly apac: "Asia Pacific";
};
export declare const OLD_SEASONS: {
    readonly 1: {
        readonly name: "Black Ice";
        readonly color: "#2e93b3";
        readonly image: "67sZXc4UuXK2YPq8uj0mgE/6d0a5e1c6a342f5219cba2fc89e0ba14/r6s-seasons-y1s1";
        readonly releaseDate: string;
    };
    readonly 2: {
        readonly name: "Dust Line";
        readonly color: "#d0a344";
        readonly image: "5u2ecpIe98X528KgYQiEt/5833e27e347176f5e041cc533d48ac95/r6s-seasons-y1s2";
        readonly releaseDate: string;
    };
    readonly 3: {
        readonly name: "Skull Rain";
        readonly color: "#47893b";
        readonly image: "2X0s4QopJikcMNN4qg9KPS/5ef0ae117679ee7b1342c776a77c9dd4/r6s-seasons-y1s3";
        readonly releaseDate: string;
    };
    readonly 4: {
        readonly name: "Red Crow";
        readonly color: "#bd1e2c";
        readonly image: "66IKfs4aSnSkxaToTmmVBt/1532ccea8dd02b3ea44f254e4fdac27f/r6s-seasons-y1s4";
        readonly releaseDate: string;
    };
    readonly 5: {
        readonly name: "Velvet Shell";
        readonly color: "#723093";
        readonly image: "5OKGWvBbiscdZNmjr0PP9q/f5cff0dae8546193f9601fcf703f7f0e/r6s-seasons-y2s1";
        readonly releaseDate: string;
    };
};
export declare const SEASONS: {
    readonly 6: {
        readonly name: "Health";
        readonly color: "#0050b3";
        readonly image: "2w0kuPWW4vZS2MvHxpjgKL/527a78f482f03250f48ee05fabb843a9/r6s-seasons-y2s2";
        readonly releaseDate: string;
    };
    readonly 7: {
        readonly name: "Blood Orchid";
        readonly color: "#ca361c";
        readonly image: "5Is8lRiLLAaU0Uaj46Bu5Z/d46a8652cdf16426b7c9a0d634442be5/r6s-seasons-y2s3";
        readonly releaseDate: string;
    };
    readonly 8: {
        readonly name: "White Noise";
        readonly color: "#006543";
        readonly image: "6FvQKw65QzOqhVKxbjBg1Z/70ea9eb8865182504f74cfea10f88c0a/r6s-seasons-y2s4";
        readonly releaseDate: string;
    };
    readonly 9: {
        readonly name: "Chimera";
        readonly color: "#ffc113";
        readonly image: "35ZyIYUW7odr1tiGyGNd8R/8a578688e5c46ed779a382c940bf270b/rainbow6siege-chimera-thumb_318068";
        readonly releaseDate: string;
    };
    readonly 10: {
        readonly name: "Para Bellum";
        readonly color: "#949f39";
        readonly image: "522ZBrBzlJMoTi63hrwuna/3f9007ceaa80b8110fa282937309ac1e/rainbow6siege_parabellum_thumb_323480";
        readonly releaseDate: string;
    };
    readonly 11: {
        readonly name: "Grim Sky";
        readonly color: "#81a0c1";
        readonly image: "4y07zikRXB4BcyRQy5Anoe/2e6de56c3ea34cadb300326102963340/rainbow6siege_grimsky_thumb_333789";
        readonly releaseDate: string;
    };
    readonly 12: {
        readonly name: "Wind Bastion";
        readonly color: "#aa854f";
        readonly image: "1VeuGBLdSsadK5MdLfCL9k/b9e213c4aeb8dfe6e1f137968770912a/rainbow6siege_windbastion_thumb_340468";
        readonly releaseDate: string;
    };
    readonly 13: {
        readonly name: "Burnt Horizon";
        readonly color: "#d2005a";
        readonly image: "4J2E0yJ2cZsKgx5OrFGkvR/0f966f31b3d8ad2ef13926b075769334/r6s-seasons-y4s1";
        readonly releaseDate: string;
    };
    readonly 14: {
        readonly name: "Phantom Sight";
        readonly color: "#304395";
        readonly image: "29ze1Zxf173boRuyaFHuQV/c240df821c3ec407b09118c68a1300c0/r6s-seasons-y4s2";
        readonly releaseDate: string;
    };
    readonly 15: {
        readonly name: "Ember Rise";
        readonly color: "#156309";
        readonly image: "1JeHAGdUglVNSUUvSkxSia/1c8b76a4256091ca40434e89addaacf2/r6s-seasons-y4s3";
        readonly releaseDate: string;
    };
    readonly 16: {
        readonly name: "Shifting Tides";
        readonly color: "#089eb3";
        readonly image: "6uZSbKGZiwF7Zv5egr4zks/5597030f075ad99c0a18a1dcea34ef87/r6s-seasons-y4s4";
        readonly releaseDate: string;
    };
    readonly 17: {
        readonly name: "Void Edge";
        readonly color: "#946a97";
        readonly image: "2584xuwMoCH1FJc9n34jLo/9dfec73fd217a889a7bfe66e1f412cd6/r6s-seasons-y5s1";
        readonly releaseDate: string;
    };
    readonly 18: {
        readonly name: "Steel Wave";
        readonly color: "#2b7f9b";
        readonly image: "4soZ80QzL9WoLqvq8Hz647/d8d70312ec2849c276b459c3ef0482cd/r6s-seasons-y5s2";
        readonly releaseDate: string;
    };
    readonly 19: {
        readonly name: "Shadow Legacy";
        readonly color: "#6ca511";
        readonly image: "5H87SAzADrzRmroVnJzuUE/2e73c489074b538055df0f793b4e1639/r6s-seasons-y5s3";
        readonly releaseDate: string;
    };
    readonly 20: {
        readonly name: "Neon Dawn";
        readonly color: "#D14007";
        readonly image: "3vRTyOgSmwcUVxiOk60p3w/e2f41521df1f67704dae051d147a32cc/r6s-seasons-y5s4";
        readonly releaseDate: string;
    };
    readonly 21: {
        readonly name: "Crimson Heist";
        readonly color: "#AC0000";
        readonly imageId: "7iKoGngda7z0LyYpTT25zM/116efeb1c65cb9a356a3e9a42abe2ae3/R6_live_Y6S1_CrimsonHeist";
        readonly releaseDate: string;
    };
};
export declare const RANKS: {
    readonly 23: "Champions";
    readonly 22: "Diamond";
    readonly 21: "Platinum 1";
    readonly 20: "Platinum 2";
    readonly 19: "Platinum 3";
    readonly 18: "Gold 1";
    readonly 17: "Gold 2";
    readonly 16: "Gold 3";
    readonly 15: "Silver 1";
    readonly 14: "Silver 2";
    readonly 13: "Silver 3";
    readonly 12: "Silver 4";
    readonly 11: "Silver 5";
    readonly 10: "Bronze 1";
    readonly 9: "Bronze 2";
    readonly 8: "Bronze 3";
    readonly 7: "Bronze 4";
    readonly 6: "Bronze 5";
    readonly 5: "Copper 1";
    readonly 4: "Copper 2";
    readonly 3: "Copper 3";
    readonly 2: "Copper 4";
    readonly 1: "Copper 5";
    readonly 0: "Unranked";
};
export declare const OLD_RANKS: {
    readonly 20: "Diamond";
    readonly 19: "Platinum 1";
    readonly 18: "Platinum 2";
    readonly 17: "Platinum 3";
    readonly 16: "Gold 1";
    readonly 15: "Gold 2";
    readonly 14: "Gold 3";
    readonly 13: "Gold 4";
    readonly 12: "Silver 1";
    readonly 11: "Silver 2";
    readonly 10: "Silver 3";
    readonly 9: "Silver 4";
    readonly 8: "Bronze 1";
    readonly 7: "Bronze 2";
    readonly 6: "Bronze 3";
    readonly 5: "Bronze 4";
    readonly 4: "Copper 1";
    readonly 3: "Copper 2";
    readonly 2: "Copper 3";
    readonly 1: "Copper 4";
    readonly 0: "Unranked";
};
export declare const OPERATORS: {
    recruit_sas: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: null;
    };
    recruit_fbi: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: null;
    };
    recruit_gign: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: null;
    };
    recruit_spetsnaz: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: null;
    };
    recruit_gsg9: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: null;
    };
    smoke: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    mute: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    sledge: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    thatcher: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    castle: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    pulse: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    ash: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    thermite: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    doc: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    rook: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    twitch: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    montagne: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    kapkan: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    tachanka: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    glaz: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    fuze: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    jager: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    bandit: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    blitz: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    iq: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    frost: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    buck: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    valkyrie: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    blackbeard: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    caveira: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    capitao: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    echo: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    hibana: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    mira: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    jackal: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    lesion: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    ying: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    ela: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    zofia: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    vigil: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    dokkaebi: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    lion: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    finka: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    maestro: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    alibi: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    clash: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    maverick: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    kaid: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    nomad: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    mozzie: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    gridlock: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    warden: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    nokk: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    goyo: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    amaru: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    wamai: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    kali: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    oryx: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    iana: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    melusi: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    ace: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    zero: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    aruni: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            icon: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
    flores: {
        name: string;
        id: string;
        role: string;
        unit: string;
        uniqueAbility: {
            name: string;
            iconId: string;
            stats: {
                name: string;
                id: string;
            }[];
        };
    };
};
export declare const WEAPONTYPES: {
    readonly '1': {
        readonly id: "assault";
        readonly name: "Assault Rifle";
    };
    readonly '2': {
        readonly id: "smg";
        readonly name: "Submachine Gun";
    };
    readonly '3': {
        readonly id: "lmg";
        readonly name: "Light Machine Gun";
    };
    readonly '4': {
        readonly id: "marksman";
        readonly name: "Marksman Rifle";
    };
    readonly '5': {
        readonly id: "pistol";
        readonly name: "Handgun";
    };
    readonly '6': {
        readonly id: "shotgun";
        readonly name: "Shotgun";
    };
    readonly '7': {
        readonly id: "mp";
        readonly name: "Machine Pistol";
    };
    readonly '8': {
        readonly id: "shield";
        readonly name: "Shield";
    };
    readonly '9': {
        readonly id: "launcher";
        readonly name: "Launcher";
    };
    readonly B: {
        readonly id: "utility";
        readonly name: "Utility";
    };
};
export declare const WEAPONS: {
    readonly l85a2: {
        readonly name: "L85A2";
        readonly id: "B79310C6";
        readonly category: "assault";
        readonly icon: "5vYQpoyk36foDzDq49jBd0/1479a2d7189e545555ceccecf6bd7cc3/L85A2";
    };
    readonly ar33: {
        readonly name: "AR33";
        readonly id: "B79310D8";
        readonly category: "assault";
        readonly icon: "16U6xEvX8I5xQd9duveBLN/45d22960872cfa3fb6be9eb47fa0be4e/AR33";
    };
    readonly g36c: {
        readonly name: "G36C";
        readonly id: "B79310DE";
        readonly category: "assault";
        readonly icon: "2SZoqSXKoNPvZFIJsFsDE5/cb109885bf19c8697abf832f10cfd9a6/G36C";
    };
    readonly 'r4-c': {
        readonly name: "R4-C";
        readonly id: "B79310D2";
        readonly category: "assault";
        readonly icon: "dQbqK9VxczuiscwBDSkT8/777a062f6095dde0371eab5200dcb451/R4-C";
    };
    readonly '556xi': {
        readonly name: "556XI";
        readonly id: "B79310D4";
        readonly category: "assault";
        readonly icon: "2dgpAeAWb3SkZV7rxDbVdQ/fa32323256b7c6f8a1977d3f71e7d4b2/556xi";
    };
    readonly f2: {
        readonly name: "F2";
        readonly id: "9B2CA14F";
        readonly category: "assault";
        readonly icon: "5HTvw1cJInVAGxOLXR0war/2f142437f5c0944fdcfcce8a03c37676/F2";
    };
    readonly 'ak-12': {
        readonly name: "AK-12";
        readonly id: "106FE7150";
        readonly category: "assault";
        readonly icon: "7KAZZgnpqD07y47jVVXEuh/e0d7e67101f8f966aa6e1c59e835454f/AK-12";
    };
    readonly aug_a2: {
        readonly name: "AUG A2";
        readonly id: "9B2CA14A";
        readonly category: "assault";
        readonly icon: "1eO39zRe8XxJXH1KZiIWhM/02049ced0fbfa630833e8b0d3c03de07/AUG_A2";
    };
    readonly '552_commando': {
        readonly name: "552 Commando";
        readonly id: "B79310D3";
        readonly category: "assault";
        readonly icon: "1LT0N89YaOHvRwn3Pphr8K/02d4a3da9cda132d8201fd134f24fede/552_Commando";
    };
    readonly '416-c_carbine': {
        readonly name: "416-C CARBINE";
        readonly id: "106FE714D";
        readonly category: "assault";
        readonly icon: "2I86r2a2QD8EHTZVZnxcxy/2913450ba952a16c29fac1f5ce58ba1a/416-C_Carbine";
    };
    readonly 'c8-sfw': {
        readonly name: "C8-SFW";
        readonly id: "2CEABF00B";
        readonly category: "assault";
        readonly icon: "1itXpz2GnvdwwRyhX1SYa2/b58ff71048fa3bb5ed09d5d935dc90f4/C8-SFW";
    };
    readonly mk17_cqb: {
        readonly name: "MK17 CQB";
        readonly id: "2CEAAA814";
        readonly category: "assault";
        readonly icon: "4LytczDQmu0M63gO2WtCCm/331ef3b1938352ae71d7c0bd23de3596/Mk17_CQB";
    };
    readonly 'para-308': {
        readonly name: "PARA-308";
        readonly id: "8ACBED9B8";
        readonly category: "assault";
        readonly icon: "6ub8y2Cs5EYhVPfDWuVVkW/82ca131a41ee4ba2e0b75f2dc52ed9e3/PARA-308";
    };
    readonly 'type-89': {
        readonly name: "Type-89";
        readonly id: "9A25C4B26";
        readonly category: "assault";
        readonly icon: "7wLf325q9amF8bnVP1QGr0/2faff1a197f90dcded4472852a317d6b/Type-89";
    };
    readonly c7e: {
        readonly name: "C7E";
        readonly id: "A3038BA91";
        readonly category: "assault";
        readonly icon: "63vTDjkXeKq7rOoSBhoJD4/08603e6603d564e0fa38af9ec86b7c1f/C7E";
    };
    readonly m762: {
        readonly name: "M762";
        readonly id: "E50FB57FB";
        readonly category: "assault";
        readonly icon: "4oWAgi7tgQP1Tq0HooRtye/9109a74921ee17610d4bd85a61582823/M762";
    };
    readonly v308: {
        readonly name: "V308";
        readonly id: "BE9996F2D";
        readonly category: "assault";
        readonly icon: "5YBZe76NUDO32eF66wW90g/488c315743d59230962a4d67618223d6/V308";
    };
    readonly 'spear_.308': {
        readonly name: "SPEAR .308";
        readonly id: "BE99AD3BD";
        readonly category: "assault";
        readonly icon: "29LjYuJ4s6yA8k9Uv2u28C/89ec812559e7d74b7c269279f4c46d92/Spear_.308";
    };
    readonly 'ar-15.50': {
        readonly name: "AR-15.50";
        readonly id: "1EFE80F033";
        readonly category: "assault";
        readonly icon: "4lGGEGZLkbldz114Wl5hCo/78a04c46654f80fae03e730bd79f3563/AR-15.50";
    };
    readonly m4: {
        readonly name: "M4";
        readonly id: "1EFE81B5D5";
        readonly category: "assault";
        readonly icon: "3jhi90ycmuc8mAiuSXFoCi/bcf354459e7becd6ede52ee97917c832/M4";
    };
    readonly 'ak-74m': {
        readonly name: "AK-74M";
        readonly id: "23D027C51C";
        readonly category: "assault";
        readonly icon: "1j5HiQP8aFphTe65fqDdg0/23eecb5c603c5ba9f59fc6cbc5e4a531/AK-74M";
    };
    readonly arx200: {
        readonly name: "ARX200";
        readonly id: "2418EC4362";
        readonly category: "assault";
        readonly icon: "6VgkPBsr1WApI3rWc9kcM0/b18b8e25f3e951e8e722213f2ee59eb0/ARX200";
    };
    readonly f90: {
        readonly name: "F90";
        readonly id: "2902BBFED9";
        readonly category: "assault";
        readonly icon: "62tE3th2ThcGHlrcqWkmEX/d69c9de199542e25fa55f6d293f15671/r6-operator-weapon-ar-f90";
    };
    readonly commando_9: {
        readonly name: "Commando 9";
        readonly id: "BE998B05E";
        readonly category: "assault";
        readonly icon: "4P9dpUph5w3MSsLNnW6be/04baba24990fcb75a9c0bcfd01b7d190/Commando_9";
    };
    readonly sc3000k: {
        readonly name: "SC3000K";
        readonly id: "40705ECFA4";
        readonly category: "assault";
        readonly icon: "7x7eDTm2NNpfGiFMrfQqEX/9898e74c780537be3ca6d88db32ea21e/F2000";
    };
    readonly 'fmg-9': {
        readonly name: "FMG-9";
        readonly id: "B79310D0";
        readonly category: "smg";
        readonly icon: "0oneJNsBR06QjuowxwtHG/bd3b391c6eec2bd615f2ed83197a13ac/FMG-9";
    };
    readonly mp5k: {
        readonly name: "MP5K";
        readonly id: "B79310D1";
        readonly category: "smg";
        readonly icon: "1pk8nOI7ybQjYOSI4fuzOm/fcd78df0f729be545e75c09aae85c360/MP5K";
    };
    readonly ump45: {
        readonly name: "UMP45";
        readonly id: "B79310CF";
        readonly category: "smg";
        readonly icon: "6X2EZPq2s8UKrP67uxz5FI/f0df4c57d5890c79311e4eb62d4470e7/UMP45";
    };
    readonly mp5: {
        readonly name: "MP5";
        readonly id: "B79310C1";
        readonly category: "smg";
        readonly icon: "60YbOvSBQt6ZUlu8YDXoZm/51ef3857b2986de700262432e8433714/MP5";
    };
    readonly p90: {
        readonly name: "P90";
        readonly id: "B79310C7";
        readonly category: "smg";
        readonly icon: "4nGrNspOvII2oS3lEMkg5x/2398a493c298bc654f97c58767aa40f3/P90";
    };
    readonly '9x19vsn': {
        readonly name: "9x19VSN";
        readonly id: "106FE7151";
        readonly category: "smg";
        readonly icon: "42gH96xTTYaTZsfXI3c0wL/a7edbf11af97091ee884b68e59fe6a4f/9x19VSN";
    };
    readonly mp7: {
        readonly name: "MP7";
        readonly id: "106FE714F";
        readonly category: "smg";
        readonly icon: "3a4dgTWGdiJqALhtRp4pKy/f2568d3de3cfe7e4b53179e8653cd2a2/MP7";
    };
    readonly '9mm_c1': {
        readonly name: "9mm C1";
        readonly id: "2CEABC77A";
        readonly category: "smg";
        readonly icon: "60sbThKtOpNOwKu3OP0oGV/672fd9263f7786402a0d855273473a6f/9mm_C1";
    };
    readonly mpx: {
        readonly name: "MPX";
        readonly id: "5BD3A85FC";
        readonly category: "smg";
        readonly icon: "5HFewpAJ8npDDCKFnEadhL/d398bb477d6b56fe41bfdb5862ed31c0/MPX";
    };
    readonly m12: {
        readonly name: "M12";
        readonly id: "8ACBEC5F2";
        readonly category: "smg";
        readonly icon: "4FxqA5pa8JY9QQ7FEcjwPw/ffc779fcde5b970e7b95db6653637dab/M12";
    };
    readonly mp5sd: {
        readonly name: "MP5SD";
        readonly id: "99EB07773";
        readonly category: "smg";
        readonly icon: "5HaMldwFltBwiiyDDfkPpD/6de3aa9aaa17458e7f6186ba59b8deff/MP5SD";
    };
    readonly pdw9: {
        readonly name: "PDW9";
        readonly id: "A3038BA94";
        readonly category: "smg";
        readonly icon: "4yYCuRnduMq35CTHfq6wwU/b7d49cdbcb05917e014c99efeaadd33b/PDW9";
    };
    readonly 'vector_.45_acp': {
        readonly name: "Vector .45 ACP";
        readonly id: "A3038BA92";
        readonly category: "smg";
        readonly icon: "7D1cDf13FqUhoLihzvuPln/068aa7e507155598449c58c0a49a90d6/Vector_.45_ACP";
    };
    readonly 't-5_smg': {
        readonly name: "T-5 SMG";
        readonly id: "B699FDA28";
        readonly category: "smg";
        readonly icon: "1Ne8bvX8BdCALevWKMllQN/4baa3e79d323de134dd182e0272b9c3b/T-5_SMG";
    };
    readonly scorpion_evo_3_a1: {
        readonly name: "Scorpion EVO 3 A1";
        readonly id: "E50FA8B51";
        readonly category: "smg";
        readonly icon: "6OdwaLWxcnFvhlVwWbP2Du/4f7e94bdb6d34d5c0aa7b7b147b4092e/Scorpion_EVO_3_A1";
    };
    readonly k1a: {
        readonly name: "K1A";
        readonly id: "128C51CBEF";
        readonly category: "smg";
        readonly icon: "5mUa2p8WXbiyD71qUI8sGk/ed753b6f0ae30ab5737486dfcf32ee9f/K1A";
    };
    readonly mx4_storm: {
        readonly name: "Mx4 Storm";
        readonly id: "172522E967";
        readonly category: "smg";
        readonly icon: "4qRh1frGkQZxNyeKA4D6n1/20f89cd1d9953f06207b7340ea77fb17/Mx4_Storm";
    };
    readonly aug_a3: {
        readonly name: "AUG A3";
        readonly id: "2418EC6F2C";
        readonly category: "smg";
        readonly icon: "3W9XJdMOgpHSw55HfwRSAv/cf8f220678d503e6c3e535c00b2e636a/AUG_A3";
    };
    readonly p10_roni: {
        readonly name: "P10 RONI";
        readonly id: "2902BB46BB";
        readonly category: "smg";
        readonly icon: "7K86OBjL3zmYWt0ZvUcCLj/16a947334e39f27da177d787773593e4/r6-operator-weapon-smg-p10roni";
    };
    readonly '6p41': {
        readonly name: "6P41";
        readonly id: "B79310DA";
        readonly category: "lmg";
        readonly icon: "1wxS2HOCvoPAfnJEDFWjfw/7feddb98582ec37b500243d3f3e19eca/6P41";
    };
    readonly g8a1: {
        readonly name: "G8A1";
        readonly id: "106FE714C";
        readonly category: "lmg";
        readonly icon: "4TIb7oeJesaROOOfTlCBaZ/ffd6a802f9a779a0d39b2122c49b3254/G8A1";
    };
    readonly m249: {
        readonly name: "M249";
        readonly id: "8ACBE8797";
        readonly category: "lmg";
        readonly icon: "7z8UpVPS3P14OC1oL9dDIn/39c0c657f154218003fd4b2a9250b92f/M249";
    };
    readonly 't-95_lsw': {
        readonly name: "T-95 LSW";
        readonly id: "B699FDA29";
        readonly category: "lmg";
        readonly icon: "23HCxaNTRUHBlFAvCTMZQm/fe319cc164fac034a29e9b114ae7d5cb/T-95_LSW";
    };
    readonly 'lmg-e': {
        readonly name: "LMG-E";
        readonly id: "E50FB57FC";
        readonly category: "lmg";
        readonly icon: "7JVJIew6t3iKwgByvrFXyi/7ba44dfda28b525506633e453104a604/LMG-E";
    };
    readonly 'alda_5.56': {
        readonly name: "ALDA 5.56";
        readonly id: "172522E96A";
        readonly category: "lmg";
        readonly icon: "39yB6TFl9ph6Rb4bDV4lqK/7f9b3abf8dff19bacc026a7212849ca4/ALDA_5.56";
    };
    readonly m249_saw: {
        readonly name: "M249 SAW";
        readonly id: "2902BB7B8C";
        readonly category: "lmg";
        readonly icon: "7z8UpVPS3P14OC1oL9dDIn/39c0c657f154218003fd4b2a9250b92f/M249";
    };
    readonly '417': {
        readonly name: "417";
        readonly id: "B79310C0";
        readonly category: "marksman";
        readonly icon: "5djkS4YtAtOF0vBmg0T60x/ea2b1ff7e5367e66c99bc7ad7e95bfe3/417";
    };
    readonly 'ots-03': {
        readonly name: "OTs-03";
        readonly id: "106FE7152";
        readonly category: "marksman";
        readonly icon: "4fXznwDtLt61VCF8QIF4N3/34e2e6d6c33d4c504c945bdd13c322f6/OTs-03";
    };
    readonly camrs: {
        readonly name: "CAMRS";
        readonly id: "2CEAAB41D";
        readonly category: "marksman";
        readonly icon: "4dBzqVVmnpv1DZi91LAnEN/e374b4ea289fc992280b943cdbb94d60/CAMRS";
    };
    readonly 'sr-25': {
        readonly name: "SR-25";
        readonly id: "2CEABFB43";
        readonly category: "marksman";
        readonly icon: "3H3sICdj6BK8LhtQPRd2aJ/26826ebba73e0e5fd503256d069f3256/SR-25";
    };
    readonly mk_14_ebr: {
        readonly name: "Mk 14 EBR";
        readonly id: "128C5259FA";
        readonly category: "marksman";
        readonly icon: "6KIMqp5dA95z1RI3PrG9jv/eb939638169811a3fa858a44e6e5d97e/Mk_14_EBR";
    };
    readonly csrx_300: {
        readonly name: "CSRX 300";
        readonly id: "33E28FCCA0";
        readonly category: "marksman";
        readonly icon: "7tUB9ZNXJhdN6ejAkCEeFQ/99691bcc19f641cf872925905d08a539/CSRX_300";
    };
    readonly p226_mk_25: {
        readonly name: "P226 MK 25";
        readonly id: "B79310CA";
        readonly category: "pistol";
        readonly icon: "RTQvPQcywlRwUS1FjIKCX/6fc72fee2191c2e723276bc10ae4114e/P226_Mk_25";
    };
    readonly m45_meusoc: {
        readonly name: "M45 MEUSOC";
        readonly id: "B79310D7";
        readonly category: "pistol";
        readonly icon: "3u5cecgWYl3WuJK50mKEGd/a4a0eb15c710edfc0d29e98c2ee7ea33/M45_MEUSOC";
    };
    readonly '5.7_usg': {
        readonly name: "5.7 USG";
        readonly id: "9B2CA14C";
        readonly category: "pistol";
        readonly icon: "tkYcSAJSe5yGkeUhzZqBO/e81feb86df4a7eb6951052bec26b6ed7/5.7_USG";
    };
    readonly p9: {
        readonly name: "P9";
        readonly id: "B79310D9";
        readonly category: "pistol";
        readonly icon: "6Fd1cl17KA0CtgodEiiY6v/d0f145ea72f2aacbd04260ba7d8f1c74/P9";
    };
    readonly lfp586: {
        readonly name: "LFP586";
        readonly id: "B79310C8";
        readonly category: "pistol";
        readonly icon: "1zc7UtdBfCZakwbiYqBvSz/1fd3f1584de38ca7c9315d498f094276/LFP586";
    };
    readonly 'gsh-18': {
        readonly name: "GSH-18";
        readonly id: "106FE7153";
        readonly category: "pistol";
        readonly icon: "5s5Q33j3MNcXf9lwfxfd7m/4eb3a6af1d431481b6ddcec44fbc7602/GSh-18";
    };
    readonly pmm: {
        readonly name: "PMM";
        readonly id: "9B2CB308";
        readonly category: "pistol";
        readonly icon: "3y4LIwwm8YNQHAv8oOkWCK/a2375901cee34e68fa39c976d85de8aa/PMM";
    };
    readonly p12: {
        readonly name: "P12";
        readonly id: "B79310CB";
        readonly category: "pistol";
        readonly icon: "2mpM7rah7rwEW0bViIirUC/ed9caa4db58421519fa4db390b1aa164/P12";
    };
    readonly mk1_9mm: {
        readonly name: "MK1 9mm";
        readonly id: "37ACC03F7";
        readonly category: "pistol";
        readonly icon: "3tWoNeF3jQYs3w4EOydQYs/434409c96693df1fd3e969d778e70795/Mk1_9mm_BI";
    };
    readonly 'd-50': {
        readonly name: "D-50";
        readonly id: "53AEC9396";
        readonly category: "pistol";
        readonly icon: "6mMQRDsrComRFa7bC6cNkG/8cd17e545e3d28dcc11a040d000cfa16/D-50";
    };
    readonly prb92: {
        readonly name: "PRB92";
        readonly id: "8ACBEC355";
        readonly category: "pistol";
        readonly icon: "dl28J1HsE7mzhj66pmd5D/b8d8fc48d2dde13154047de94abbd8ca/PRB92";
    };
    readonly p229: {
        readonly name: "P229";
        readonly id: "959B5DBD4";
        readonly category: "pistol";
        readonly icon: "76ja0RxqzHW9PpvWgpG7Sk/cb753b50b20fe67deaef54d8b2a46b54/P229";
    };
    readonly usp40: {
        readonly name: "USP40";
        readonly id: "A3038BA93";
        readonly category: "pistol";
        readonly icon: "7FxemzWRtlpAhK9MyKp1Gp/817cc25b6b7c3575dc1ba53a6a8170a9/USP40";
    };
    readonly 'q-929': {
        readonly name: "Q-929";
        readonly id: "B699FDA2A";
        readonly category: "pistol";
        readonly icon: "2fRVszR5yGDHbV0AL8muso/0838dac90b66aa810daa49d36382fb64/Q-929";
    };
    readonly rg15: {
        readonly name: "RG15";
        readonly id: "E50FB57FD";
        readonly category: "pistol";
        readonly icon: "2LNSsp7B7wUnnPUweir7Jm/9f66d53be7a63a17a55253a0bea6eec1/RG15";
    };
    readonly bailiff_410: {
        readonly name: "Bailiff 410";
        readonly id: "172522E96B";
        readonly category: "pistol";
        readonly icon: "N8FLbo4fsNyBe8msKgRhT/8f403dc0b58087bcafab786dd95ba33f/Bailiff_410";
    };
    readonly 'keratos_.357': {
        readonly name: "Keratos .357";
        readonly id: "199D70994A";
        readonly category: "pistol";
        readonly icon: "4niSMDCeiryoMBXJZq60Vv/48339331d05e289868cf4050c49b1b2b/D-40";
    };
    readonly '1911_tacops': {
        readonly name: "1911 TACOPS";
        readonly id: "1EFE81B5D4";
        readonly category: "pistol";
        readonly icon: "189UukZ6fVnvQR6LJtLYry/6eec29603d5b7b0ca8cab6ac0ef083ac/1911_TACOPS";
    };
    readonly 'p-10c': {
        readonly name: "P-10C";
        readonly id: "1EFE80F702";
        readonly category: "pistol";
        readonly icon: "2l4qwB50zSFhFZVYRLNwqg/20df8114f69f96f2adc54779ccc5bbaa/P-10C";
    };
    readonly '.44_mag_semi-auto': {
        readonly name: ".44 Mag Semi-Auto";
        readonly id: "2418EC5F35";
        readonly category: "pistol";
        readonly icon: "6W3Jz0YcQzbZ6BOPr7VVel/4c67f342964132a652f7d5821e887050/.44_Mag_Semi-Auto";
    };
    readonly sdp_9mm: {
        readonly name: "SDP 9mm";
        readonly id: "2A69013364";
        readonly category: "pistol";
        readonly icon: "Tgsdyz3XEqmgUYi9aZZgb/6755f4da7af7a7179ffab92acf8d477e/SDP_9mm";
    };
    readonly m590a1: {
        readonly name: "M590A1";
        readonly id: "9B2CA14E";
        readonly category: "shotgun";
        readonly icon: "2zRHmgqENNiZqXQxC9Rsbj/e6542407c642f9b7c5a4546afb6db30a/M590A1";
    };
    readonly m1014: {
        readonly name: "M1014";
        readonly id: "B79310CC";
        readonly category: "shotgun";
        readonly icon: "2pUiVbwNnQnDTesmWXktqW/f27c1fab9a354bb89cbe309a688f5e02/M1014";
    };
    readonly 'sg-cqb': {
        readonly name: "SG-CQB";
        readonly id: "9B2CA14B";
        readonly category: "shotgun";
        readonly icon: "5JoL3b36Fsztt9Q2XYmrbJ/dacec96948d3f8fe92914a69b9aac593/SG-CQB";
    };
    readonly 'sasg-12': {
        readonly name: "SASG-12";
        readonly id: "9B2CB313";
        readonly category: "shotgun";
        readonly icon: "2Q6mL4CbifmIgifV2yV3Hi/2bb2b323f055b03a2c1ba516c262c24e/SASG-12";
    };
    readonly m870: {
        readonly name: "M870";
        readonly id: "106FE714E";
        readonly category: "shotgun";
        readonly icon: "2rkU6g4Rlg0e0U4rczWGTV/a51589a54c43f476d8eb984c0ea881e9/M870";
    };
    readonly super_90: {
        readonly name: "Super 90";
        readonly id: "2CEABFF54";
        readonly category: "shotgun";
        readonly icon: "1TLWSu0xHJlAsfEfafeC9X/f9647e70a18962bf1627095c8b46832e/Super_90";
    };
    readonly 'spas-12': {
        readonly name: "SPAS-12";
        readonly id: "2CEABF739";
        readonly category: "shotgun";
        readonly icon: "7Hp6Fbss6uI59OT4nZNB6e/a4d09954803cb2580353cfa03e8c778b/SPAS-12";
    };
    readonly 'spas-15': {
        readonly name: "SPAS-15";
        readonly id: "8ACBEBD23";
        readonly category: "shotgun";
        readonly icon: "CyofBgipHq4RTafvPFWd4/bc3d0ecc871b70e57735855f852efacf/SPAS-15";
    };
    readonly supernova: {
        readonly name: "Supernova";
        readonly id: "959B746E6";
        readonly category: "shotgun";
        readonly icon: "2tpjCRFLcc3hogjJGbKDsi/5ad0ab63b7245022aca5c1c1fb42d473/SuperNova";
    };
    readonly ita12l: {
        readonly name: "ITA12L";
        readonly id: "A3038B5A5";
        readonly category: "shotgun";
        readonly icon: "4Y6ziRzm9RiPii83fm8BV1/1f472744d2c2dec8d9206f4d8733d92c/ITA12L";
    };
    readonly ita12s: {
        readonly name: "ITA12S";
        readonly id: "A3038BA90";
        readonly category: "shotgun";
        readonly icon: "5G4DroaSdqHzJWCe7qqbHZ/5dd2e03f853182c78a1e7fcbc642f0cf/ITA12S";
    };
    readonly six12: {
        readonly name: "SIX12";
        readonly id: "B699FDA2B";
        readonly category: "shotgun";
        readonly icon: "2v6MwsHwjOZ5Muid53lyfN/e5f1c4997db93abfe3ac356fce23376c/SIX12";
    };
    readonly six12_sd: {
        readonly name: "SIX12 SD";
        readonly id: "B699FDA2C";
        readonly category: "shotgun";
        readonly icon: "1GTua079Xbtkpjhx96sRsW/079ed1a71a0d12b5e48e1b0d40b87110/SIX12_SD";
    };
    readonly 'fo-12': {
        readonly name: "FO-12";
        readonly id: "E50FB57FA";
        readonly category: "shotgun";
        readonly icon: "4TDWnhbgvLkc6HBWDJp2ST/f50cbd83d6d295ab59f17f7e21d713bc/FO-12";
    };
    readonly 'bosg.12.2': {
        readonly name: "BOSG.12.2";
        readonly id: "128C51DEC8";
        readonly category: "shotgun";
        readonly icon: "2ZjVndetsX8WEn5ZfyUQa0/e3a781be7eab22876d25f748e8fd0f5a/BOSG.12.2";
    };
    readonly acs12: {
        readonly name: "ACS12";
        readonly id: "BE99AD3BE";
        readonly category: "shotgun";
        readonly icon: "13z63kT1NLzn1U99o7WC4T/8655d3200f24b87246c36f2622603457/ACS12_PB";
    };
    readonly tcsg12: {
        readonly name: "TCSG12";
        readonly id: "2418EC7D3A";
        readonly category: "shotgun";
        readonly icon: "2NDbY7BTBJ9R09LUilTlRf/3728337cd3ba14ed6ab9de0c22e879af/TCSG12";
    };
    readonly super_shorty: {
        readonly name: "Super Shorty";
        readonly id: "1EFE80F701";
        readonly category: "shotgun";
        readonly icon: "7Dq8LDmIxAveRqXM17orUW/cbd96b47cd8ca74a7827b16ef73fe7cf/r6-operator-weapon-sa-supershorty";
    };
    readonly 'smg-11': {
        readonly name: "SMG-11";
        readonly id: "B79310CE";
        readonly category: "mp";
        readonly icon: "3WExw7Kepz9uAiWAbWW457/875fc631a3cf9fcc2849d9db2989cbcd/SMG-11";
    };
    readonly bearing_9: {
        readonly name: "Bearing 9";
        readonly id: "99EB0571E";
        readonly category: "mp";
        readonly icon: "4mdftEOh5Vu9KhhpgKLKrT/abedcc75868774018295ec2a08a7b3de/Bearing_9";
    };
    readonly c75_auto: {
        readonly name: "C75 Auto";
        readonly id: "128C51DEC6";
        readonly category: "mp";
        readonly icon: "3wUuefwPjU705mZkTdJ9UH/8ccb11884cfa34c176ac5500af139177/C75_Auto";
    };
    readonly 'smg-12': {
        readonly name: "SMG-12";
        readonly id: "128C51CBED";
        readonly category: "mp";
        readonly icon: "EwJgB7KdgOb6dDm7ro33u/b73f0890f992c1a365210f08efcc6db5/SMG-12";
    };
    readonly spsmg9: {
        readonly name: "SPSMG9";
        readonly id: "1EFE81B5D6";
        readonly category: "mp";
        readonly icon: "5EtwSgylXckBNg4n6gDR9J/bc6fc6c5c12ae11da59aee95828ebd76/SPSMG9";
    };
};
export declare const STATS_CATEGORIES: {
    pvp: string[][];
    pve: string[][];
    general: string[][];
    generalpvp: string[][];
    generalpve: string[][];
    operators: string[][];
    operatorspvp: string[][];
    operatorspve: string[][];
    weapons: string[][];
    weaponspvp: string[][];
    weaponspve: string[][];
    queues: string[][];
    queuespvp: string[][];
    queuespve: string[][];
    modes: string[][];
    modespvp: string[][];
    modespve: string[][];
    ranked: string[][];
    casual: string[][];
    custom: string[][];
    local: string[][];
    coop: string[][];
    normal: string[][];
    hard: string[][];
    realistic: string[][];
    normallocal: string[][];
    hardlocal: string[][];
    realisticlocal: string[][];
    normalcoop: string[][];
    hardcoop: string[][];
    realisticcoop: string[][];
    bomb: string[][];
    secureArea: string[][];
    hostage: string[][];
    elimination: string[][];
    disarmBomb: string[][];
    protectHostage: string[][];
    extractHostage: string[][];
};
//# sourceMappingURL=constants.d.ts.map