export type SwapiPlanetsApiResponse = {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: Array<string>;
  films: Array<string>;
  url: string;
  created: string;
  edited: string;
};

export class SwapiPlanet {
  name: string;
  diameter: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surfaceWater: string;
  residents: Array<string>;
  films: Array<string>;
  url: string;
  created: string;
  edited: string;

  constructor(data: SwapiPlanetsApiResponse) {
    this.name = data.name;
    this.diameter = data.diameter;
    this.rotationPeriod = data.rotation_period;
    this.orbitalPeriod = data.orbital_period;
    this.gravity = data.gravity;
    this.population = data.population;
    this.climate = data.climate;
    this.terrain = data.terrain;
    this.surfaceWater = data.surface_water;
    this.residents = data.residents;
    this.films = data.films;
    this.url = data.url;
    this.created = data.created;
    this.edited = data.edited;
  }
}
