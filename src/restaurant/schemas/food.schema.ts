import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type FoodDocument = Food & Document

@Schema({ timestamps: true })
export class Food extends Document {

  _id: string

  @Prop({ required: true })
  name: string
}

export const FoodSchema = SchemaFactory.createForClass(Food)