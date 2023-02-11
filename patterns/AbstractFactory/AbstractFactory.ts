interface Vehicle {
  drive(): void;
}

interface VehicleFactory {
  createVehicle(): Vehicle;
}

class Car implements Vehicle {
  drive(): void {
    console.log("Driving a car");
  }
}

class CarFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new Car();
  }
}

class Truck implements Vehicle {
  drive(): void {
    console.log("Driving a truck");
  }
}

class TruckFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new Truck();
  }
}

const carFactory = new CarFactory();
const car = carFactory.createVehicle();
car.drive();

const truckFactory = new TruckFactory();
const truck = truckFactory.createVehicle();
truck.drive();
