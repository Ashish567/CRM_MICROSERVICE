export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  profileImageUrl: string;

  @Prop({ default: false })
  isActive: boolean;

  @Prop({ default: [] })
  roles: string[]; // You can implement role-based access control

  @Prop()
  resetPasswordToken: string;

  @Prop()
  resetPasswordExpires: Date;
}
