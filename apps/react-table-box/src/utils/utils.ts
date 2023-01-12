import { randParagraph, randSlug, randUser } from '@ngneat/falso';
import { randomUUID } from 'crypto';
import type { Person, Instrument, DriverGroup } from './utils.d';
import { dataTypes } from './utils.d';

/**
 * Generates mock data for a given type.
 * @param type The type of data to generate.
 * @param size The number of records to generate.
 */
export async function getMockData(type: dataTypes, size: number) {
  switch (type) {
    case 'person':
      return await generatePersonMockData(size);
    case 'instrument':
      return await generateInstrumentMockData(size);
    case 'driverGroup':
      return await generateDriverGroupMockData(size);
    default:
      throw new DOMException(`Invalid data type: ${type}`);
  }
}

/**
 * Generates mock data for a Person object.
 * @param size The number of records to generate.
 * @returns An array of Person objects.
 */
export async function generatePersonMockData(size: number) {
  const result: Person[] = [];
  for (let i = 0; i < size; i++) {
    const user = randUser();

    result.push({
      username: user.username,
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      age: Math.floor(Math.random() * 100),
    });
  }
  return result;
}

/**
 * Generates mock data for a Instrument object.
 * @param size The number of records to generate.
 * @returns An array of Instrument objects.
 */
export async function generateInstrumentMockData(size: number) {
  const result: Instrument[] = [];
  for (let i = 0; i < size; i++) {
    // Simulate a random network type.
    const networkTypes = ['Ethernet', 'WiFi', 'Bluetooth', 'Cellular', 'Other'];
    const networkType = networkTypes[Math.floor(Math.random() * networkTypes.length)] as string;

    result.push({
      name: randSlug(),
      hardware_id: randomUUID(),
      network_type: networkType, // Unsure about the types. Guessing this is a foreign key for a row in network types table.
    });
  }
  return result;
}

/**
 * Generates mock data for a DriverGroup object.
 * @param size The number of records to generate.
 * @returns An array of DriverGroup objects.
 */
export async function generateDriverGroupMockData(size: number) {
  const result: DriverGroup[] = [];
  for (let i = 0; i < size; i++) {
    const folder = randSlug().replace(/-/g, ' ').split(' ')[0] ?? `new folder ${i}`;

    result.push({
      name: randSlug().replace(/-/g, ' ') + ' Drivers',
      description: randParagraph({ length: 1 }).reduce((acc, curr) => acc + curr),
      folder_name: folder,
    });
  }
  return result;
}
