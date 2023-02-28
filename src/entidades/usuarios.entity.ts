import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { roles } from './roles.entity';

@Entity()
export class usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  nombre: string;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  correo: string;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  pass: string;

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

  @ManyToOne(() => roles)
  @JoinColumn()
  rol: roles;
}
