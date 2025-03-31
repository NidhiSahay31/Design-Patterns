// newLogger.ts
export interface ILogger {
    logInfo(message: string): void;
    logError(message: string): void;
}

export class NewLogger implements ILogger {
    logInfo(message: string): void {
        console.log(`INFO: ${message}`);
    }

    logError(message: string): void {
        console.error(`ERROR: ${message}`);
    }
}
