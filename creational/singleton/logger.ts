// Logger.ts
class Logger {
    private static instance: Logger;
  
    // Private constructor to prevent direct instantiation
    private constructor() {}
  
    // Public method to provide access to the single instance
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    // Example method to log messages
    public log(message: string): void {
      console.log(`[LOG]: ${message}`);
    }
  }
  
  export default Logger;
  