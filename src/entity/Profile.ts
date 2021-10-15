import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { User } from './User';


@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;
  
  @Column()
  name: string;

  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(() => User, user => user.profile)
  @JoinColumn()
  user: User
}