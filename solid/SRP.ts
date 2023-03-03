// Example of a class that violates the SRP
class User {
  constructor(private name: string, private email: string) {}

  // Method to send an email to the user
  sendEmail(subject: string, message: string) {
    // Send email to the user
  }

  // Method to save user data to a database
  saveToDatabase() {
    // Save user data to the database
  }
}

// Example of a refactored class that follows the SRP
class User {
  constructor(private name: string, private email: string) {}

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

// Example of a separate class for sending emails
class EmailService {
  sendEmail(to: string, subject: string, message: string) {
    // Send email to the recipient
  }
}

// Example of a separate class for saving user data to a database
class UserRepository {
  save(user: User) {
    // Save user data to the database
  }
}
