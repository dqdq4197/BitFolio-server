import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  RelationId
} from 'typeorm';
import { User } from './User';
import { Comment } from './Comment';
import { P_like } from './P_like';


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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
  
  @ManyToOne(() => User, user => user.posts)
  @JoinColumn()
  user: User;

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];

  @OneToMany(() => P_like, p_like => p_like.post)
  p_likes: P_like[];
}