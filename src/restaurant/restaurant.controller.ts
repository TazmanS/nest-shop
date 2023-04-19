import { Body, Controller, Get, Post } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { CreateTypeDto } from "./dto/CreateType.dto";
import { CreateFoodDto } from "./dto/CreateFood.dto";


@Controller("restaurant")
export class RestaurantController {
  constructor(
    private restaurantService: RestaurantService
  ) { }


  @Get('type')
  getTypes() {
    return this.restaurantService.getTypes()
  }

  @Post('type')
  createType(@Body() createTypeDto: CreateTypeDto) {
    return this.restaurantService.createType(createTypeDto)
  }

  @Get('food')
  getFood() {
    return this.restaurantService.getFood()
  }

  @Post('food')
  createFood(@Body() createFoodDto: CreateFoodDto) {
    return this.restaurantService.createFood(createFoodDto)
  }

}