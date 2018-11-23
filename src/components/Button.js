import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px;
  font-weight: 600;

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`;

const Button = ({
  uppercase, children, onClick, type,
}) => ((
  <React.Fragment>
    <ButtonStyled
      uppercase={uppercase}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStyled>
  </React.Fragment>
));


Button.propTypes = {
  uppercase: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
