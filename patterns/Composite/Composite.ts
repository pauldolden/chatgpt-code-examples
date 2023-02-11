abstract class Component {
  protected parent: Component;

  setParent(parent: Component) {
    this.parent = parent;
  }

  getParent(): Component {
    return this.parent;
  }

  abstract operation(): string;
}

class Leaf extends Component {
  operation(): string {
    return "Leaf";
  }
}

class Composite extends Component {
  private children: Component[] = [];

  add(component: Component) {
    this.children.push(component);
    component.setParent(this);
  }

  remove(component: Component) {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
    component.setParent(null);
  }

  operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }
    return `Branch(${results.join("+")})`;
  }
}

const leaf1 = new Leaf();
const leaf2 = new Leaf();
const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);
console.log(composite.operation());
