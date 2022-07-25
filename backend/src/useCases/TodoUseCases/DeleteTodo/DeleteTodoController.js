"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodoController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteTodoUseCase_1 = require("./DeleteTodoUseCase");
class DeleteTodoController {
    async handle(req, resp) {
        const _deleteTodoUseCase = tsyringe_1.container.resolve(DeleteTodoUseCase_1.DeleteTodoUseCase);
        const { _id } = req.params;
        const _todo = await _deleteTodoUseCase.execute({ _id: _id.toString() });
        console.log({ _todo });
        if (!_todo) {
            return resp.status(400).json(_todo);
        }
        return resp.status(200).json(_todo);
    }
}
exports.DeleteTodoController = DeleteTodoController;
