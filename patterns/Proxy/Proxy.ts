interface Subject {
  request(): string;
}

class RealSubject implements Subject {
  request(): string {
    return "RealSubject: Handling request.";
  }
}

class _Proxy implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  request(): string {
    if (this.checkAccess()) {
      return this.realSubject.request();
    } else {
      return "Proxy: Access denied.";
    }
  }

  private checkAccess(): boolean {
    // Some real checks should go here.
    console.log("Proxy: Checking access prior to firing a real request.");
    return true;
  }
}

function clientCode(subject: Subject) {
  console.log(subject.request());
}

console.log("Client: Executing the client code with a real subject:");
const realSubject = new RealSubject();
clientCode(realSubject);

console.log("\n");

console.log("Client: Executing the same client code with a proxy:");
const proxy = new _Proxy(realSubject);
clientCode(proxy);
