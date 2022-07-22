import { TodoRepository } from './../infrastructure/postgreSQL/implementation/TodoRepository';
import { Request, response, Response } from "express"

import { TodoUseCase } from "../application/useCases/createTodo/TodoUseCase"

export class TodoController {
  async createTodo(req: Request, resp: Response) {
    const _todoRepository = new TodoRepository()
    const { title, description } = req.body
    const _todo = new TodoUseCase().execute({ title, description })
    const result = await _todoRepository.create((await _todo).props)
    console.log({ result })
    if (result instanceof Error) {
      return resp.status(400).json(result.message)
    }
    return resp.status(201).json(result)
  }
}