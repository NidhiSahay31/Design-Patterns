import { Notifier } from "./notifier";

// Low-Level Module: EmailNotifier
export class EmailNotifier implements Notifier {
    send(message: string): void {
      console.log(`Sending email with message: ${message}`);
    }
  }
  