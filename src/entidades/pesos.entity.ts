import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { vacas } from './vacas.entity';

@Entity()
export class pesos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    default: '',
  })
  fechaPeso: string;

  @Column({
    type: 'float',
    nullable: false,
    default: 0.0,
  })
  peso: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: string;

  @ManyToOne(() => vacas)
  @JoinColumn()
  vaca: vacas;
}
