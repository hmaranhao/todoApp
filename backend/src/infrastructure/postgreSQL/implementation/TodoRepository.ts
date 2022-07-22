import { ITodoRepository } from './../../../domain/interfaces/ITodoRepository'

import { AppDataSource } from '../../../data-source'
import { TodoModel } from '../model/TodoModel'

export const _todoRepository = AppDataSource.getRepository(TodoModel)

export class TodoRepository implements ITodoRepository {
  async create(model: TodoModel) {
    return await _todoRepository.save(model)
  }

  async findById(_id: string) {
    return await _todoRepository.findOneBy({ _id })
  }

  async findAll(filter: any) {
    return await _todoRepository.findBy({ ...filter })
  }

  async updateById(_id: string, model: TodoModel) {
    let todoToUpdate = await _todoRepository.findOneBy({
      _id
    })
    todoToUpdate = { ...todoToUpdate, ...model }
    return await _todoRepository.save(todoToUpdate)
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
