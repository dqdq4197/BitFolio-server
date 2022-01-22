import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Post } from '../post/Post';


@Entity()
export class P_like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: string;

  @ManyToOne(() => Post, post => post.p_likes)
  @JoinColumn()
  post: Post;
}