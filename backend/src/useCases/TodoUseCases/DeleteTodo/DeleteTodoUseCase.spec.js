"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
const inMemoryTodoRepository_1 = require("../../../../tests/repositories/inMemoryTodoRepository");
const DeleteTodoUseCase_1 = require("./DeleteTodoUseCase");
describe('Delete todo use case', () => {
    it('should to delete a todo', async () => {
        const todoRepository = new inMemoryTodoRepository_1.InMemoryTodoRepository();
        const sut = new DeleteTodoUseCase_1.DeleteTodoUseCase(todoRepository);
        const todoMock = {
            _id: crypto.randomUUID(),
            title: 'Todo Test',
            description: 'This a description for test on todo creation'
        };
        const todoUpdated = await sut.execute(todoMock);
        expect(todoUpdated).toBe(true);
    });
});
