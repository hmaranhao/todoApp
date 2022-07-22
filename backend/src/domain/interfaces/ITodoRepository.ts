import { Todo } from "../entities/todo/Todo"

export interface ITodoRepository {
  create(model: Todo): Promise<Todo>
  findById(_id: string): Promise<Todo>
  findAll(filter: any): Promise<Todo[]>
  updateById(_id: string, model: Todo): Promise<Todo>
  deleteById(_id: string): Promise<boolean>
}