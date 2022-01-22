import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/User';
import { Comment } from '../comment/Comment';
import { P_like } from '../p_like/P_like';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  coinId: string;
  
  @Column("text")
  title: string;

  @Column("text")
  content: string;

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn()
  user: User;

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];

  @OneToMany(() => P_like, p_like => p_like.post)
  p_likes: P_like[];
}