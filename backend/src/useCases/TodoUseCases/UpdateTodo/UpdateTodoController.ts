import { Request, Response } from "express"
import { container } from "tsyringe"

import { UpdateTodoUseCase } from "./UpdateTodoUseCase"

export class UpdateTodoController {
  async handle(req: Request, resp: Response) {
    const _updateTodoUseCase = container.resolve(UpdateTodoUseCase)
    const { title, description, status } = req.body
    const { _id } = req.params
    const _todo = await _updateTodoUseCase.execute({ _id: _id.toString(), title, description, status })
    if (_todo instanceof Error) {
      return resp.status(400).json(_todo.message)
    }
    return resp.status(200).json(_todo)
  }
}