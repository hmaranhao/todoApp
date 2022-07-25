"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const GetTodoController_1 = require("./useCases/TodoUseCases/GetTodo/GetTodoController");
const express_1 = require("express");
const CreateTodoController_1 = require("./useCases/TodoUseCases/CreateTodo/CreateTodoController");
const UpdateTodoController_1 = require("./useCases/TodoUseCases/UpdateTodo/UpdateTodoController");
const StartTodoController_1 = require("./useCases/TodoUseCases/StartTodo/StartTodoController");
const FinishTodoController_1 = require("./useCases/TodoUseCases/FinishTodo/FinishTodoController");
const DeleteTodoController_1 = require("./useCases/TodoUseCases/DeleteTodo/DeleteTodoController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/', (req, res) => res.send('Hello Guys! The server api of TODO App is online!'));
routes.get('/todos', new GetTodoController_1.GetTodoController().handle);
routes.post('/todo', new CreateTodoController_1.CreateTodoController().handle);
routes.put('/todo/:_id', new UpdateTodoController_1.UpdateTodoController().handle);
routes.put('/todo/:_id/start', new StartTodoController_1.StartTodoController().handle);
routes.put('/todo/:_id/finish', new FinishTodoController_1.FinishTodoController().handle);
routes.delete('/todo/:_id', new DeleteTodoController_1.DeleteTodoController().handle);
