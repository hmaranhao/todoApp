"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inMemoryTodoRepository_1 = require("../../../../tests/repositories/inMemoryTodoRepository");
const Todo_1 = require("../../../domain/entities/todo/Todo");
const FinishTodoUseCase_1 = require("./FinishTodoUseCase");
describe('Finish todo use case', () => {
    it('should to finish a todo', async () => {
        const todoRepository = new inMemoryTodoRepository_1.InMemoryTodoRepository();
        const sut = new FinishTodoUseCase_1.FinishTodoUseCase(todoRepository);
        const todoMock = {
            _id: '1'
        };
        const todoUpdated = await sut.execute(todoMock);
        expect(todoUpdated.finishedAt).toBeDefined();
        expect(todoUpdated.status).toBe(Todo_1.status.done);
    });
});
