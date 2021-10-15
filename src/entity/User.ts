import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  DeleteDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Profile } from './Profile';
import { Post } from './Post';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  provider: string;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date

  @DeleteDateColumn()
  deletedAt: Date

  @OneToOne(type => Profile, profile => profile.user)
  profile: Profile

  @OneToMany(type => Post, post => post.user)
  posts: Post[]
}