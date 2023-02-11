import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { lotes } from './lote.entity';
import { razas } from './razas.entity';

@Entity()
export class vacas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  arete: string;

  @Column({
    type: 'varchar',
    default: '',
  })
  fechaIng: string;

  @Column({
    type: 'varchar',
    default: '',
  })
  fechaReg: string;

  @Column({
    type: 'varchar',
    default: '',
  })
  fechaNac: string;

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

  @ManyToOne(() => razas)
  @JoinColumn()
  raza: razas;

  @ManyToOne(() => lotes)
  @JoinColumn()
  lote: lotes;
}
