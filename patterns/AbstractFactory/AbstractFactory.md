# Abstract Factory

The Abstract Factory pattern provides a way to create families of related or dependent objects without specifying their concrete classes. It separates the process of object creation from the client code that uses those objects.

## Intent

- Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
- A factory of factories; a factory that groups the individual but related/dependent factories together without specifying their classes.
- Decouple an application from its creation.

## Structure

The Abstract Factory pattern has several components:

- Abstract Factory: This is an interface that specifies the methods for creating objects.
- Concrete Factory: This is a concrete implementation of the Abstract Factory that creates objects.
- Abstract Product: This is an interface that defines the objects that the factory creates.
- Concrete Product: This is a concrete implementation of the Abstract Product that defines a specific type of object.
- Client: This is the code that uses the objects created by the factory.

## Participants

- AbstractFactory: declares an interface for operations that create abstract products
- ConcreteFactory: implements the operations to create concrete products.
- AbstractProduct: declares an interface for a type of product object
- Product: defines a product object to be created by the corresponding ConcreteFactory; implements the AbstractProduct interface
- Client: uses interfaces declared by AbstractFactory and AbstractProduct classes.

## Examples

- Creating different families of products (e.g. for different platforms)
- Code modularity and separation of concerns.

