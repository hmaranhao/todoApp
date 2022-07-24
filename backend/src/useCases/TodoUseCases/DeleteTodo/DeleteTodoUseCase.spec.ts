import * as crypto from 'crypto'

import { InMemoryTodoRepository } from "../../../../tests/repositories/inMemoryTodoRepository"
import { status } from '../../../domain/entities/todo/Todo'
import { DeleteTodoUseCase } from "./DeleteTodoUseCase"

describe('Delete todo use case', () => {
  it('should to delete a todo', async () => {
    const todoRepository = new InMemoryTodoRepository()
    const sut = new DeleteTodoUseCase(todoRepository)
    const todoMock = {
      _id: crypto.randomUUID(),
      title: 'Todo Test',
      description: 'This a description for test on todo creation'
    }
    const todoUpdated = await sut.execute(todoMock)
    expect(todoUpdated).toBe(true)
  })

})