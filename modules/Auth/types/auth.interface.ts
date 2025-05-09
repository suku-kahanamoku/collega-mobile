export interface IUser {
  name: string;
  email: string;
  phone: string;
  img: string;
}

export interface ISession {
  login: string;
  bearer: string;
  user: IUser;
}

export interface ISignIn {
  login: string;
  pass: string;
}
