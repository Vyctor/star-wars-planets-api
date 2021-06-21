import { Injectable, HttpService } from '@nestjs/common';
import { SwapiPlanet } from './models/swapi-planet.model';
@Injectable()
export class SwapiService {
  constructor(private readonly http: HttpService) {}

  public async getPlanetAppearanceInMoviesService(
    planetName: string,
  ): Promise<number> {
    const response = await this.http
      .get(`http://swapi.dev/api/planets?search=${planetName}`)
      .toPromise();

    const planet = new SwapiPlanet(response.data.results[0]);

    if (!planet) {
      return 0;
    }

    return planet.films.length;
  }
}
