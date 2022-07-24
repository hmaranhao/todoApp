import { useContext } from "react";
import { Button, Title } from "../../../../designSystem/index.style";
import { TodoContext } from "../../context/todoContext";
import { AppBar } from "./appBar.style";

export function AppBarHeader(){
  const todoContext = useContext(TodoContext)

  return (
    <AppBar>
      <Title>TODO App</Title>
      <Button onClick={() => todoContext.setAddOrEditTodoModal({ open: true })}>Adicionar Tarefa</Button>
    </AppBar>
  )
}