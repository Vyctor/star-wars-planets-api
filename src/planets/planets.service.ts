import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlanetDto } from './dtos/create-planet.dto';
import Planet from './models/planet.interface';

@Injectable()
export class PlanetsService {
  constructor(
    @InjectModel('Planet')
    private readonly planetModel: Model<Planet>,
  ) {}

  async createPlanet(createPlanetDto: CreatePlanetDto): Promise<Planet> {
    const { name } = createPlanetDto;

    const planetExists = await this.planetModel.findOne({ name }).exec();

    if (planetExists) {
      throw new BadRequestException('Planet already registered');
    }

    const newPlanet = new this.planetModel(createPlanetDto);

    return await newPlanet.save();
  }

  async getAllPlanets(): Promise<Array<Planet>> {
    return this.planetModel.find().exec();
  }
}
