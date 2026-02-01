import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Player } from '../players/player.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
