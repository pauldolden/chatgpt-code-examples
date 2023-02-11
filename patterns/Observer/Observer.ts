interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

class CurrentConditionsDisplay implements Observer {
  private temperature: number;
  private humidity: number;
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    subject.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
    );
  }
}

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
