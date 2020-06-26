import User from '../models/Users'

interface Request {
  name: string
  email: string
  password: string
}

export default class CreateUserService {
  public async execute(): Promise<void> {

  }
}
