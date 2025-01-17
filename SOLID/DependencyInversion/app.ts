import { EmailNotifier } from "./EmailNotifier";
import { NotificationService } from "./NotificationService";
import { SMSNotifier } from "./SMSNotifier";

// Using EmailNotifier
const emailNotifier = new EmailNotifier();
const emailService = new NotificationService(emailNotifier);
emailService.notifyUser("Your order has been shipped!");

// Using SMSNotifier
const smsNotifier = new SMSNotifier();
const smsService = new NotificationService(smsNotifier);
smsService.notifyUser("Your package will arrive tomorrow.");
