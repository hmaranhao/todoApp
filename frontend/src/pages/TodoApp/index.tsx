import { useEffect, useState } from "react"

import { api } from "../../shared/api"
import { AddOrEditTodo } from "./components/AddOrEditTodo"
import { AppBarHeader } from "./components/AppBar"
import { List } from "./components/List"
import { ITodo, TodoContext } from "./context/todoContext"

export function TodoApp() {
  const [todos, setTodos] = useState<ITodo[]>([])
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
    return todos?.filter(t => t._id === todo._id)
  }

  const loadTodos = () => api.get('/todos').then(resp => setTodos(resp.data))
  const putTodo = (_id: string, form: ITodo) => api.put(`/todo/${_id}`, form).then(resp => {
    setTodos(updateTodoState(resp.data))
    setAddOrEditTodoModal({ open: false })
  })
  const startTodo = (_id?: string) => {
    if (_id) {
      api.put(`/todo/${_id}/start`).then(resp => {
        setTodos(updateTodoState(resp.data))
        setAddOrEditTodoModal({ open: false })
      })
    }
  }
  const finishTodo = (_id?: string) => {
    if (_id) {
      api.put(`/todo/${_id}/finish`).then(resp => {
        setTodos(updateTodoState(resp.data))
        setAddOrEditTodoModal({ open: false })
      })
    }
  }
  const deleteTodo = (_id?: string) => {
    if (_id) {
      api.delete(`/todo/${_id}`).then(resp => {
        if(resp.data){
          setTodos(removeTodoState({ _id }))
        }
        setAddOrEditTodoModal({ open: false })
      })
    }
  }
  const postTodo = (form: ITodo) => api.post(`/todo`, form).then(resp => {
    setTodos([...todos, resp.data])
    setAddOrEditTodoModal({ open: false })
  })

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
      todos,
      setAddOrEditTodoModal,
      postTodo
    }}>
      <AppBarHeader />
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