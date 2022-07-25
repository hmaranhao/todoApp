"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTodoController = void 0;
const tsyringe_1 = require("tsyringe");
const GetTodoUseCase_1 = require("./GetTodoUseCase");
class GetTodoController {
    async handle(req, resp) {
        const _getTodoUseCase = tsyringe_1.container.resolve(GetTodoUseCase_1.GetTodoUseCase);
        const _todo = await _getTodoUseCase.execute(req.body);
        // console.log({ _todo })
        if (_todo instanceof Error) {
            return resp.status(400).json(_todo.message);
        }
        return resp.status(200).json(_todo);
    }
}
exports.GetTodoController = GetTodoController;
