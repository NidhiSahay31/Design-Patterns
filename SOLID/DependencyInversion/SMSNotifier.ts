import { Notifier } from "./notifier";

  // Low-Level Module: SMSNotifier
  export class SMSNotifier implements Notifier {
    send(message: string): void {
      console.log(`Sending SMS with message: ${message}`);
    }
  }
  