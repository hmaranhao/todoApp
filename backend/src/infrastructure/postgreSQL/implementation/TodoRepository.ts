import { ITodoRepository } from './../../../domain/interfaces/ITodoRepository'

import { AppDataSource } from '../../../data-source'
import { Todo } from '../../../domain/entities/todo/Todo'

export const _todoRepository = AppDataSource.getRepository(Todo)

export class TodoRepository implements ITodoRepository {
  async create(model: Todo) {
    return await _todoRepository.save(model)
  }

  async findById(_id: string) {
    return await _todoRepository.findOneBy({ _id })
  }

  async findAll(filter: any) {
    return await _todoRepository.findBy({ ...filter })
  }

  async updateById(_id: string, model: Todo) {
    let todoToUpdate = await _todoRepository.findOneBy({
      _id
    })
    todoToUpdate = { ...todoToUpdate, ...model }
    const updatedTodo = await _todoRepository.save(todoToUpdate)
    return Object.assign(todoToUpdate, updatedTodo)
  }

  async deleteById(_id: string) {
    const todoToRemove = await _todoRepository.findOneBy({
      _id
    })
    try {
      await _todoRepository.remove(todoToRemove)
      return true
    } catch (error) {
      return false
    }
  }
}
