"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inMemoryTodoRepository_1 = require("../../../../tests/repositories/inMemoryTodoRepository");
const UpdateTodoUseCase_1 = require("./UpdateTodoUseCase");
describe('Update todo use case', () => {
    it('should to update a todo', async () => {
        const todoRepository = new inMemoryTodoRepository_1.InMemoryTodoRepository();
        const sut = new UpdateTodoUseCase_1.UpdateTodoUseCase(todoRepository);
        const todoMock = {
            _id: '1',
            title: 'Todo Test',
            description: 'This a description for test on todo creation'
        };
        const todoUpdated = await sut.execute(todoMock);
        expect(todoUpdated.title).toBe(todoMock.title);
        expect(todoUpdated.description).toBe(todoMock.description);
    });
});
