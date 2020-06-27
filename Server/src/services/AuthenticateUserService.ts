import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/Users';

interface Request {
  email: string;
  password: string;
}

export default class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<{ user: User }> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Email ou senha incorretos.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Email ou senha incorretos.');
    }

    return { user };
  }
}
