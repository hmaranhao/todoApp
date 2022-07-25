"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Todo_1 = require("./domain/entities/todo/Todo");
console.log({ env: process.env.DATABASE_URL });
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [Todo_1.Todo],
    migrations: [],
    subscribers: [],
});
