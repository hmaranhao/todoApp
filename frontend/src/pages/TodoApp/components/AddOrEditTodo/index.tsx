import { useContext, useState } from 'react'
import moment from 'moment'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { Button, Title } from '../../../../designSystem/index.style'
import { ITodo, TodoContext } from '../../context/todoContext'

export const AddOrEditTodo = ({
  onHide,
  data
}: {
  onHide: (refresh?: boolean) => void,
  data: ITodo | null
}) => {
  const todoContext = useContext(TodoContext)
  const [form, setForm] = useState({
    title: '',
    description: '',
    ...data
  })
  const [showError, setShowError] = useState(false)

  const save = () => {
    if (!form.title) {
      setShowError(true)
    } else if(data?._id){
      todoContext.putTodo(data?._id, form)
    } else {
      todoContext.postTodo(form)
    }
  }

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Title color="#000">
          {data?._id ? 'Detalhes da Tarefa' : 'Adicione uma Tarefa'}
        </Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control
              placeholder="Insira um título para a tarefa"
              value={form?.title}
              required
              isInvalid={showError && !form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Título é obrigatório
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Insira uma descrição para a tarefa(opcional)"
              value={form?.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />
          </Form.Group>
          {data?._id &&
            <>
              <Form.Group className="mb-3" controlId="createdAt">
                <Form.Label>Criado em</Form.Label>
                <Form.Control
                  value={moment(data?.createdAt).format('DD/MM/YYYY HH:mm')}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="startedAt">
                <Form.Label>Iniciado em</Form.Label>
                <Form.Control
                  value={data?.startedAt ? moment(data?.startedAt).format('DD/MM/YYYY HH:mm') : 'Ainda não iniciado'}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="finishedAt">
                <Form.Label>Finalizado em</Form.Label>
                <Form.Control
                  value={data?.finishedAt ? moment(data?.finishedAt).format('DD/MM/YYYY HH:mm') : 'Ainda não finalizado'}
                  disabled
                />
              </Form.Group>
            </>
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {!data?.startedAt && data?._id &&
          <Button bgColor="#0f0" onClick={() => todoContext.startTodo(data._id)}>Iniciar</Button>
        }
        {data?.startedAt && !data?.finishedAt && data?._id &&
          <Button bgColor="#0f0" onClick={() => todoContext.finishTodo(data._id)}>Finalizar</Button>
        }
        {data?._id && <Button bgColor="#f00" color="#fff" onClick={() => todoContext.deleteTodo(data._id)}>Apagar</Button>}
        <div style={{ flex: 1 }} />
        <Button onClick={save}>{data?._id ? 'Atualizar' : 'Adicionar'}</Button>
      </Modal.Footer>
    </Modal>
  )
}