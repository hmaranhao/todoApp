"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inMemoryTodoRepository_1 = require("../../../../tests/repositories/inMemoryTodoRepository");
const CreateTodoUseCase_1 = require("./CreateTodoUseCase");
describe('Create todo use case', () => {
    it('should to create a todo', async () => {
        const todoRepository = new inMemoryTodoRepository_1.InMemoryTodoRepository();
        const sut = new CreateTodoUseCase_1.CreateTodoUseCase(todoRepository);
        const todoMock = {
            title: 'Todo Test',
            description: 'This a description for test on todo creation'
        };
        const todoCreated = await sut.execute(todoMock);
        expect(todoCreated.createdAt).toBeDefined();
        expect(todoCreated.title).toBe(todoMock.title);
        expect(todoCreated.description).toBe(todoMock.description);
    });
});
