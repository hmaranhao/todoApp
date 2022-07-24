import { Request, Response } from "express"
import { container } from "tsyringe"

import { DeleteTodoUseCase } from "./DeleteTodoUseCase"

export class DeleteTodoController {
  async handle(req: Request, resp: Response) {
    const _deleteTodoUseCase = container.resolve(DeleteTodoUseCase)
    const { _id } = req.params
    const _todo = await _deleteTodoUseCase.execute({ _id: _id.toString() })
    console.log({ _todo })
    if (!_todo) {
      return resp.status(400).json(_todo)
    }
    return resp.status(200).json(_todo)
  }
}