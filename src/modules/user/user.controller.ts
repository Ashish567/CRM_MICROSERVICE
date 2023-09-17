import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserInterface } from './user.interface';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
)
@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiTags('User')
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() user: User): Promise<UserInterface> {
    return await this.userService.createUser(user);
  }
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserInterface> {
    return await this.userService.getUser(id);
  }

  @Get()
  async getAllUsers(): Promise<UserInterface[]> {
    return await this.userService.getAllUsers();
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<UserInterface> {
    return await this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
