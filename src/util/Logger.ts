export class Logger {
    public static log(message: string): void {
        console.log(`[${new Date().toLocaleString()}] ${message}`);
    }

    public static error(message: string): void {
        console.error(`[${new Date().toLocaleString()}] ${message}`);
    }
}