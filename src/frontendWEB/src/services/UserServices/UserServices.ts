import { api } from "../api";
import { ICreateUser, IUpdateUser, IUser, IUserLogin } from "./IUser";

export class UserServices {

  static async login(data: IUserLogin) {
    const response = await api.post('/user/signin', data)
    localStorage.setItem('token', response.data)
  }

  static async destroy() {
    const token = localStorage.getItem('token')
    await api.delete(`/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  static async create(data: ICreateUser) {
    const response = await api.post('/user', data)
    return response.data
  }

  static async update(data: IUpdateUser) {
    const token = localStorage.getItem('token')
    const response = await api.put('/user', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }

  static async authUser(token: string | null) {    
    const response = await api.get('/user/auth', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }

  static async getById(id: number) {
    const response = await api.get<IUser>(`/users/${id}`)
    return response.data
  }

  static async logout() {
    localStorage.removeItem("token")
  }
}