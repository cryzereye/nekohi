import RSSParser from "rss-parser";

export interface IRSSService {
    name: string;
    url: string;
    currency: string;
    lastUpdated: Date;

    namePath: string;
    roastPath: string;
    notesPath: string;
    pricePath: string;
    weightPath: string;
    parser: RSSParser;

    start(): Promise<void>;
    parse(): void;
}