export interface User {
  name: string;
  email: string;
  phone: string;
  img: string;
}

export interface Session {
  login: string;
  bearer: string;
  user: User;
}
