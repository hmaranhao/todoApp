import { Card } from "../../../../designSystem/index.style";
import { ContainerCards } from "./list.style";

export function List (){

  return (
    <ContainerCards>
      <Card className="animate__animated animate__pulse animate__infinite"></Card>
      <Card className="animate__animated animate__pulse animate__infinite"></Card>
      <Card className="animate__animated animate__pulse animate__infinite"></Card>
      <Card className="animate__animated animate__pulse animate__infinite"></Card>
    </ContainerCards>
  )
}