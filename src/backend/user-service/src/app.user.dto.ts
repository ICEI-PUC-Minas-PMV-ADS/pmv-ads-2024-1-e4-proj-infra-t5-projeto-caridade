export interface ICreateUserDto {
  name: string
  last_name: string
  email: string
  password: string
}

export interface IUpdateUserDto {
  id: number
  name: string
  last_name: string
}