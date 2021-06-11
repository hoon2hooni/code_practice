interface V {
  drive(): void;
  honk(): string;
}
class Vehicle implements V{
  drive(): void {
    console.log('gogo');
  }
  honk() {
    return "hello";
  }
}

const vehicle = new Vehicle();
vehicle.drive();