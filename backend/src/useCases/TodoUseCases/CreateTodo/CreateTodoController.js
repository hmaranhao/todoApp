"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateTodoUseCase_1 = require("./CreateTodoUseCase");
class CreateTodoController {
    async handle(req, resp) {
        const _createTodoUseCase = tsyringe_1.container.resolve(CreateTodoUseCase_1.CreateTodoUseCase);
        const { title, description } = req.body;
        if (!description) {
            return resp.status(400).json('Title is required.');
        }
        const _todo = await _createTodoUseCase.execute({ title, description });
        console.log({ _todo });
        if (_todo instanceof Error) {
            return resp.status(400).json(_todo.message);
        }
        return resp.status(201).json(_todo);
    }
}
exports.CreateTodoController = CreateTodoController;
