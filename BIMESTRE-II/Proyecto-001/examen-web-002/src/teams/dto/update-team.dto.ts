import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeamDto {
  @ApiProperty({ example: 'Barcelona FC', required: false })
  name?: string;

  @ApiProperty({ example: 'España', required: false })
  country?: string;
}
