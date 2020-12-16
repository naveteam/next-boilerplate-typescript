import client from 'providers/fetchClient'

import { UserCredentials } from 'types'

export const getUser = () => client.get('/me')

export const login = (data: UserCredentials) => client.post('/login', data)
