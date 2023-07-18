import { Client, GatewayIntentBits, Partials } from "discord.js";
import 'dotenv/config';
import { SellerRepository } from "../repository/SellerRepository";
import { GoodCupService } from "../service/GoodCupService";
import { KurasuKyotoService } from "../service/KurasuKyotoService";
import { Logger } from "../util/Logger";

export default class Bot {
    constructor() {
        console.log(`[${new Date().toLocaleString()}] Starting up...`);
        globalThis.CLIENT = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildPresences
            ],
            partials: [Partials.Channel]
        });

        globalThis.CLIENT.once('ready', () => {
            Logger.log('Bot is ready!');
            this.startServices();
        });

        globalThis.CLIENT.login(process.env.DISCORD_BOT_TOKEN);
    }

    async startServices() {
        Logger.log('Starting services...');
        globalThis.SELLERS = [];

        new SellerRepository();
        if (await globalThis.SELLER_REPOSITORY.load()) {
            new KurasuKyotoService(globalThis.SELLERS[0]);
            new GoodCupService(globalThis.SELLERS[1]);
        }
    }

}