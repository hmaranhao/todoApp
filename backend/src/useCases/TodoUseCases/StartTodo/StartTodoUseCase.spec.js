"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inMemoryTodoRepository_1 = require("../../../../tests/repositories/inMemoryTodoRepository");
const Todo_1 = require("../../../domain/entities/todo/Todo");
const StartTodoUseCase_1 = require("./StartTodoUseCase");
describe('Start todo use case', () => {
    it('should to Start a todo', async () => {
        const todoRepository = new inMemoryTodoRepository_1.InMemoryTodoRepository();
        const sut = new StartTodoUseCase_1.StartTodoUseCase(todoRepository);
        const todoMock = {
            _id: '1',
        };
        const todoUpdated = await sut.execute(todoMock);
        expect(todoUpdated.startedAt).toBeDefined();
        expect(todoUpdated.status).toBe(Todo_1.status.inProgress);
    });
});
