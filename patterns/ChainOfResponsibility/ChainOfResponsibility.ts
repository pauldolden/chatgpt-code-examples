abstract class Handler {
  protected nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

class ConcreteHandler1 extends Handler {
  handle(request: string): string {
    if (request === "ConcreteHandler1") {
      return "ConcreteHandler1";
    }

    return super.handle(request);
  }
}

class ConcreteHandler2 extends Handler {
  handle(request: string): string {
    if (request === "ConcreteHandler2") {
      return "ConcreteHandler2";
    }

    return super.handle(request);
  }
}

function clientCode(handler: Handler) {
  const requests = ["ConcreteHandler2", "ConcreteHandler1", ""];
  for (const request of requests) {
    console.log(`Client: Who wants to handle '${request}'?`);
    const result = handler.handle(request);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  ${request} was not handled.`);
    }
  }
}

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
handler1.setNext(handler2);

clientCode(handler1);
