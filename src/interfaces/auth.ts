import type { IUser } from "./user";

export interface IResponseSuccessAuth {
  token: string,
  user: IUser
}