import { faker } from '@faker-js/faker';

export type Person = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};

export function makeData() {
  let data: Person[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
    });
  }
  return data;
}
