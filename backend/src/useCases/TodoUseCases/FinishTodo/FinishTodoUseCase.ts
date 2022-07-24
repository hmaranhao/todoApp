import { inject, injectable } from "tsyringe"

import { ITodoRepository } from "../../../domain/interfaces/ITodoRepository"
import { Todo } from "../../../domain/entities/todo/Todo"
import { IFinishTodoDTO } from './FinishTodoDTO'

@injectable()
export class FinishTodoUseCase {
  constructor(
    @inject("TodoRepository")
    private _todoRepository: ITodoRepository
  ) { }
  async execute({ _id }: IFinishTodoDTO) {
    const _todo = Todo.finish({
      _id      
    })
    return await this._todoRepository.updateById(_id, _todo)
  }
}