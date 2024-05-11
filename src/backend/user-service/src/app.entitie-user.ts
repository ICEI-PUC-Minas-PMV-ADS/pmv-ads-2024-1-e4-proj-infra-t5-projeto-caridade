export class User {
  public readonly id?: number 
  public name: string
  public email: string 
  public last_name: string
  public password: string 

  constructor(props: Omit<User, 'id'>) {
      this.name = props.name
      this.last_name = props.last_name
      this.email = props.email
      this.password = props.password
  }
}