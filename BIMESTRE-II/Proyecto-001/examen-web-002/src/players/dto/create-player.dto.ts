import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({ example: 'Lionel Messi' })
  name: string;

  @ApiProperty({ example: 'Delantero' })
  position: string;

  @ApiProperty({ example: 1 })
  teamId: number;
}
