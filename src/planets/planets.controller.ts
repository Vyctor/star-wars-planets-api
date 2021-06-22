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
import { ApiQuery, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Planets')
@Controller('api/v1/planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiOperation({
    description: "Create's a planet",
  })
  @ApiResponse({
    status: 201,
    description:
      'The planet has been successfully created and returned in response',
  })
  @ApiResponse({
    status: 400,
    description: 'The planet already exists',
  })
  async createPlanet(
    @Body() createPlanetDto: CreatePlanetDto,
  ): Promise<Planet> {
    return await this.planetsService.createPlanet(createPlanetDto);
  }

  @Get()
  @ApiQuery({
    name: 'id',
    description:
      'Use this query parameter in case you need to search a planet by his id',
    required: false,
  })
  @ApiQuery({
    name: 'name',
    description:
      'Use this query parameter in case you need to search a planet by his name',
    required: false,
  })
  @ApiOperation({
    description:
      'Get a list of all planets if no parameter, or get a planet by id or name',
  })
  @ApiResponse({
    status: 200,
    description: 'Shows all planets or a single planet queried by id or name',
  })
  @ApiResponse({
    status: 404,
    description: 'Planet not found',
  })
  async getAllPlanets(
    @Query('id')
    id: string,
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
  @ApiResponse({
    status: 200,
    description: 'The planet has been deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'The planet does not exists',
  })
  @ApiOperation({
    description: 'Delete a planet',
  })
  async deletePlanet(@Param('id') id: string): Promise<void> {
    await this.planetsService.deletePlanet(id);
  }
}
