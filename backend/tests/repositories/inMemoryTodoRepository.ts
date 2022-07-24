import * as crypto from 'crypto'

import { Todo } from '../../src/domain/entities/todo/Todo'
import { ITodoRepository } from './../../src/domain/interfaces/ITodoRepository'

export class InMemoryTodoRepository implements ITodoRepository {
  public todos: Todo[] = [{ _id: '1', title: 'test mock' }]

  async findById(_id: string): Promise<Todo> {
    const todo = this.todos.find(todo => todo._id === _id)
    if(!todo){
      throw Error('Todo does not exist.')
    }
    return todo
  }

  async create(model: Todo): Promise<Todo> {
    return {...model, _id: crypto.randomUUID() }
  }

  async updateById(_id: string, model: Todo): Promise<Todo> {
    return model
  }

  async deleteById(_id: string): Promise<boolean> {
    return true
  }

  async findAll(filter: any): Promise<Todo[]> {
    return this.todos
  }
}