import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

import { BaseEntity } from '../../shared'

export enum status {
  pending = 0,
  inProgress = 1,
  done = 2
}

@Entity("todo")
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  _id?: string

  @Column('varchar')
  title: string

  @Column({ type: 'text', default: null })
  description?: string

  @Column({ type: 'int', default: 0 })
  status?: status

  @Column({ type: 'date', default: new Date() })
  createdAt?: Date

  @Column({ type: 'date', default: null })
  startedAt?: Date

  @Column({ type: 'date', default: null })
  finishedAt?: Date
}

export class TodoEntity extends BaseEntity<Todo> {
  private constructor(props: Todo, _id?: string) {
    super(props, _id);
  }

  static create(props: Todo, _id?: string) {
    const _todo = new TodoEntity({
      ...props,
      createdAt: new Date()
    })
    return _todo
  }
}