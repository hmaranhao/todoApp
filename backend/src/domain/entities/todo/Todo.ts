import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

export enum status {
  pending = 0,
  inProgress = 1,
  done = 2
}

@Entity("todos")
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  _id?: string

  @Column('varchar')
  title?: string

  @Column({ type: 'text', default: null })
  description?: string

  @Column({ type: 'int', default: 0 })
  status?: status

  @Column({ type: 'timestamptz', default: new Date() })
  createdAt?: Date

  @Column({ type: 'timestamptz', default: null })
  startedAt?: Date

  @Column({ type: 'timestamptz', default: null })
  finishedAt?: Date

  constructor(props: Todo){
    Object.assign(this, props)
  }

  static create(props: Todo) {
    const _todo = new Todo({
      ...props,
      createdAt: new Date(),
    })
    return _todo
  }

  static update(props: Todo) {
    const _todo = new Todo({
      ...props
    })
    return _todo
  }

  static start(props: Todo) {
    const _todo = new Todo({
      ...props,
      startedAt: new Date(),
      status: status.inProgress
    })
    return _todo
  }

  static finish(props: Todo) {
    const _todo = new Todo({
      ...props,
      finishedAt: new Date(),
      status: status.done
    })
    return _todo
  }
}