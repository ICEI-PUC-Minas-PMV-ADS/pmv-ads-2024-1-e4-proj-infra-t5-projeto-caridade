import { api } from "../api";
import { ICreateUser, IUpdateUser } from "./IUser";

export class UserServices {

  static async login(data: IUserLogin) {
    const response = await api.post<IJwtoken>('/signin', data)
    localStorage.setItem('token', response.data.token)
  }

  static async create(data: ICreateUser) {
    const response = await api.post('/user', data)
    return response.data
  }

  static async update(data: IUpdateUser) {
    const response = await api.put('/user', data)
    return response.data
  }
}