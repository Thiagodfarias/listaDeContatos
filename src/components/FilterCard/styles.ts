import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  active: string
}

export const Card = styled.div<Props>`
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  margin-bottom: 2px;
  background-color: ${(props) =>
    props.active === 'true' ? variables.green : variables.white};
  div {
    display: flex;
    align-items: center;
  }

  &:hover {
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
  }
`
export const Label = styled.span`
  margin-left: 16px;
  color: ${variables.black};
`
export const Counter = styled.span`
  color: ${variables.gray};
`
