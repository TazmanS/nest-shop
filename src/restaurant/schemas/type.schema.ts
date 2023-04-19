import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type TypeDocument = Type & Document

@Schema({ timestamps: true })
export class Type extends Document {

  _id: string

  @Prop({ required: true, unique: true })
  name: string
}

export const TypeSchema = SchemaFactory.createForClass(Type)