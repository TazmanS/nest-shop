import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { errors } from 'src/utils/errors';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { User, UserDocument } from './shemas/user.schema';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) { }

  async createUser(createUserParams: CreateUserParams): Promise<User> {
    try {
      return this.userModel.create(createUserParams)
    } catch (e) {
      throw new HttpException(errors[e.code], HttpStatus.BAD_REQUEST)
    }
  }

}
