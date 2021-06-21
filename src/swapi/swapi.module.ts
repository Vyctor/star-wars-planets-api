import { Module, HttpModule } from '@nestjs/common';
import { SwapiService } from './swapi.service';

@Module({
  imports: [HttpModule],
  providers: [SwapiService],
  exports: [SwapiService],
})
export class SwapiModule {}
