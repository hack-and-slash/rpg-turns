import React from 'react';
import styled from 'styled-components';

import logo from '../image/HackNSlash-text.svg';
import colors from '../theme/colors';

const StyledHeader = styled.header`
  background-color: ${colors.white};
  padding: 8px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

const Header = () => (
  <StyledHeader>
    <img src={logo} alt="Hack and Slash logo" height="50" />
  </StyledHeader>
);

export default Header;
