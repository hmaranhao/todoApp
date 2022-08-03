import { DataSource } from "typeorm"

import { Todo } from "./domain/entities/todo/Todo"

console.log({ envs: [process.env.DATABASE_URL, process.env.NODE_ENV] })

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [Todo],
    migrations: [
        './migrations/*.ts'
    ],
    subscribers: [],
    ssl: !!(process.env.NODE_ENV === 'production')
})
