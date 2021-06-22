import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanetsModule } from './planets/planets.module';
import { SwapiModule } from './swapi/swapi.module';
import environment from '../dist/environments/development';

@Module({
  imports: [
    MongooseModule.forRoot(environment.MONGO_DB_ATLAS_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    }),
    PlanetsModule,
    SwapiModule,
  ],
})
export class AppModule {}
