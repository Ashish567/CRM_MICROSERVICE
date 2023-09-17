import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class User {
  @ApiProperty({
    description: '',
    required: true,
  })
  @IsString()
  readonly id: number;
  @ApiProperty({
    description: '',
    required: true,
  })
  @IsString()
  readonly name: string;
  @ApiProperty({
    description: '',
    required: true,
  })
  @IsString()
  readonly email: string;
  @ApiProperty({
    description: '',
    required: true,
  })
  @IsString()
  readonly password: string;
  @ApiProperty({
    description: '',
    required: true,
  })
  @IsString()
  readonly role: string;
  @ApiProperty({
    description: '',
    required: false,
  })
  @IsString()
  profileImageUrl: string;
  @ApiProperty({
    description: '',
    required: false,
    default: false,
  })
  @IsBoolean()
  isActive: boolean;
  @ApiProperty({
    description: '',
    required: false,
    default: new Date(),
  })
  @IsDate()
  readonly createdAt: Date;
  @ApiProperty({
    description: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  resetPasswordToken: string;
  @IsOptional()
  @IsDate()
  @ApiProperty({
    description: '',
    required: false,
  })
  resetPasswordExpires: Date;
  @IsOptional()
  @IsDate()
  @ApiProperty({
    description: '',
    required: false,
  })
  readonly updatedAt: Date;
}
