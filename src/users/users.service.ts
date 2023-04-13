import { Injectable, Inject, forwardRef, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserParams, SafeUser, UpdateUserParams } from './types';
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
    try {
      const user = await this.userModel.create({
        ...createUserParams,
        password: await this.createPassword(createUserParams.password)
      })
      if (user) {
        return this.authService.login(user)
      } else {
        throw new HttpException("Something went wrong!!!", HttpStatus.UNPROCESSABLE_ENTITY)
      }
    } catch (e) {
      throw new HttpException("User already exist!", HttpStatus.UNPROCESSABLE_ENTITY)
    }
  }

  async findOne(email: string): Promise<User> {
    return await this.userModel.findOne({ email })
  }

  async getProfilte({ email }): Promise<SafeUser> {
    const user = await this.userModel.findOne({ email }, { password: false })
    return user
  }

}
