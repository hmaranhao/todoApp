import { inject, injectable } from "tsyringe"

import { ITodoRepository } from "../../../domain/interfaces/ITodoRepository"
import { Todo } from "../../../domain/entities/todo/Todo"
import { ICreateTodoDTO } from './CreateTodoDTO'

@injectable()
export class CreateTodoUseCase {
  constructor (
    @inject("TodoRepository")
    private _todoRepository: ITodoRepository
  ) {}
  async execute({ title, description }: ICreateTodoDTO){
    const _todo = Todo.create({
      title,
      description
    })
    return await this._todoRepository.create(_todo)
  }
}