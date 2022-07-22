import { Router } from 'express'

import { TodoController } from './controllers/TodoController'

const routes = Router()

routes.get('/', (req, res) => res.send('Hello World!'))
routes.post('/todo', new TodoController().createTodo)

export { routes }