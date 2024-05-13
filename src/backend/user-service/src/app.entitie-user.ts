export class User {
  public readonly id?: number 

  public email: string 
  public name: string
  public last_name: string
  public password: string 

  constructor(props: Omit<User, 'id'>) {
    this.email = props.email
    this.name = props.name
    this.password = props.password
  }
}