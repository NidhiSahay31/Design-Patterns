// Authentication system
class AuthService {
    authenticate(username, password) {
        // Simulate authentication logic
        console.log(`Authenticating user: ${username}`);
        return true;
    }
}

// Email service
class EmailService {
    sendEmail(email, subject, message) {
        // Simulate sending an email
        console.log(`Sending email to ${email} with subject: "${subject}"`);
    }
}

// Database service
class DatabaseService {
    saveUser(user) {
        // Simulate saving a user to the database
        console.log(`Saving user ${user.username} to the database.`);
    }
}

class UserRegistrationFacade {
    constructor() {
        this.authService = new AuthService();
        this.emailService = new EmailService();
        this.databaseService = new DatabaseService();
    }

    registerUser(username, password, email) {
        // Step 1: Authenticate the user
        if (this.authService.authenticate(username, password)) {
            // Step 2: Save the user to the database
            this.databaseService.saveUser({ username, password, email });
            
            // Step 3: Send a welcome email
            this.emailService.sendEmail(email, "Welcome!", `Hello ${username}, welcome to our platform!`);
            
            console.log("User registration complete.");
        } else {
            console.log("Authentication failed.");
        }
    }
}

//main code
const userFacade = new UserRegistrationFacade();
userFacade.registerUser("john_doe", "password123", "john@example.com");
