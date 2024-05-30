export interface ICreateUser {
  name: string
  email: string
  last_name: string
  password: string
}

export interface IUser {
  id: number
  name: string
  email: string
  last_name: string
  password: string
}

export interface IUpdateUser {
  name: string
}

export interface IUserLogin {
  email: string
  password: string
}