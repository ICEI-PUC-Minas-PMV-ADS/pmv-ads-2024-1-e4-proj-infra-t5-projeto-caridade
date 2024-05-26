export interface ICreateUser {
  name: string
  email: string
  last_name: string
  password: string
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IJwtoken {
  token: string
}