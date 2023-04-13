export type CreateUserParams = {
  login: string
  email: string
  password: string
  role: number
  keep_me: boolean
  email_me: boolean
}

export type UpdateUserParams = {
  email: string
  password: string
  role: number
}

export type SafeUser = {
  login: string
  email: string
  role: number
  keep_me: boolean
  email_me: boolean
}