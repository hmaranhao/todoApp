import { status } from "../../../domain/entities/todo/Todo"

export interface IUpdateTodoDTO {
  _id: string
  title?: string
  description?: string
  status?: status
}