import { Request, Response } from "express"
import { container } from "tsyringe"

import { CreateTodoUseCase } from "./CreateTodoUseCase"

export class CreateTodoController {
  async handle(req: Request, resp: Response) {
    const _createTodoUseCase = container.resolve(CreateTodoUseCase)
    const { title, description } = req.body

    if(!title){
      return resp.status(400).json('Title is required.')
    }

    const _todo = await _createTodoUseCase.execute({ title, description })
    console.log({ _todo })
    if (_todo instanceof Error) {
      return resp.status(400).json(_todo.message)
    }
    return resp.status(201).json(_todo)
  }
}