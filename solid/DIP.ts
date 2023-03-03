// Example of a class that violates the DIP
class OrderService {
  constructor(private database: Database) {}

  getOrder(orderId: number) {
    // Get order from the database
  }
}

class Database {
  connect() {
    // Connect to the database
  }

  disconnect() {
    // Disconnect from the database
  }
}

// Example of a refactored class that follows the DIP
interface DatabaseConnector {
  connect(): void;
  disconnect(): void;
  query(queryString: string): any;
}

class OrderService {
  constructor(private databaseConnector: DatabaseConnector) {}

  getOrder(orderId: number) {
    const queryString = "SELECT * FROM orders WHERE id = " + orderId;
    const order = this.databaseConnector.query(queryString);
    // Return order data
  }
}

class Database implements DatabaseConnector {
  connect() {
    // Connect to the database
  }

  disconnect() {
    // Disconnect from the database
  }

  query(queryString: string) {
    // Execute query and return results
  }
}
