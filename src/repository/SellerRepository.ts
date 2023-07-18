import { MongoClient } from "mongodb";
import { SellerProfile } from "../model/SellerProfile";
import { Logger } from "../util/Logger";

export class SellerRepository {
    constructor() {
        globalThis.DB_INSTANCE = new MongoClient(process.env.DB_URL);
        globalThis.SELLER_REPOSITORY = this;
    }

    public async load(): Promise<boolean> {
        try {
            Logger.log('Connecting to database...');
            await globalThis.DB_INSTANCE.connect();

            Logger.log('Loading sellers...');
            const records = await globalThis.DB_INSTANCE
                .db("nekohi")
                .collection("seller")
                .find().toArray();

            records.map((record) => {
                const seller: SellerProfile = {
                    name: record.name,
                    url: record.url,
                    currency: record.currency,
                    lastUpdated: new Date(record.lastUpdated)
                }
                globalThis.SELLERS.push(seller);
            });

            Logger.log('Sellers loaded!');

            Logger.log('Closing database connection...');
            await globalThis.DB_INSTANCE.close();
        }
        catch (err) {
            console.log(err);
        }
        return true;
    }

}