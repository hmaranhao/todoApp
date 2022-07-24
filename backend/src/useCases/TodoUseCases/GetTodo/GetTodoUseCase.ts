import { inject, injectable } from "tsyringe"

import { ITodoRepository } from "../../../domain/interfaces/ITodoRepository"
import { IGetTodoDTO } from './GetTodoDTO'

@injectable()
export class GetTodoUseCase {
  constructor(
    @inject("TodoRepository")
    private _todoRepository: ITodoRepository
  ) { }
  async execute(filters: IGetTodoDTO) {
    return await this._todoRepository.findAll(filters)
  }
}