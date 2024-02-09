import styled from 'styled-components'
import variables from '../../styles/variables'

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  display: block;
  background-color: ${variables.lightGray};

  @media (max-width: 767px) {
    height: auto;
  }
`
export const HeadContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
  }
`
export const AppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;

  span {
    color: ${variables.black};
  }

  @media (max-width: 767px) {
    margin-bottom: 0;

    span {
      margin-left: 8px;
    }
  }
`
export const AddContact = styled.button`
  display: block;
  height: 48px;
  width: 88%;
  border-radius: 24px;
  font-size: 14px;
  border: none;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  transition:
    box-shadow 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
    background-color: ${variables.blue};
    color: ${variables.white};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .custom-icon {
      font-size: 18px;
    }
  }
`
export const Filters = styled.div`
  margin-top: 16px;
`
export const Burger = styled.button`
  padding: 4px 8px;
  margin-right: 32px;
  background: transparent;
  border-radius: 8px;
  border: 1px solid ${variables.blue};
  box-shadow: 5px 3px 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
`
