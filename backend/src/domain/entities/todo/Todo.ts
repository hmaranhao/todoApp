import { BaseEntity } from '../../shared'

export enum status {
  pending = 0,
  inProgress = 1,
  done = 2
}

export class TodoProps {
  _id?: string
  title: string
  description?: string
  status?: status
  createdAt?: Date
  startedAt?: Date
  finishedAt?: Date
}

export class Todo extends BaseEntity<TodoProps> {
  private constructor(props: TodoProps, _id?: string) {
    super(props, _id);
  }

  static create(props: TodoProps, _id?: string) {
    const _todo = new Todo({
      ...props,
      createdAt: new Date()
    })
    return _todo
  }
}