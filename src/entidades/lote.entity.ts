import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { usuarios } from './usuarios.entity';

@Entity()
export class lotes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  lote: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  activo: boolean;

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

  @ManyToOne(() => usuarios)
  @JoinColumn()
  usuario: usuarios;
}
