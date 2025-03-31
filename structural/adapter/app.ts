// app.ts
import { LoggerAdapter } from './loggerAdapter';

const logger = new LoggerAdapter();

logger.logInfo('Application started successfully.');
logger.logError('An unexpected error occurred.');
