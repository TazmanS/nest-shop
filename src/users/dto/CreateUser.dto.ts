
export class CreateUserDto {
  login: string
  email: string
  password: string
  keep_me: boolean
  email_me: boolean
  role = 0
}