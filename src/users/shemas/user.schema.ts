import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema({ timestamps: true })
export class User extends Document {

  _id: string


  @Prop({ unique: true, required: true })
  login: string

  @Prop({ unique: true, required: true })
  email: string

  @Prop({ required: true })
  password: string

  // 1 - admin
  // 0 - user
  @Prop({ default: 0 })
  role: number

  @Prop({ default: true })
  keep_me: boolean

  @Prop({ default: true })
  email_me: boolean
}

export const UserSchema = SchemaFactory.createForClass(User)