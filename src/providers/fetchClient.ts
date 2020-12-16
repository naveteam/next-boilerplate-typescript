import axios from 'axios'

import { getToken, PUBLIC_ROUTES, PRIVATE_ROUTES } from 'helpers'

const __API__ = process.env.NEXT_PUBLIC_API_URL

const instance = axios.create({ baseURL: __API__ })

instance.interceptors.request.use(config => {
  const token = getToken()

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

instance.interceptors.response.use(
  response => response.data,
  error => {
    if (error?.response?.status !== 401 || PUBLIC_ROUTES.includes(window.location.pathname)) {
      return Promise.reject(error)
    }

    window.location.href = PRIVATE_ROUTES[0]
  }
)

export default instance
