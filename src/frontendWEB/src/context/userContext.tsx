import { ReactElement, createContext, useContext, useState } from 'react'
import { IUser } from '../services/UserServices/IUser'
import { UserServices } from '../services/UserServices/UserServices'

interface IUserContextProps {
  loggedUser: () => Promise<void>
  user: IUser | undefined
  isUserLogged: boolean
}

interface IProps {
  children: ReactElement
}

export const UserContext = createContext({} as IUserContextProps)

export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>()
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false)

  const loggedUser = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await UserServices.authUser(token)
      setUser(response)
      setIsUserLogged(true)
    } catch (error) {
      setIsUserLogged(false)
    }
  }

  return (
    <UserContext.Provider value={{
      loggedUser,
      user,
      isUserLogged,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)