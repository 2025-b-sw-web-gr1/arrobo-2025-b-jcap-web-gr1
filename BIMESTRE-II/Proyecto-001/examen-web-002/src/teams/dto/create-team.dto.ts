import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ example: 'Barcelona FC' })
  name: string;

  @ApiProperty({ example: 'España' })
  country: string;
}
