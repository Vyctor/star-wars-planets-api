import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';
import PlanetSchema from './models/planet.schema';
import { SwapiModule } from '../swapi/swapi.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Planet', schema: PlanetSchema }]),
    SwapiModule,
  ],
  providers: [PlanetsService],
  controllers: [PlanetsController],
})
export class PlanetsModule {}
