import { api } from "../api";
import { ICreateUser, IJwtoken, IUserLogin } from "./IUser";

export class UserServices {

  static async login(data: IUserLogin) {
    const response = await api.post<IJwtoken>('/signin', data)
    localStorage.setItem('token', response.data.token)
  }

  static async create(data: ICreateUser) {
    const response = await api.post('/user', data)
    return response.data
  }
}