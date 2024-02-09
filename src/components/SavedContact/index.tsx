import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { toggleFavorite } from '../../store/reducers/contact'

import * as Icon from 'react-bootstrap-icons'
import * as S from './styles'
import ModalDelete from '../ModalDelete'
import ModalEdit from '../ModalEdit'

type Props = {
  onDelete: () => void
  contactName: string
  contactNumber: number
  contactEmail: string
  label: string
  favorite: boolean
  id: number
}

const SavedContact = ({
  onDelete,
  contactName,
  contactEmail,
  contactNumber,
  label,
  favorite,
  id
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(favorite)
  const [modalDeleteShow, setModalDeleteShow] = useState(false)
  const [modalEditShow, setModalEditShow] = useState(false)

  const dispatch = useDispatch()

  const toggleFavoriteHandler = () => {
    const newFavStatus = !isFavorite
    setIsFavorite(newFavStatus)
    dispatch(toggleFavorite(id))
    console.log(favorite)
  }

  useEffect(() => {
    setIsFavorite(favorite)
  }, [favorite])

  const handleOpenModalDelete = () => {
    setModalDeleteShow(true)
  }

  const handleCloseModalDelete = () => {
    setModalDeleteShow(false)
  }

  const handleOpenModalEdit = () => {
    setModalEditShow(true)
  }

  const handleCloseModalEdit = () => {
    setModalEditShow(false)
  }

  return (
    <>
      <S.ContactContainer>
        <S.Td className="name-padding">{contactName}</S.Td>
        <S.Td className="number-column">{contactNumber}</S.Td>
        <S.Td className="email-column">{contactEmail}</S.Td>
        <S.Td className="managers">
          <S.ManagerContainer>
            <S.FavoriteButton
              className={isFavorite ? 'star-filled' : ''}
              onClick={toggleFavoriteHandler}
            >
              {isFavorite ? '★' : '☆'}
            </S.FavoriteButton>

            <S.ManagerButton type="button" onClick={handleOpenModalEdit}>
              <Icon.PencilSquare />
            </S.ManagerButton>

            <ModalEdit
              show={modalEditShow}
              onHide={handleCloseModalEdit}
              contactName={contactName}
              contactEmail={contactEmail}
              contactNumber={contactNumber}
              label={label}
              favorite={favorite}
              id={id}
            />

            <S.ManagerButton type="button" onClick={handleOpenModalDelete}>
              <Icon.Trash />
            </S.ManagerButton>

            <ModalDelete
              show={modalDeleteShow}
              onHide={handleCloseModalDelete}
              onDelete={onDelete}
            />
          </S.ManagerContainer>
        </S.Td>
      </S.ContactContainer>
    </>
  )
}

export default SavedContact
