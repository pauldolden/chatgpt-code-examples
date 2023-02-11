## Creational Design Patterns

### Singleton
The Singleton pattern restricts a class to have only one instance while providing a global access point to this instance.

Use case: When you need to make sure that only one instance of a class is created and shared across the entire application. For example, database connections, logging, thread pool, etc.

---

### Factory Method
The Factory Method pattern allows creating objects without specifying the exact class of object that will be created.

Use case: When you need to create objects, but you don't want to specify the exact class of object that will be created, or you want to create objects at runtime based on certain conditions.

---

### Abstract Factory
The Abstract Factory pattern provides a way to create families of related or dependent objects without specifying their concrete classes.

Use case: When you need to create objects that belong to a family of related objects, or when you need to create objects at runtime based on certain conditions.

---

### Builder
The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create various representations.

Use case: When you want to construct complex objects step by step and you want to create different representations of these objects.

---

### Prototype
The Prototype pattern allows creating objects by cloning existing objects, rather than creating new objects from scratch.

Use case: When you need to create a large number of similar objects, or when you need to create objects at runtime based on certain conditions.

## Structural Design Patterns

### Adapter
The Adapter pattern allows objects with incompatible interfaces to work together by wrapping one object with an adapter.

Use case: When you need to use an existing class, but its interface is not compatible with the client's interface, or when you need to create a reusable class that cooperates with classes that have incompatible interfaces.

---

### Bridge
The Bridge pattern decouples an abstraction from its implementation, allowing the two to vary independently.

Use case: When you need to separate an abstraction from its implementation so that the two can be modified independently, or when you want to share an implementation among multiple objects.

---

### Composite
The Composite pattern allows composing objects into tree structures to represent part-whole hierarchies.

Use case: When you want to represent part-whole hierarchies of objects, or when you want to treat individual objects and compositions of objects uniformly.

---

### Decorator
The Decorator pattern dynamically adds/overrides behavior in an existing method of an object.

Use case: When you want to add or override behavior in an existing method of an object, or when you want to add behavior to individual objects, not to a class as a whole.

---

### Facade
The Facade pattern provides a unified interface to a set of interfaces in a subsystem.

Use case: When you want to provide a simple interface to a complex subsystem, or when you want to make the subsystem easier to use.

---

### Flyweight
The Flyweight pattern allows for efficient usage of resources by sharing objects instead of creating new ones.

Use case: When you need to create a large number of similar objects, or when you need to create objects at runtime based on certain conditions.

---

### Proxy
The Proxy pattern provides a surrogate or placeholder object that controls access to another object.

Use case: When you need to control access to an object,
