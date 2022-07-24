import * as crypto from 'crypto'

import { InMemoryTodoRepository } from "../../../../tests/repositories/inMemoryTodoRepository"
import { GetTodoUseCase } from "./GetTodoUseCase"

describe('Get todo use case', () => {
  it('should to get all todos', async () => {
    const todoRepository = new InMemoryTodoRepository()
    const sut = new GetTodoUseCase(todoRepository)

    const todos = await sut.execute({})
    expect(todos?.length).toBe(1)
  })

})