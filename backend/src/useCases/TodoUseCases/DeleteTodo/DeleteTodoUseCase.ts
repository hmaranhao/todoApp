import { inject, injectable } from "tsyringe"

import { ITodoRepository } from "../../../domain/interfaces/ITodoRepository"
import { IDeleteTodoDTO } from './DeleteTodoDTO'

@injectable()
export class DeleteTodoUseCase {
  constructor(
    @inject("TodoRepository")
    private _todoRepository: ITodoRepository
  ) { }
  async execute({ _id }: IDeleteTodoDTO) {
    return await this._todoRepository.deleteById(_id)
  }
}