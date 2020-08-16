import React from "react"
import styled from "styled-components"

import { Background, Fade, Content } from "../components/layers";
import { Title, Description } from "../components/elements"

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
export default function MainTemplate({ variables }) {
  const {
    title = "Hello world!",
    img = background,
    description,
  } = variables;

  return (
    <>
      <Background src={img} />
      <Fade />
      <Content>
        <Logo />
        <Title>{title}</Title>
        {description && (
          <Description>{description}</Description>
        )}
      </Content>
    </>
  );
}
