import { Schema } from 'mongoose';

const PlanetSchema = new Schema(
  {
    name: { type: String, unique: true },
    climate: { type: String },
    terrain: { type: String },
    numberOfMovies: { type: Number },
  },
  { timestamps: true, collection: 'planets' },
);

export default PlanetSchema;
