import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createContact } from '../../store/reducers/contact'

import * as enums from '../../utils/enums/LabelEnum'
import ContactClass from '../../models/ContactClass'

import { Button, Modal, ModalProps, Form } from 'react-bootstrap'
import { LabelContainer, MyForm } from './styles'
import { RootReducer } from '../../store'

type ModalCreateProps = {
  onHide: () => void
}

const ModalCreate: React.FC<ModalProps & ModalCreateProps> = ({
  onHide,
  ...modalProps
}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newLabel, setNewLabel] = useState('')
  const [newFavorite, setNewFavorite] = useState(false)

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.contacts)

  useEffect(() => {
    if (!modalProps.show) {
      setNewName('')
      setNewNumber('')
      setNewEmail('')
      setNewLabel('')
      setNewFavorite(false)
    }
  }, [modalProps.show])

  const isValidEmail = (email: string) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return emailPattern.test(email)
  }

  const handleCreate = () => {
    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Nome e número de telefone obrigatórios!')
    } else if (newEmail.trim() !== '' && !isValidEmail(newEmail)) {
      alert('Por favor coloque um e-mail válido!')
    } else {
      const newContact = new ContactClass(
        newName,
        parseInt(newNumber),
        newEmail,
        newLabel,
        newFavorite,
        1
      )

      const doesNameExist = items.find(
        (c) =>
          c.contactName.toLowerCase() === newContact.contactName.toLowerCase()
      )
      const doesNumberExist = items.find(
        (c) => c.contactNumber === newContact.contactNumber
      )

      if (doesNameExist) {
        alert('Já existe um contato com este nome!')
      } else if (doesNumberExist) {
        alert('Já existe um contato com este número!')
      } else {
        dispatch(
          createContact({
            contactName: newName,
            contactNumber: parseInt(newNumber),
            contactEmail: newEmail,
            label: newLabel,
            favorite: newFavorite
          })
        )
        onHide()
      }
    }
  }

  return (
    <Modal
      {...modalProps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter">
          Adcione um novo contato
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyForm>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome completo"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactNumber">
            <Form.Label>Número</Form.Label>
            <Form.Control
              type="tel"
              maxLength={15}
              placeholder="Número de telefone"
              value={newNumber}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, '')
                setNewNumber(numericValue)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="nome@examplo.com"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </Form.Group>
          <LabelContainer>
            <Form.Group className="mb-3" controlId="family">
              <Form.Check
                type="checkbox"
                label="Família"
                checked={newLabel === enums.LabelEnum.FAMILY}
                onChange={() =>
                  setNewLabel(
                    newLabel === enums.LabelEnum.FAMILY
                      ? enums.LabelEnum.ANY
                      : enums.LabelEnum.FAMILY
                  )
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="work">
              <Form.Check
                type="checkbox"
                label="Trabalho"
                checked={newLabel === enums.LabelEnum.WORK}
                onChange={() =>
                  setNewLabel(
                    newLabel === enums.LabelEnum.WORK
                      ? enums.LabelEnum.ANY
                      : enums.LabelEnum.WORK
                  )
                }
              />
            </Form.Group>
          </LabelContainer>
          <Form.Group className="mb-3" controlId="favorite">
            <Form.Check
              type="checkbox"
              label="Favoritos"
              checked={newFavorite}
              onChange={() => setNewFavorite(!newFavorite)}
            />
          </Form.Group>
        </MyForm>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCreate
