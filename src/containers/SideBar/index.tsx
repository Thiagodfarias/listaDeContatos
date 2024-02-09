import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import * as enums from '../../utils/enums/LabelEnum'

import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'
import FilterCard from '../../components/FilterCard'
import ModalCreate from '../../components/ModalCreate'

const Sidebar = () => {
  const [modalCreateShow, setModalCreateShow] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  const handleOpenModalCreate = () => {
    setModalCreateShow(true)
  }

  const handleCloseModalCreate = () => {
    setModalCreateShow(false)
  }

  const isMobile = useMediaQuery({ maxWidth: 767 })

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <S.Aside>
      <div>
        <S.HeadContainer>
          {isMobile && (
            <S.Burger onClick={toggleSidebar}>
              <Icon.List />
            </S.Burger>
          )}
          <S.AppName>
            <Icon.PeopleFill /> <span>Contatos</span>
          </S.AppName>
        </S.HeadContainer>

        {(!isMobile || (isMobile && showSidebar)) && (
          <>
            <S.AddContact onClick={handleOpenModalCreate}>
              <div>
                <Icon.PersonPlus className="custom-icon" />{' '}
                <span>Adicionar contato</span>
              </div>
            </S.AddContact>

            <ModalCreate
              show={modalCreateShow}
              onHide={handleCloseModalCreate}
            />

            <S.Filters>
              <FilterCard
                value={enums.LabelEnum.ANY}
                criteria="all"
                label="Contatos"
              />
              <FilterCard
                value={enums.LabelEnum.FAVORITE}
                criteria="favorite"
                label="Favoritos"
              />
              <FilterCard
                value={enums.LabelEnum.WORK}
                criteria="label"
                label="Trabalho"
              />
              <FilterCard
                value={enums.LabelEnum.FAMILY}
                criteria="label"
                label="Família"
              />
            </S.Filters>
          </>
        )}
      </div>
    </S.Aside>
  )
}
export default Sidebar
