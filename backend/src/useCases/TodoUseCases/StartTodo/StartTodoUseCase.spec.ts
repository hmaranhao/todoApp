import { InMemoryTodoRepository } from "../../../../tests/repositories/inMemoryTodoRepository"
import { status } from '../../../domain/entities/todo/Todo'
import { StartTodoUseCase } from "./StartTodoUseCase"

describe('Start todo use case', () => {
  it('should to Start a todo', async () => {
    const todoRepository = new InMemoryTodoRepository()
    const sut = new StartTodoUseCase(todoRepository)
    const todoMock = {
      _id: '1',
    }
    const todoUpdated = await sut.execute(todoMock)
    expect(todoUpdated.startedAt).toBeDefined()
    expect(todoUpdated.status).toBe(status.inProgress)
  })

})