"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const Todo_1 = require("../../../domain/entities/todo/Todo");
let UpdateTodoUseCase = class UpdateTodoUseCase {
    constructor(_todoRepository) {
        this._todoRepository = _todoRepository;
    }
    async execute({ _id, title, description, status }) {
        const _todo = Todo_1.Todo.update({
            _id,
            title,
            description,
            status
        });
        return await this._todoRepository.updateById(_id, _todo);
    }
};
UpdateTodoUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("TodoRepository")),
    __metadata("design:paramtypes", [Object])
], UpdateTodoUseCase);
exports.UpdateTodoUseCase = UpdateTodoUseCase;
