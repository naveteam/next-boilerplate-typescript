import { UserProvider } from './user-context'

const AppProviders: React.FC = ({ children }) => {
  return <UserProvider>{children}</UserProvider>
}

export default AppProviders
