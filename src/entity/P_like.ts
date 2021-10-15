import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  DeleteDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Post } from './Post';


@Entity()
export class P_like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Post, post => post.p_likes)
  @JoinColumn()
  post: Post;
}