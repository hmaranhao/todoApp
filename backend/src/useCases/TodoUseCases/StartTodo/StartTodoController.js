"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartTodoController = void 0;
const tsyringe_1 = require("tsyringe");
const StartTodoUseCase_1 = require("./StartTodoUseCase");
class StartTodoController {
    async handle(req, resp) {
        const _startTodoUseCase = tsyringe_1.container.resolve(StartTodoUseCase_1.StartTodoUseCase);
        const { _id } = req.params;
        const _todo = await _startTodoUseCase.execute({ _id: _id.toString() });
        console.log({ _todo });
        if (_todo instanceof Error) {
            return resp.status(400).json(_todo.message);
        }
        return resp.status(200).json(_todo);
    }
}
exports.StartTodoController = StartTodoController;
