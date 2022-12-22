import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'users' })
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @Column()
  createdAt: Date

  // 0 - user
  // 1 - admin
  @Column({ default: 0 })
  role: number

}