import {
  Entity,
  PrimaryGeneratedColumn,
  Column as NestColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @NestColumn({ name: 'email', type: 'varchar', unique: true })
  email: string;

  @NestColumn({ name: 'password', type: 'varchar' })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
