import { User } from './user.type'
import { SuccessRespone } from './utils.type'

export type AuthResponse = SuccessRespone<{
  access_token: string
  expires: string
  user: User
}>
