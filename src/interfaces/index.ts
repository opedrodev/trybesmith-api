export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface IUser {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface IOrder {
  id?: number;
  userId: number;
  productsIds: number[];
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IError {
  status: number;
  message: string;
}