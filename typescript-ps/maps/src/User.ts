import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude())
    };
  }
}
