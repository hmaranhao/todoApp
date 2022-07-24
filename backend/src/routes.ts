import { GetTodoController } from './useCases/TodoUseCases/GetTodo/GetTodoController';
import { Router } from 'express'

import { CreateTodoController } from './useCases/TodoUseCases/CreateTodo/CreateTodoController'
import { UpdateTodoController } from './useCases/TodoUseCases/UpdateTodo/UpdateTodoController'
import { StartTodoController } from './useCases/TodoUseCases/StartTodo/StartTodoController'
import { FinishTodoController } from './useCases/TodoUseCases/FinishTodo/FinishTodoController'
import { DeleteTodoController } from './useCases/TodoUseCases/DeleteTodo/DeleteTodoController'

const routes = Router()

routes.get('/', (req, res) => res.send('Hello World!'))
routes.get('/todos', new GetTodoController().handle)
routes.post('/todo', new CreateTodoController().handle)
routes.put('/todo/:_id', new UpdateTodoController().handle)
routes.put('/todo/:_id/start', new StartTodoController().handle)
routes.put('/todo/:_id/finish', new FinishTodoController().handle)
routes.delete('/todo/:_id', new DeleteTodoController().handle)

export { routes }