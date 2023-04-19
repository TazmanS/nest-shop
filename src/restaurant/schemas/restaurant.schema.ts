import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose'

export type RestaurantDocument = Restaurant & Document

@Schema({ timestamps: true })
export class Restaurant extends Document {

  _id: string

  @Prop({ unique: true, required: true })
  name: string

  @Prop()
  description: string

  @Prop()
  image: string

  @Prop()
  time: number

  @Prop()
  location: string

  @Prop({ type: Types.ObjectId, ref: "Type" })
  type: string
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant)