import { useEffect, useState } from "react"

import { api } from "../../shared/api"
import { AddOrEditTodo } from "./components/AddOrEditTodo"
import { AppBarHeader } from "./components/AppBar"
import { Filters } from "./components/Filters"
import { List } from "./components/List"
import { ITodo, TodoContext } from "./context/todoContext"

export function TodoApp() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [todosFiltered, setTodosFiltered] = useState<ITodo[]>([])
  const [addOrEditTodoModal, setAddOrEditTodoModal] = useState<{ open: boolean, data?: any }>({ open: false, data: null })

  const updateTodoState = (todo: ITodo) => {
    return todos?.map(t => {
      if (t._id === todo._id) {
        return { ...t, ...todo }
      }
      return t
    })
  }

  const removeTodoState = (todo: ITodo) => {
    return todos?.filter(t => t._id !== todo._id)
  }

  const loadTodos = () => api.get('/todos').then(resp => {
    setTodos(resp.data)
    setTodosFiltered(resp.data)
  })
  const putTodo = (_id: string, form: ITodo) => api.put(`/todo/${_id}`, form).then(resp => {
    setTodos(updateTodoState(resp.data))
    setTodosFiltered(updateTodoState(resp.data))
    setAddOrEditTodoModal({ open: false })
  })
  const startTodo = (_id?: string) => {
    if (_id) {
      api.put(`/todo/${_id}/start`).then(resp => {
        setTodos(updateTodoState(resp.data))
        setTodosFiltered(updateTodoState(resp.data))
        setAddOrEditTodoModal({ open: false })
      })
    }
  }
  const finishTodo = (_id?: string) => {
    if (_id) {
      api.put(`/todo/${_id}/finish`).then(resp => {
        setTodos(updateTodoState(resp.data))
        setTodosFiltered(updateTodoState(resp.data))
        setAddOrEditTodoModal({ open: false })
      })
    }
  }
  const deleteTodo = (_id?: string) => {
    if (_id) {
      api.delete(`/todo/${_id}`).then(resp => {
        if (resp.data) {
          setTodos(removeTodoState({ _id }))
          setTodosFiltered(removeTodoState({ _id }))
        }
        setAddOrEditTodoModal({ open: false })
      })
    }
  }
  const postTodo = (form: ITodo) => api.post(`/todo`, form).then(resp => {
    setTodos([...todos, resp.data])
    setTodosFiltered([...todos, resp.data])
    setAddOrEditTodoModal({ open: false })
  })

  const filterTodos = ({ search, status }: { search?: string, status?: string }) => {
    let todosFiteredAux = todos
    if(search){
      todosFiteredAux = todosFiteredAux.filter(t =>
        (t.title?.toUpperCase().includes((search ?? '').toUpperCase())) ||
        (t.description?.toUpperCase().includes((search ?? '').toUpperCase()))
      )
    }
    if(status){
      todosFiteredAux = todosFiteredAux.filter(t =>
        (t.status?.toString() == status)
      )
    }
    
    setTodosFiltered(todosFiteredAux)
  }


  useEffect(() => {
    loadTodos()
  }, [])

  return (
    <TodoContext.Provider value={{
      loadTodos,
      putTodo,
      startTodo,
      finishTodo,
      deleteTodo,
      todos: todosFiltered,
      setAddOrEditTodoModal,
      postTodo,
      filterTodos
    }}>
      <AppBarHeader />
      <Filters />
      <List />
      {addOrEditTodoModal?.open &&
        <AddOrEditTodo
          onHide={(refresh?: boolean) => {
            setAddOrEditTodoModal({ open: false })
            if (refresh === true) {
              loadTodos()
            }
          }}
          data={addOrEditTodoModal?.data}
        />
      }
    </TodoContext.Provider>
  )
}