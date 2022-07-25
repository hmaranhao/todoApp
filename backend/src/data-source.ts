import { DataSource } from "typeorm"

import { Todo } from "./domain/entities/todo/Todo"

console.log({ env: process.env.DATABASE_URL })

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [Todo],
    migrations: [],
    subscribers: [],
})
