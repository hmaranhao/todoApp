import { InMemoryTodoRepository } from "../../../../tests/repositories/inMemoryTodoRepository"

import { UpdateTodoUseCase } from "./UpdateTodoUseCase"

describe('Update todo use case', () => {
  it('should to update a todo', async () => {
    const todoRepository = new InMemoryTodoRepository()
    const sut = new UpdateTodoUseCase(todoRepository)
    const todoMock = {
      _id: '1',
      title: 'Todo Test',
      description: 'This a description for test on todo creation'
    }
    const todoUpdated = await sut.execute(todoMock)
    expect(todoUpdated.title).toBe(todoMock.title)
    expect(todoUpdated.description).toBe(todoMock.description)
  })

})