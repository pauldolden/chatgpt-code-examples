Design Patterns
Abstract Factory:
Provides an interface for creating families of related or dependent objects without specifying their concrete classes. The objects returned by the factory can be of different classes, but they are designed to work together as a group.

Useful for creating different variations of a product, such as different themes for a website or different regional versions of a product.

Builder:
Separates the construction of a complex object from its representation, allowing the same construction process to create various representations. The builder pattern is often used when the algorithm for creating a complex object should be independent of the parts that make up the object and how they're assembled.

Useful for constructing complex objects step by step.

Factory Method:
Defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to its subclasses.

Useful for creating objects without specifying the exact class of object that will be created.

Prototype:
Specifies the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

Useful for creating new objects by copying existing objects, avoiding the overhead of creating the object from scratch.

Singleton:
Ensures that a class has only one instance, while providing a global point of access to this instance.

Useful for situations where it's important to limit a class to a single instance, such as a configuration manager or a logging service.

Adapter:
Converts the interface of a class into another interface clients expect. An adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

Useful for connecting classes that wouldn't otherwise be able to work together because of incompatible interfaces.

Bridge:
Decouples an abstraction from its implementation, allowing the two to vary independently.

Useful for creating flexible systems that can handle changes in the implementation of an abstraction without affecting clients.

Composite:
Composes objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

Useful for representing part-whole hierarchies, such as the structure of a company or the contents of a file system.

Decorator:
Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

Useful for adding additional behavior or state to objects dynamically, without having to create a new subclass.

Facade:
Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

Useful for creating a simplified interface to a complex system, making it easier to use for clients.

Flyweight:
Uses sharing to support large numbers of fine-grained objects efficiently. Flyweight lets you fit more objects into the available amount of memory by sharing common parts of state between multiple objects, instead of keeping all of the data in each object.

Useful for reducing the memory overhead of managing a large number of objects.

Proxy:
Provides a surrogate or placeholder for another object to control access to it.

Useful for creating objects that act as placeholders for other objects, allowing you to add extra behavior around access to the real object.

Chain of Responsibility:
Allows multiple objects to handle a request, giving them a chance to handle the request in turn. Chain of Responsibility lets you pass requests sequentially along a dynamic chain of receivers until one of them handles the request.

Useful for creating systems where it's not clear which object should handle a request, or when you want to give multiple objects a chance to handle a request.

Command:
Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

Useful for creating objects that represent actions, allowing you to pass requests as method calls, queue or log requests, and support undo/redo.

Interpreter:
Given a language, defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

Useful for creating your own domain-specific language, or for interpreting existing languages.

Iterator:
Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

Useful for accessing the elements of a collection in a uniform way, regardless of the underlying implementation of the collection.

Mediator:
Defines an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.

Useful for creating flexible systems that can handle changes in the interactions between objects, without having to change the objects themselves.

Memento:
Without violating encapsulation, captures and externalizes an object's internal state allowing the object to be restored to this state later.

Useful for creating objects that can be restored to a previous state, such as an undo/redo system.

Observer:
Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

Useful for creating systems where multiple objects need to be notified of changes to another object, such as a system for updating the user interface when data changes.

State:
Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

Useful for creating objects whose behavior changes based on their internal state, such as a toggle button that changes between "on" and "off" states.

Strategy:
Defines a family of algorithms, encapsulates each algorithm, and makes the algorithms interchangeable. Strategy lets the algorithm vary independently from clients that use it.

Useful for creating objects that can switch between different algorithms at runtime, such as different sorting algorithms.

Template Method:
Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

Useful for creating algorithms with common steps, where some steps can be overridden by subclasses to provide custom behavior.

Visitor:
Represent an operation to be performed on elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.

Useful for adding new operations to a group of objects without changing the objects themselves, such as adding a new type of export to a group of documents.


