import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/typeorm/entities/User';
import { errors } from 'src/utils/errors';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async getUsers(): Promise<User[]> {
    try {
      return await this.userRepository.find()
    } catch (e) {
      throw new HttpException('Error', HttpStatus.BAD_REQUEST)
    }
  }

  async createUser(userDetails: CreateUserParams): Promise<User> {
    try {
      const newUser = this.userRepository.create({ ...userDetails, createdAt: new Date() })
      return await this.userRepository.save(newUser)
    } catch (e) {
      throw new HttpException(errors[e.code], HttpStatus.BAD_REQUEST)
    }
  }

  updateUser(userDetails: UpdateUserParams) {
    return
  }

}
