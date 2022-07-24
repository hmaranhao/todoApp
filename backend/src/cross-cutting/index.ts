import { container } from "tsyringe"

import { TodoRepository } from './../infrastructure/postgreSQL/implementation/TodoRepository'
import { ITodoRepository } from "../domain/interfaces/ITodoRepository"


container.registerSingleton<ITodoRepository>("TodoRepository", TodoRepository)