import { Request, Response } from "express"
import { container } from "tsyringe"

import { GetTodoUseCase } from "./GetTodoUseCase"

export class GetTodoController {
  async handle(req: Request, resp: Response) {
    const _getTodoUseCase = container.resolve(GetTodoUseCase)
    const _todo = await _getTodoUseCase.execute(req.body)
    console.log({ _todo })
    if (_todo instanceof Error) {
      return resp.status(400).json(_todo.message)
    }
    return resp.status(200).json(_todo)
  }
}