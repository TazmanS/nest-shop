import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Restaurant, RestaurantDocument } from "./schemas/restaurant.schema";
import { Model } from "mongoose";
import { Menu, MenuDocument } from "./schemas/menu.schema";
import { Food, FoodDocument } from "./schemas/food.schema";
import { Type, TypeDocument } from "./schemas/type.schema";
import { CreateTypeDto } from "./dto/CreateType.dto";
import { CreateFoodDto } from "./dto/CreateFood.dto";


@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel: Model<RestaurantDocument>,

    @InjectModel(Menu.name)
    private readonly MenuModel: Model<MenuDocument>,

    @InjectModel(Food.name)
    private readonly foodModel: Model<FoodDocument>,

    @InjectModel(Type.name)
    private readonly typeModel: Model<TypeDocument>,
  ) { }

  async getTypes(): Promise<Array<Type>> {
    return await this.typeModel.find()
  }

  async createType(createTypeDto: CreateTypeDto): Promise<Type> {
    return await this.typeModel.create(createTypeDto)
  }

  async getFood(): Promise<Array<Food>> {
    return await this.foodModel.find()
  }

  async createFood(createFoodDto: CreateFoodDto): Promise<Food> {
    return await this.foodModel.create(createFoodDto)
  }
}