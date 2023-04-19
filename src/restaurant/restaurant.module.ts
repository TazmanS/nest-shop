import { Module } from "@nestjs/common";
import { RestaurantController } from "./restaurant.controller";
import { RestaurantService } from "./restaurant.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Restaurant, RestaurantSchema } from "./schemas/restaurant.schema";
import { Menu, MenuSchema } from "./schemas/menu.schema";
import { Type, TypeSchema } from "./schemas/type.schema";
import { Food, FoodSchema } from "./schemas/food.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
      { name: Menu.name, schema: MenuSchema },
      { name: Type.name, schema: TypeSchema },
      { name: Food.name, schema: FoodSchema }
    ])],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule { }