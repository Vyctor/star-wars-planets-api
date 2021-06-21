import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePlanetDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly climate: string;
  @IsNotEmpty()
  readonly terrain: string;
}
