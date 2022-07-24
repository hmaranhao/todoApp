import { inject, injectable } from "tsyringe"

import { ITodoRepository } from "../../../domain/interfaces/ITodoRepository"
import { Todo } from "../../../domain/entities/todo/Todo"
import { IStartTodoDTO } from './StartTodoDTO'

@injectable()
export class StartTodoUseCase {
  constructor(
    @inject("TodoRepository")
    private _todoRepository: ITodoRepository
  ) { }
  async execute({ _id }: IStartTodoDTO) {
    const _todo = Todo.start({
      _id      
    })
    return await this._todoRepository.updateById(_id, _todo)
  }
}