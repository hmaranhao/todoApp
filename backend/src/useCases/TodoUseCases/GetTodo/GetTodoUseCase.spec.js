"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inMemoryTodoRepository_1 = require("../../../../tests/repositories/inMemoryTodoRepository");
const GetTodoUseCase_1 = require("./GetTodoUseCase");
describe('Get todo use case', () => {
    it('should to get all todos', async () => {
        const todoRepository = new inMemoryTodoRepository_1.InMemoryTodoRepository();
        const sut = new GetTodoUseCase_1.GetTodoUseCase(todoRepository);
        const todos = await sut.execute({});
        expect(todos?.length).toBe(1);
    });
});
