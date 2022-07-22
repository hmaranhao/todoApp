import { Todo } from "../../../domain/entities/todo/Todo"
import { ITodoRepository } from "../../../domain/interfaces/ITodoRepository";

type CreateTodoUseCaseProps = {
  title: string;
  description?: string;
}

export class CreateTodoUseCase {
  constructor(
    private todoRepository: ITodoRepository
  ) {}

  async execute({ title, description }: CreateTodoUseCaseProps){
    const _todo = Todo.create({
      title,
      description
    })
    return _todo
  }
}