import { Button, Modal, ModalProps } from 'react-bootstrap'

import { ItalicP } from './styles'

type ModalDeleteProps = {
  onHide: () => void
  onDelete: () => void
}

const ModalDelete: React.FC<ModalProps & ModalDeleteProps> = ({
  onHide,
  onDelete,
  ...modalProps
}) => {
  const handleDelete = () => {
    onDelete()
    onHide()
  }
  return (
    <Modal
      {...modalProps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter">
          Deletar Contato
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Você tem certeza que quer deletar este contato?</p>{' '}
        <ItalicP>*Essa ação é irreversível</ItalicP>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Deletar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDelete
