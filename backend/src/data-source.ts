import { DataSource } from "typeorm"

import { Todo } from "./domain/entities/todo/Todo"

console.log({ env: process.env.DATABASE_URL })

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    // host: process.env.POSTGRES_HOST ?? "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "12345",
    // database: "todo_app",
    synchronize: true,
    logging: false,
    entities: [Todo],
    migrations: [],
    subscribers: [],
})
