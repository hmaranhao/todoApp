"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishTodoController = void 0;
const tsyringe_1 = require("tsyringe");
const FinishTodoUseCase_1 = require("./FinishTodoUseCase");
class FinishTodoController {
    async handle(req, resp) {
        const _finishTodoUseCase = tsyringe_1.container.resolve(FinishTodoUseCase_1.FinishTodoUseCase);
        const { _id } = req.params;
        const _todo = await _finishTodoUseCase.execute({ _id: _id.toString() });
        console.log({ _todo });
        if (_todo instanceof Error) {
            return resp.status(400).json(_todo.message);
        }
        return resp.status(200).json(_todo);
    }
}
exports.FinishTodoController = FinishTodoController;
