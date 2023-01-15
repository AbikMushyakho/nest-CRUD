// Database table
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  author: string;
}
