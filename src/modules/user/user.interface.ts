// import { User } from './user.entity';
export interface UserInterface {
  //   createUser(user: User): Promise<User>;
  //   getUser(id: number): Promise<User>;
  //   getAllUsers(): Promise<User>;
  //   updateUser(user: User): Promise<User>;
  //   deleteUser(id: number): Promise<void>;
  id: string;
  name: string;

  password: string;

  email: string;

  //   firstName: string;

  //   lastName: string;

  profileImageUrl: string;

  isActive: boolean;
  createdAt: Date;

  roles: string[]; // You can implement role-based access control

  resetPasswordToken: string;

  resetPasswordExpires: Date;
  updatedAt: Date;
}
