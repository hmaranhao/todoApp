import { Request, Response } from "express"
import { container } from "tsyringe"

import { StartTodoUseCase } from "./StartTodoUseCase"

export class StartTodoController {
  async handle(req: Request, resp: Response) {
    const _startTodoUseCase = container.resolve(StartTodoUseCase)
    const { _id } = req.params
    const _todo = await _startTodoUseCase.execute({ _id: _id.toString() })
    console.log({ _todo })
    if (_todo instanceof Error) {
      return resp.status(400).json(_todo.message)
    }
    return resp.status(200).json(_todo)
  }
}