import { container } from "tsyringe"

import { TodoRepository } from './../infrastructure/postgreSQL/implementation/TodoRepository'
import { ITodoRepository } from "../domain/interfaces/ITodoRepository"


container.register<ITodoRepository>("TodoRepository", TodoRepository)