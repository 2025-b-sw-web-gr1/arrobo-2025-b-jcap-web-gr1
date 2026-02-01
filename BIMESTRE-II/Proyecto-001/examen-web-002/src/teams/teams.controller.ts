import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ status: 200, description: 'Lista de equipos' })
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un equipo por ID' })
  @ApiResponse({ status: 200, description: 'Equipo encontrado' })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un equipo' })
  @ApiResponse({ status: 201, description: 'Equipo creado' })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un equipo' })
  @ApiResponse({ status: 200, description: 'Equipo actualizado' })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo' })
  @ApiResponse({ status: 200, description: 'Equipo eliminado' })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  remove(@Param('id') id: string) {
    return this.teamsService.remove(+id);
  }
}
