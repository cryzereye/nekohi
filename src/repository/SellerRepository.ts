import { MongoClient } from "mongodb";
import { SellerProfile } from "../model/SellerProfile";
import { Logger } from "../util/Logger";

export class SellerRepository {
    constructor() {
        globalThis.DB_INSTANCE = new MongoClient(process.env.DB_URL);
        this.load();
    }

    async load(): Promise<void> {
        try {
            Logger.log('Connecting to database...');
            await globalThis.DB_INSTANCE.connect();

            Logger.log('Loading sellers...');
            const records = await globalThis.DB_INSTANCE
                .db("nekohi")
                .collection("seller")
                .find();

            records.map((record) => {
                console.log(record);
                const seller: SellerProfile = {
                    name: record.name,
                    url: record.url,
                    currency: record.currency,
                    lastUpdated: new Date(record.lastUpdated)
                }
                globalThis.SELLERS.push(seller);
            });

            Logger.log('Closing database connection...');
            await globalThis.DB_INSTANCE.close();

            Logger.log('Sellers loaded!');
            console.log(globalThis.SELLERS);
        }
        catch (err) {
            console.log(err);
        }
    }

}