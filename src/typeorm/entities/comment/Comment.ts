import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Post } from '../post/Post';


@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: string;

  @Column("text")
  content: string;

  @Column()
  parent: string;

  @Column()
  seq: string;

  @ManyToOne(() => Post, post => post.comments)
  @JoinColumn()
  post: Post;
}