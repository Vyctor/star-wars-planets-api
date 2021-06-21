import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
  Delete,
  Param,
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
  async getAllPlanets(
    @Query('id') id: string,
    @Query('name') name: string,
  ): Promise<Array<Planet> | Planet> {
    if (name) {
      return this.planetsService.getPlanetByName(name);
    }
    if (id) {
      return this.planetsService.getPlanetById(id);
    }
    return this.planetsService.getAllPlanets();
  }

  @Delete('/:id')
  async deletePlanet(@Param('id') id: string): Promise<void> {
    await this.planetsService.deletePlanet(id);
  }
}
