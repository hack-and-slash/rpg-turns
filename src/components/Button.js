import React from 'react'
import styled, { css } from 'styled-components'

const ButtonStyled = styled.button`
  padding: 10px;
  font-weight: 600;

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`

const Button = ({ uppercase, children, onClick, type }) => (
  <React.Fragment>
    <ButtonStyled
      uppercase={uppercase}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStyled>
  </React.Fragment>
)

export default Button
