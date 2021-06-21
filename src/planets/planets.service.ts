import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlanetDto } from './dtos/create-planet.dto';
import Planet from './models/planet.interface';
import { SwapiService } from '../swapi/swapi.service';

@Injectable()
export class PlanetsService {
  constructor(
    @InjectModel('Planet')
    private readonly planetModel: Model<Planet>,
    private readonly swapiService: SwapiService,
  ) {}

  async createPlanet(createPlanetDto: CreatePlanetDto): Promise<Planet> {
    const { name } = createPlanetDto;

    const planetExists = await this.planetModel.findOne({ name }).exec();

    if (planetExists) {
      throw new BadRequestException('Planet already registered');
    }

    const numberOfMovies =
      await this.swapiService.getPlanetAppearanceInMoviesService(name);

    const newPlanet = new this.planetModel({
      ...createPlanetDto,
      numberOfMovies,
    });

    return await newPlanet.save();
  }

  async getAllPlanets(): Promise<Array<Planet>> {
    return this.planetModel.find().exec();
  }

  async getPlanetByName(name: string): Promise<Planet> {
    const planet = await this.planetModel.findOne({
      name,
    });

    if (!planet) {
      throw new NotFoundException('Planet not found!');
    }
    return planet;
  }

  async getPlanetById(id: string): Promise<Planet> {
    const planet = await this.planetModel.findOne({ _id: id });

    if (!planet) {
      throw new NotFoundException('Planet not found!');
    }
    return planet;
  }

  async deletePlanet(id: string): Promise<void> {
    const planet = await this.planetModel.findById(id).exec();

    if (!planet) {
      throw new BadRequestException(`Planet not found!`);
    }

    await this.planetModel.deleteOne({ _id: id }).exec();
  }
}
