import { InMemoryTodoRepository } from "../../../../tests/repositories/inMemoryTodoRepository"
import { CreateTodoUseCase } from "./CreateTodoUseCase"

describe('Create todo use case', () => {
  it('should to create a todo', async () => {
    const todoRepository = new InMemoryTodoRepository()
    const sut = new CreateTodoUseCase(todoRepository)
    const todoMock = {
      title: 'Todo Test',
      description: 'This a description for test on todo creation'
    }
    const todoCreated = await sut.execute(todoMock)
    expect(todoCreated.props.createdAt).toBeDefined()
    expect(todoCreated.props.title).toBe(todoMock.title)
    expect(todoCreated.props.description).toBe(todoMock.description)
  })

})