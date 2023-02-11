import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class razas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  nombre: string;

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
}
