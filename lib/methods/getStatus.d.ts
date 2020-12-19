declare const _default: () => Promise<{
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
export default _default;
//# sourceMappingURL=getStatus.d.ts.map