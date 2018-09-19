export class Authenticate {
  username?: string;
  password?: string;
}

export class User {
  userid?: number;
  username?: String;
  password?: String;
  fullname?: String;
  email?: String;
  phone?: String;
  age?: number;
  role?: string;
}

export class UserRegister {
  username?: string;
  password?: string;
  passwordConfirm: string;
  fullname?: string;
  email?: string;
  phone?: number;
  age?: number;  
}