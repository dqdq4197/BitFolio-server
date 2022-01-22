import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  OneToOne,
  OneToMany,
  Unique,
} from 'typeorm';

import { DateTimeEntity } from '../base/dateTimeEntity';
import { Profile } from '../profile/Profile';
import { Post } from '../post/Post';

@Entity()
export class User extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  
  @Column()
  @Unique(['email'])
  email: string;

  @Column()
  password: string;

  @Column()
  emailVerificationToken: String;
  
  @Column({ default: false })
  emailVerified: Boolean;

  @Column()
  provider: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastLogin: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isStaff: boolean;

  @OneToOne(type => Profile, profile => profile.user)
  profile: Profile

  @OneToMany(type => Post, post => post.user)
  posts: Post[]
}