interface V {
  honk(): string;
}
class Vehicle implements V {
  constructor(public color: string) {
    //this.color = color
  }
  honk() {
    return 'hello';
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('VVs..');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("red");
car.startDrivingProcess();
console.log(car.color);

const smallVehicle = new Vehicle("black");