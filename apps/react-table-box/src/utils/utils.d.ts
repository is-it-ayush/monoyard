export type dataTypes = 'person' | 'driverGroup' | 'instrument';

export type Person = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
};

export type DriverGroup = {
  name: string;
  description: string;
  folder_name: string;
};

export type Instrument = {
  name: string;
  hardware_id: string;
  network_type: string; // For Now we will use this as a string. This will be a foreign key to a table of network types in a real world scenario.
};
