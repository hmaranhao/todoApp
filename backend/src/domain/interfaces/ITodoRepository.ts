import { TodoModel } from "../../infrastructure/postgreSQL/model/TodoModel";

export interface ITodoRepository {
  create(model: TodoModel): Promise<TodoModel>
  findById(_id: string): Promise<any>
  findAll(filter: any): Promise<any[]>
  updateById(_id: string, model: TodoModel): Promise<any>
  deleteById(_id: string): Promise<boolean>
}