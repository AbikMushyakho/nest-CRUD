import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [];

  getAllUsers() {
    return {
      status: true,
      message: 'All Users',
      data: [...this.users],
    };
  }
  getOneUser(id: string) {
    return {
      status: true,
      message: `User by id: ${id}`,
      data: this.getUserById(id)[0],
    };
  }

  insertUser(name: string, age: number, email: string, password: string) {
    const id = uuidv4();
    const newUser = new User(id, name, email, password, age);
    this.users.push(newUser);
    return {
      status: true,
      message: 'User Added Successfully',
      data: id,
    };
  }
  updateUser(
    id: string,
    name: string,
    age: number,
    email: string,
    password: string,
  ) {
    const [targetUser, index] = this.getUserById(id);
    const newUserParams = {
      ...targetUser,
      name,
      age,
      email,
      password,
    };

    const newUser = new User(
      id,
      newUserParams.name,
      newUserParams.email,
      newUserParams.password,
      newUserParams.age,
    );
    this.users[index] = newUser;
    return {
      status: true,
      message: 'User updated successfully',
      data: newUser,
    };
  }

  deleteUser(id: string) {
    const [target, index] = this.getUserById(id);
    this.users.splice(index, 1);
    return {
      status: true,
      message: 'User updated successfully',
    };
  }

  private getUserById(id: string): [User, number] {
    const index = this.users.findIndex((user) => user.id === id);
    return [this.users[index], index];
  }
}
