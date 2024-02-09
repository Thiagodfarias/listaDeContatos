import styled from 'styled-components'

export const ContactContainer = styled.tr`
  .name-padding {
    padding-left: 8px;
  }

  .star-filled {
    color: gold;
  }
`
export const Td = styled.td`
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 1px;
`
export const ManagerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1024px) {
    padding: 0 25%;
  }
`
export const ManagerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 17px;
  user-select: none;
  margin-left: 4px;
`
export const FavoriteButton = styled(ManagerButton)`
  font-size: 24px;
`
