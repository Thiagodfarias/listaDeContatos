import styled from 'styled-components'
import { Form } from 'react-bootstrap'

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    margin-right: 24px;
  }
`

export const MyForm = styled(Form)`
  user-select: none;
`
