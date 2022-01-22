import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { User } from '../user/User';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;
  
  @Column()
  name: string;

  @Column()
  picture: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => User, user => user.profile)
  @JoinColumn()
  user: User;
}