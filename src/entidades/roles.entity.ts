import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  rol: string;
}
