class Vehicle {
  constructor(public color: string) {}

  //   public drive(): void {
  //     console.log("chugga chugga");
  //   }
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("Vroom");
  }

  startDrivingProcess(): void {
    this.drive;
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

const car2 = new Car(4, "red");

car2.startDrivingProcess();
