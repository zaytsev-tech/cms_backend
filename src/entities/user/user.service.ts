import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    return await this.userRepository.find();
  }

  async getUserById(userId: string) {
    const findedUser = await this.userRepository.find({
      where: {
        id: Number(userId),
      },
    });

    if (!findedUser) {
      throw new Error('User not found');
    }

    return findedUser;
  }

  async createUser(body: CreateUserDto) {
    const salt = genSaltSync(10);
    const newUser = {
      ...body,
      password: hashSync(body.password, salt),
    };

    return await this.userRepository.save(newUser);
  }
}
