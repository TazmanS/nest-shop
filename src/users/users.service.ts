import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserParams, UpdateUserParams } from './types';
import { User, UserDocument } from './shemas/user.schema'
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,

    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) { }

  async createPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash
  }

  async createUser(createUserParams: CreateUserParams): Promise<any> {
    const user = await this.userModel.create({
      ...createUserParams,
      password: await this.createPassword(createUserParams.password)
    })
    return this.authService.login(user)
  }

  async findOne(email: string): Promise<User> {
    return await this.userModel.findOne({ email })
  }

}
