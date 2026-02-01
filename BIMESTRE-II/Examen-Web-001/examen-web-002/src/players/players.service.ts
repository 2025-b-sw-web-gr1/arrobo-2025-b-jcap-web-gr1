import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { Team } from '../teams/team.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  findAll(): Promise<Player[]> {
    return this.playersRepository.find();
  }

  async findOne(id: number): Promise<Player> {
    const player = await this.playersRepository.findOne({ where: { id } });
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const team = await this.teamsRepository.findOne({
      where: { id: createPlayerDto.teamId },
    });
    if (!team) {
      throw new NotFoundException(
        `Team with ID ${createPlayerDto.teamId} not found`,
      );
    }
    const player = this.playersRepository.create(createPlayerDto);
    return this.playersRepository.save(player);
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const player = await this.findOne(id);
    if (updatePlayerDto.teamId) {
      const team = await this.teamsRepository.findOne({
        where: { id: updatePlayerDto.teamId },
      });
      if (!team) {
        throw new NotFoundException(
          `Team with ID ${updatePlayerDto.teamId} not found`,
        );
      }
    }
    Object.assign(player, updatePlayerDto);
    return this.playersRepository.save(player);
  }

  async remove(id: number): Promise<void> {
    const player = await this.findOne(id);
    await this.playersRepository.remove(player);
  }

  async findByTeam(teamId: number): Promise<Player[]> {
    const team = await this.teamsRepository.findOne({
      where: { id: teamId },
    });
    if (!team) {
      throw new NotFoundException(`Team with ID ${teamId} not found`);
    }
    return this.playersRepository.find({ where: { teamId } });
  }
}
