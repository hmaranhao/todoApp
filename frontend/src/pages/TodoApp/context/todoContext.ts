import { createContext } from 'react'

export enum status {
  pending = 0,
  inProgress = 1,
  done = 2
}

export interface ITodo {
  _id?: string,
  title?: string,
  description?: string,
  createdAt?: string,
  startedAt?: string,
  finishedAt?: string,
  status?: status
}

interface ITodoContext {
  loadTodos: () => void,
  putTodo: (_id: string, form: ITodo) => void,
  startTodo: (_id?: string) => void,
  finishTodo: (_id?: string) => void,
  deleteTodo: (_id?: string) => void,
  postTodo: (form: ITodo) => void,
  todos: ITodo[],
  setAddOrEditTodoModal: (item: { open: boolean, data?: any}) => void,
  filterTodos: ({ search, status }: { search?: string, status?: string }) => void
}

export const TodoContext = createContext<ITodoContext>({
  loadTodos: () => null,
  putTodo: (_id: string) => null,
  startTodo: (_id?: string) => null,
  finishTodo: (_id?: string) => null,
  deleteTodo: (_id?: string) => null,
  todos: [],
  setAddOrEditTodoModal: (item: { open: boolean, data?: any}) => null,
  postTodo: (form: ITodo) => null,
  filterTodos: ({ search, status }: { search?: string, status?: string }) => null
})
