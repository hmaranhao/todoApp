
import { useContext } from "react"
import moment from 'moment'
import { Card } from "../../../../designSystem/index.style"
import { TodoContext } from "../../context/todoContext"
import { ContainerCards } from "./list.style"

export function List (){
  const todoContext = useContext(TodoContext)
  return (
    <ContainerCards>
      {todoContext.todos?.map(t => {
        return (
          <Card status={t.status} onClick={() => todoContext.setAddOrEditTodoModal({ open: true, data: t })}>
            <h4 className="two_lines">{t.title}</h4>
            <h6 className="three_lines">{t.description}</h6>
            <div style={{ flex: 1 }} />
            <div style={{ fontSize: 12 }}>
              Criado em: {t?.createdAt && moment(t?.createdAt).format('DD/MM/YYYY HH:mm')}
            </div>
          </Card>
        )
      })}
    </ContainerCards>
  )
}