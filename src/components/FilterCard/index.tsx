import { useDispatch, useSelector } from 'react-redux'

import { changeFilter } from '../../store/reducers/filter'

import * as enums from '../../utils/enums/LabelEnum'

import * as S from './styles'
import * as Icon from 'react-bootstrap-icons'
import { RootReducer } from '../../store'

export type Props = {
  label?: string
  criteria: 'label' | 'favorite' | 'all'
  value: enums.LabelEnum | boolean
}

const FilterCard = ({ label, criteria, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, contacts } = useSelector((state: RootReducer) => state)

  const verifyIfActive = () => {
    return filter.criteria === criteria && filter.value === value
  }

  const countContacts = () => {
    if (criteria === 'all') return contacts.items.length
    if (criteria === 'favorite') {
      return contacts.items.filter((item) => item.favorite.toString() === value)
        .length
    }
    if (criteria === 'label') {
      return contacts.items.filter((item) => item.label === value).length
    }
  }

  const filterContacts = () => {
    dispatch(
      changeFilter({
        criteria,
        value
      })
    )
  }

  const counterHandler = countContacts()
  const isActive = verifyIfActive() ? 'true' : 'false'

  return (
    <S.Card active={isActive} onClick={filterContacts}>
      <div>
        <Icon.PersonFill />
        <S.Label>{label}</S.Label>
      </div>
      <S.Counter>{counterHandler}</S.Counter>
    </S.Card>
  )
}

export default FilterCard
