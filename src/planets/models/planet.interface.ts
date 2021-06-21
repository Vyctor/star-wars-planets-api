import { Document } from 'mongoose';

interface IPlanet extends Document {
  name: string;
  climate: string;
  terrain: string;
  numberOfMovies: number;
}

export default IPlanet;
