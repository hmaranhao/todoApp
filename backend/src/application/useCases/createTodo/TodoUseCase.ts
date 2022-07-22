import { TodoEntity } from "../../../domain/entities/todo/Todo"

type TodoUseCaseProps = {
  title: string;
  description?: string;
}

export class TodoUseCase {
  async execute({ title, description }: TodoUseCaseProps){
    const _todo = TodoEntity.create({
      title,
      description
    })
    return _todo
  }
}