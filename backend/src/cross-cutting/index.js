"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const TodoRepository_1 = require("./../infrastructure/postgreSQL/implementation/TodoRepository");
tsyringe_1.container.registerSingleton("TodoRepository", TodoRepository_1.TodoRepository);
