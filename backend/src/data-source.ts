import "reflect-metadata"
import { DataSource } from "typeorm"

import { TodoModel } from "./infrastructure/postgreSQL/model/TodoModel"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "todo_app",
    synchronize: true,
    logging: false,
    entities: [TodoModel],
    migrations: [],
    subscribers: [],
})
