import React from "react"
import styled from "styled-components"

import { Background, Fade, Content } from "../components/layers";
import { Title, Subtitle } from "../components/elements"

import background from "../static/background.jpg";
import logo from "../static/logo.svg";

const Logo = styled.img.attrs({
  src: logo
})`
  width: 120px;
  height: 120px;
  /* Apply white filter */
  filter: brightness(0) invert(1);
`;

// Make sure to 'export default' a React component
export default function Hello({ variables }) {
  const {
    title = "Hello world!",
    img = background,
    subtitle,
  } = variables;

  return (
    <>
      <Background src={img} />
      <Fade />
      <Content>
        <Logo />
        <Title>{title}</Title>
        {subtitle && (
          <Subtitle>{subtitle}</Subtitle>
        )}
      </Content>
    </>
  );
}
