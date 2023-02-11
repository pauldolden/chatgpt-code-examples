class Prototype {
  clone(): Prototype {
    const clone = Object.create(this);
    return clone;
  }
}

class ConcretePrototype1 extends Prototype {
  constructor(public field1: string) {
    super();
  }
}

class ConcretePrototype2 extends Prototype {
  constructor(public field2: number) {
    super();
  }
}

const prototype1 = new ConcretePrototype1("prototype 1");
const prototype2 = new ConcretePrototype2(2);

const clone1 = prototype1.clone();
const clone2 = prototype2.clone();

console.log(clone1.field1);
console.log(clone2.field2);
