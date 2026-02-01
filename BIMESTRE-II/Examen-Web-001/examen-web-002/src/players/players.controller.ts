import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller()
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('players')
  findAll() {
    return this.playersService.findAll();
  }

  @Get('players/:id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Post('players')
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Put('players/:id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete('players/:id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }

  @Get('teams/:id/players')
  findByTeam(@Param('id') id: string) {
    return this.playersService.findByTeam(+id);
  }
}
