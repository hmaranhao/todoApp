"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = exports._todoRepository = void 0;
const data_source_1 = require("../../../data-source");
const Todo_1 = require("../../../domain/entities/todo/Todo");
exports._todoRepository = data_source_1.AppDataSource.getRepository(Todo_1.Todo);
class TodoRepository {
    async create(model) {
        return await exports._todoRepository.save(model);
    }
    async findById(_id) {
        return await exports._todoRepository.findOneBy({ _id });
    }
    async findAll(filter) {
        return await exports._todoRepository.findBy({ ...filter });
    }
    async updateById(_id, model) {
        let todoToUpdate = await exports._todoRepository.findOneBy({
            _id
        });
        todoToUpdate = { ...todoToUpdate, ...model };
        const updatedTodo = await exports._todoRepository.save(todoToUpdate);
        return Object.assign(todoToUpdate, updatedTodo);
    }
    async deleteById(_id) {
        const todoToRemove = await exports._todoRepository.findOneBy({
            _id
        });
        try {
            await exports._todoRepository.remove(todoToRemove);
            return true;
        }
        catch (error) {
            return false;
        }
    }
}
exports.TodoRepository = TodoRepository;
