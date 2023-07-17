import RSSParser from "rss-parser";
import { SellerProfile } from "../model/SellerProfile";
import { Logger } from "../util/Logger";
import { IRSSService } from "./IRSSService";

export class RRSService implements IRSSService {
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

    constructor(seller: SellerProfile) {
        this.name = seller.name;
        this.url = seller.url;
        this.currency = seller.currency;
        this.lastUpdated = seller.lastUpdated;

        this.namePath = "";
        this.roastPath = "";
        this.notesPath = "";
        this.pricePath = "";
        this.weightPath = "";
        this.parser = new RSSParser();
    }


    start(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    parse(): void {
        Logger.log(`Parsing ${this.name} feed...`);
    }
}