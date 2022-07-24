import { status } from './../../../domain/entities/todo/Todo'

export interface IGetTodoDTO {
  _id?: string
  title?: string
  description?: string
  status?: status
  createdAt?: string
  startedAt?: string
  finshedAt?: string
}