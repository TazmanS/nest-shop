import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose'

export type MenuDocument = Menu & Document

@Schema({ timestamps: true })
export class Menu extends Document {

  _id: string

  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  price: number

  @Prop({ type: Types.ObjectId, ref: 'Restaurant', required: true })
  restaurant: string

  @Prop()
  image: string

  @Prop({ type: Types.ObjectId, ref: 'Food', required: true })
  food: string
}

export const MenuSchema = SchemaFactory.createForClass(Menu)