import { createContext, useContext, useState } from 'react'

import { UserContextData } from 'types'

const UserContext = createContext<Partial<UserContextData>>({})

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within an UserProvider')
  }

  return context
}

const UserProvider = props => {
  const [user, setUser] = useState({})

  return <UserContext.Provider value={{ user, setUser }} {...props} />
}

export { UserProvider, useUser }
