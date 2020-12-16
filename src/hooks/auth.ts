import { useRouter } from 'next/router'

import { login as authLogin } from 'services/auth'
import { PRIVATE_ROUTES, PUBLIC_ROUTES, setToken, clearToken } from 'helpers'
import { UserCredentials } from 'types'

export const useAuth = () => {
  const router = useRouter()

  const login = async (data: UserCredentials) => {
    try {
      const { token, ...user } = await authLogin(data)

      setToken(token)
      router.push(PRIVATE_ROUTES[0])

      return { user }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const logout = () => {
    clearToken()
    router.push(PUBLIC_ROUTES[0])
  }

  return { login, logout }
}
