export interface User {
  id?: number;
  name: string;
  surname?: string;
  age?: number;
  dateOfBirth?: string;
  address?: Address;
  role?: Role;
  username?: string;
  profilePhotoUrl?: string;
  gender?: Gender;
}

export interface Address {
  city: string;
  street: string;
  postalCode: string;
};

export interface Companies {
  id: number;
  name: string;
  description: string;
  location: Address;
};

export enum Gender {
  male = "male",
  female = "female",
  others = "others",
}

export enum Role {
  staff = "staff",
  student = "student",
  manager = "manager",
  admin = "admin",
}
