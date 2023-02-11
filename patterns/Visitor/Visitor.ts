interface Visitor {
  visitConcreteElementA(element: ConcreteElementA): void;
  visitConcreteElementB(element: ConcreteElementB): void;
}

interface Element {
  accept(visitor: Visitor): void;
}

class ConcreteVisitor1 implements Visitor {
  visitConcreteElementA(element: ConcreteElementA): void {
    console.log("ConcreteVisitor1 visited ConcreteElementA");
  }

  visitConcreteElementB(element: ConcreteElementB): void {
    console.log("ConcreteVisitor1 visited ConcreteElementB");
  }
}

class ConcreteVisitor2 implements Visitor {
  visitConcreteElementA(element: ConcreteElementA): void {
    console.log("ConcreteVisitor2 visited ConcreteElementA");
  }

  visitConcreteElementB(element: ConcreteElementB): void {
    console.log("ConcreteVisitor2 visited ConcreteElementB");
  }
}

class ConcreteElementA implements Element {
  accept(visitor: Visitor): void {
    visitor.visitConcreteElementA(this);
  }
}

class ConcreteElementB implements Element {
  accept(visitor: Visitor): void {
    visitor.visitConcreteElementB(this);
  }
}

const elements = [new ConcreteElementA(), new ConcreteElementB()];
const visitor1 = new ConcreteVisitor1();
const visitor2 = new ConcreteVisitor2();

for (const element of elements) {
  element.accept(visitor1);
  element.accept(visitor2);
}
