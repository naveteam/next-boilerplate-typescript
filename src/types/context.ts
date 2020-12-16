export interface UserData {
  name: string
  email: string
  //add usefull user data
}

export interface UserContextData {
  user: UserData
  setUser: (user: UserData) => void
}
