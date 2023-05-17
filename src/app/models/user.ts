import { Time } from '@angular/common';

export class User {
  _id?: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  pet: {
    name: string;
    feedingSchedule: {
      monday: Time;
      tuesday: Time;
      wednesday: Time;
      thursday: Time;
      friday: Time;
    };
  };

  constructor(
    name: string,
    lastName: string,
    email: string,
    password: string,
    pet: {
      name: string;
      feedingSchedule: {
        monday: Time;
        tuesday: Time;
        wednesday: Time;
        thursday: Time;
        friday: Time;
      };
    }
  ) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.pet = pet;
  }
}
