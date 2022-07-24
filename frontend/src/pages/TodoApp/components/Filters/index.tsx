import { useContext, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Button } from '../../../../designSystem/index.style'
import { TodoContext } from '../../context/todoContext'

export const Filters = () => {
  const [form, setForm] = useState({
    search: '',
    status: ''
  })
  const todoContext = useContext(TodoContext)

  return (
    <div style={{ padding: 15 }}>
      <Row>
        <Col xs={12} sm={12} md={4} lg={3} style={{ padding: 5 }}>
          <Form.Group
            className="mb-3"
            controlId="title"
          >
            <Form.Control
              placeholder="Busque pelo título ou descrição"
              value={form?.search}
              onChange={e => setForm({ ...form, search: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Título é obrigatório
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={12} sm={12} md={3} lg={2} style={{ padding: 5 }}>
          <Form.Select
            onChange={e => setForm({ ...form, status: e.target.value })}
          >
            <option value="">Todos</option>
            <option value="0">Pendentes</option>
            <option value="1">Em progresso</option>
            <option value="2">Finalizadas</option>
          </Form.Select>
        </Col>
        <Col xs={12} sm={12} md={2} lg={1}>
          <Button
            onClick={() => todoContext.filterTodos(form)}
            style={{ marginTop: 5 }}
          >
            Buscar
          </Button>
        </Col>
      </Row>
    </div>
  )
}