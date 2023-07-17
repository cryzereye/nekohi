import { Client } from "discord.js";
import { MongoClient } from "mongodb";
import { SellerProfile } from "./model/SellerProfile";

export { };
declare global {
    var CLIENT: Client;
    var DB_INSTANCE: MongoClient;
    var SELLERS: SellerProfile[];
}