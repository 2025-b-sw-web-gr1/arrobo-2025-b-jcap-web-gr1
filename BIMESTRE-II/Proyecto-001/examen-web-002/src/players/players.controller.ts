import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@ApiTags('players')
@Controller()
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('players')
  @ApiOperation({ summary: 'Obtener todos los jugadores' })
  @ApiResponse({ status: 200, description: 'Lista de jugadores' })
  findAll() {
    return this.playersService.findAll();
  }

  @Get('players/:id')
  @ApiOperation({ summary: 'Obtener un jugador por ID' })
  @ApiResponse({ status: 200, description: 'Jugador encontrado' })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Post('players')
  @ApiOperation({ summary: 'Crear un jugador' })
  @ApiResponse({ status: 201, description: 'Jugador creado' })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Put('players/:id')
  @ApiOperation({ summary: 'Actualizar un jugador' })
  @ApiResponse({ status: 200, description: 'Jugador actualizado' })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete('players/:id')
  @ApiOperation({ summary: 'Eliminar un jugador' })
  @ApiResponse({ status: 200, description: 'Jugador eliminado' })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }

  @Get('teams/:id/players')
  @ApiOperation({ summary: 'Obtener jugadores de un equipo' })
  @ApiResponse({ status: 200, description: 'Lista de jugadores del equipo' })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  findByTeam(@Param('id') id: string) {
    return this.playersService.findByTeam(+id);
  }
}
