"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = require("./Todo");
describe('Test on Todo Entity', () => {
    it('should to create a todo', async () => {
        const todoMock = {
            title: 'Todo Test',
            description: 'This a description for test on todo creation'
        };
        const todo = Todo_1.Todo.create(todoMock);
        expect(todo.createdAt).toBeDefined();
        expect(todo.title).toBe(todoMock.title);
        expect(todo.description).toBe(todoMock.description);
    });
    it('should to update a todo', async () => {
        const todoMock = {
            title: 'Todo Test',
            description: 'This a description for test on todo creation'
        };
        const todo = Todo_1.Todo.update(todoMock);
        expect(todo.title).toBe(todoMock.title);
        expect(todo.description).toBe(todoMock.description);
    });
    it('should to start a todo', async () => {
        const todoMock = {
            title: 'Todo Test',
            description: 'This a description for test on todo creation'
        };
        const todo = Todo_1.Todo.start(todoMock);
        expect(todo.startedAt).toBeDefined();
        expect(todo.status).toBe(Todo_1.status.inProgress);
    });
    it('should to finish a todo', async () => {
        const todoMock = {
            title: 'Todo Test',
            description: 'This a description for test on todo creation'
        };
        const todo = Todo_1.Todo.finish(todoMock);
        expect(todo.finishedAt).toBeDefined();
        expect(todo.status).toBe(Todo_1.status.done);
    });
});
