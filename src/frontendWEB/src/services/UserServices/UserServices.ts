import { api } from "../api";
import { ICreateUser } from "./IUser";

export class UserServices {
  static async create(data: ICreateUser) {
    const response = await api.post('/user', data)
    return response.data
  }
}