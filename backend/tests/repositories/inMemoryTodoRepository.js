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
exports.InMemoryTodoRepository = void 0;
const crypto = __importStar(require("crypto"));
class InMemoryTodoRepository {
    constructor() {
        this.todos = [{ _id: '1', title: 'test mock' }];
    }
    async findById(_id) {
        const todo = this.todos.find(todo => todo._id === _id);
        if (!todo) {
            throw Error('Todo does not exist.');
        }
        return todo;
    }
    async create(model) {
        return { ...model, _id: crypto.randomUUID() };
    }
    async updateById(_id, model) {
        return model;
    }
    async deleteById(_id) {
        return true;
    }
    async findAll(filter) {
        return this.todos;
    }
}
exports.InMemoryTodoRepository = InMemoryTodoRepository;
