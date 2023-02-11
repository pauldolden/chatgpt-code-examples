interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
    // log to a file
  }
}

class LoggerFactory {
  static getLogger(type: "console" | "file"): Logger {
    switch (type) {
      case "console":
        return new ConsoleLogger();
      case "file":
        return new FileLogger();
      default:
        throw new Error("Invalid logger type");
    }
  }
}

const logger = LoggerFactory.getLogger("console");
logger.log("Hello, world!");
