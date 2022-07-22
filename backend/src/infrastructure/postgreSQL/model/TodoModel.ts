import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TodoModel {
  @PrimaryGeneratedColumn('uuid')
  _id?: string

  @Column('varchar')
  title: string

  @Column('text')
  description?: string

  @Column('int')
  status?: number

  @Column({ type: 'date' })
  createdAt?: Date

  @Column({ type: 'date' })
  startedAt?: Date

  @Column({ type: 'date' })
  finishedAt?: Date
}