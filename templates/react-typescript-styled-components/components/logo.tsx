import styled from 'styled-components';

import logo from '../static/logo.svg';

export const Logo = styled.img.attrs({
  src: logo
})`
  width: 280px;
  margin: 1.4rem;
  /* Apply white filter */
  filter: brightness(0) invert(1);
`;
