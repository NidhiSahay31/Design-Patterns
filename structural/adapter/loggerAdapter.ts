// loggerAdapter.ts
import { LegacyLogger } from './legacyLogger';
import { ILogger } from './newLogger';

export class LoggerAdapter implements ILogger {
    private legacyLogger: LegacyLogger; //ref to service/legacy class

    constructor() {
        this.legacyLogger = new LegacyLogger();
    }

    logInfo(message: string): void {
        // Use the legacy logger for info messages
        this.legacyLogger.logMessage(`Info: ${message}`);
    }

    logError(message: string): void {
        // Use the legacy logger for error messages
        this.legacyLogger.logMessage(`Error: ${message}`);
    }
}
