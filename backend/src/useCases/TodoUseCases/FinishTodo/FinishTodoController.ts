import { Request, Response } from "express"
import { container } from "tsyringe"

import { FinishTodoUseCase } from "./FinishTodoUseCase"

export class FinishTodoController {
  async handle(req: Request, resp: Response) {
    const _finishTodoUseCase = container.resolve(FinishTodoUseCase)
    const { _id } = req.params
    const _todo = await _finishTodoUseCase.execute({ _id: _id.toString() })
    console.log({ _todo })
    if (_todo instanceof Error) {
      return resp.status(400).json(_todo.message)
    }
    return resp.status(200).json(_todo)
  }
}