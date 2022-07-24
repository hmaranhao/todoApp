import { Button, Title } from "../../../../designSystem/index.style";
import { AppBar } from "./appBar.style";

export function AppBarHeader(){

  return (
    <AppBar>
      <Title>TODO App</Title>
      <Button>Adicionar Tarefa</Button>
    </AppBar>
  )
}