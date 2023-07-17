declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DISCORD_BOT_TOKEN: string;
            DISCORD_APP_ID: string;
            DISCORD_PUBLIC_KEY: string;
            DB_URL: string;
        }
    }
}

export { };

