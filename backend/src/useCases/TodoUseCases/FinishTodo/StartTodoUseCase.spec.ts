import { InMemoryTodoRepository } from "../../../../tests/repositories/inMemoryTodoRepository"
import { status } from '../../../domain/entities/todo/Todo'
import { FinishTodoUseCase } from "./FinishTodoUseCase"

describe('Finish todo use case', () => {
  it('should to finish a todo', async () => {
    const todoRepository = new InMemoryTodoRepository()
    const sut = new FinishTodoUseCase(todoRepository)
    const todoMock = {
      _id: '1'
    }
    const todoUpdated = await sut.execute(todoMock)
    expect(todoUpdated.finishedAt).toBeDefined()
    expect(todoUpdated.status).toBe(status.done)
  })

})