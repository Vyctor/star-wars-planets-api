import { Document } from 'mongoose';

interface Planet extends Document {
  name: string;
  climate: string;
  terrain: string;
  numberOfMovies: number;
}

export default Planet;
