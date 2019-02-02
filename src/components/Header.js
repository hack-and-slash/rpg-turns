import React from 'react';
import styled from 'styled-components';

import logo from '../image/HackNSlash-text.svg';
import colors from '../theme/colors';

const StyledHeader = styled.header`
  background-color: ${colors.white};
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 16px;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  display: inline-block;
  cursor: pointer;
`;

const Header = () => (
  <StyledHeader>
    <img src={logo} alt="Hack and Slash logo" height="50" />
    <StyledButton>Log in</StyledButton>
  </StyledHeader>
);

export default Header;
