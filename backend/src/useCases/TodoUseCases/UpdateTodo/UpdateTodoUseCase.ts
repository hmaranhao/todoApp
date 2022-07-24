import { inject, injectable } from "tsyringe"

import { ITodoRepository } from "../../../domain/interfaces/ITodoRepository"
import { Todo } from "../../../domain/entities/todo/Todo"
import { IUpdateTodoDTO } from './UpdateTodoDTO'

@injectable()
export class UpdateTodoUseCase {
  constructor(
    @inject("TodoRepository")
    private _todoRepository: ITodoRepository
  ) { }
  async execute({ _id, title, description, status }: IUpdateTodoDTO) {
    const _todo = Todo.update({
      _id,
      title,
      description,
      status
    })
    return await this._todoRepository.updateById(_id, _todo)
  }
}