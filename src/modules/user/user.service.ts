import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  createUser(User: user) {}
  getUser(id: String) {}
  getAllUsers() {}
  updateUser(d: string) {}
  deleteUser(id: String) {}
}
