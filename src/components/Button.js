import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import colors from '../theme/colors';

const ButtonStyled = styled.button`
  padding: 8px;
  font-weight: 600;
  border-radius: 3px;
  color: ${colors.blue};
  background-color: ${colors.white};
  cursor: pointer;
  border: 1px solid ${colors.blue};

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`;

const Button = ({
  uppercase, children, ...props
}) => ((
  <ButtonStyled
    uppercase={uppercase}
    {...props}
  >
    {children}
  </ButtonStyled>
));


Button.propTypes = {
  uppercase: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
