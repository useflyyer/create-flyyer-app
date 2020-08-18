import styled from "styled-components"

export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Background = styled(Layer)<{ src: string }>`
  background-image: url("${props => props.src}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:before, &:after {
    content: ' ';
    display: table;
  }
`;

export const Fade = styled(Layer)`
  background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%);
`

export const Content = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  padding: 2.5em 4em;
`;
