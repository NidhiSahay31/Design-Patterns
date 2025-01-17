import { Notifier } from "./notifier";

// High-Level Module
export class NotificationService {
    private notifier: Notifier;
  
    constructor(notifier: Notifier) {
      this.notifier = notifier;
    }
  
    notifyUser(message: string): void {
      this.notifier.send(message);
    }
  }
  