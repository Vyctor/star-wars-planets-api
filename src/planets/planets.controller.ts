import {
  Body,
  Controller,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { CreatePlanetDto } from './dtos/create-planet.dto';
import Planet from '../planets/models/planet.interface';

@Controller('api/v1/planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createPlanet(
    @Body() createPlanetDto: CreatePlanetDto,
  ): Promise<Planet> {
    return await this.planetsService.createPlanet(createPlanetDto);
  }

  @Get()
  async getAllPlanets(): Promise<Array<Planet>> {
    return this.planetsService.getAllPlanets();
  }
}
