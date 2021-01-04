class Vehicle {
  constructor(public color: string) {}

  //   public drive(): void {
  //     console.log("chugga chugga");
  //   }
  protected honk(): void {
    console.log("beep");
  }
}

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("Vroom");
//   }

//   startDrivingProcess(): void {
//     this.drive;
//     this.honk();
//   }
// }

const vehicle = new Vehicle("orange");
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

// const car2 = new Car();
// car2.drive();
// car2.startDrivingProcess();
// car2.honk();
