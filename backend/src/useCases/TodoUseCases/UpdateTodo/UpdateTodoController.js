"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateTodoUseCase_1 = require("./UpdateTodoUseCase");
class UpdateTodoController {
    async handle(req, resp) {
        const _updateTodoUseCase = tsyringe_1.container.resolve(UpdateTodoUseCase_1.UpdateTodoUseCase);
        const { title, description, status } = req.body;
        const { _id } = req.params;
        const _todo = await _updateTodoUseCase.execute({ _id: _id.toString(), title, description, status });
        console.log({ _todo });
        if (_todo instanceof Error) {
            return resp.status(400).json(_todo.message);
        }
        return resp.status(200).json(_todo);
    }
}
exports.UpdateTodoController = UpdateTodoController;
