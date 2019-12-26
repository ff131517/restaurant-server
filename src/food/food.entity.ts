import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  imgUrl: string;

  @Column('text')
  desc: string;

  @Column('int')
  price: number;

  @Column('int')
  type: number;
}
