export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  status: "active" | "inactive" | "pending";
  [key: string]: any;
}
