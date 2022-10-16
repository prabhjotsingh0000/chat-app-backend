import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
  ) { }

  async insertUser(name: string, email: string, password: string) {
    const newUser = new this.userModel({
      name,
      email,
      password,
    });
    const result = await newUser.save();
    console.log(result);
    return result.id as string;
  }


  async getUsers() {
    const users = await this.userModel.find().exec();
    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    }));
  }

  async getSingleUser(userId: string) {
    const user = await this.findUser(userId);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  async getSingleUserByEmail(userEmail: string, userPassword): Promise<any> {
    let user;
    console.log(userEmail);
    console.log(userPassword);
    try {
      user = await this.userModel.find({ email: [userEmail], password: [userPassword] });
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (user.length == 0) {
      throw new NotFoundException('Could not find user.');
    }
    console.log(user);
    return user[0];
  }


  async updateUser(userId: string, name: string, email: string, password: string) {
    const updatedUser = await this.findUser(userId);
    if (name) {
      updatedUser.name = name;
    }
    if (email) {
      updatedUser.email = email;
    }
    if (password) {
      updatedUser.password = password;
    }
    updatedUser.save();

  }

  async deleteUser(userId: string) {
    const result = await this.userModel.deleteOne({ _id: userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find user.');
    }
  }

  private async findUser(id: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }

    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }

}