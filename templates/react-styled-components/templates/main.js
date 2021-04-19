import React from 'react';
import styled from 'styled-components';
import {TemplateProps} from '@flayyer/flayyer-types';

import {Background, Fade, Content} from '../components/layers';
import {Title, Description} from '../components/elements';

import background from '../static/background.jpeg';
import logo from '../static/logo.svg';

const Logo = styled.img.attrs({
  src: logo
})`
  width: 280px;
  margin: 1.4rem;
  /* Apply white filter */
  filter: brightness(0) invert(1);
`;

/**
 * Make sure to default export a React component
 * @param {TemplateProps} [props] - Flayyer props.
 */
export default function MainTemplate(props) {
  const {width, height, variables} = props;
  const {
    title = 'Created with React.js',
    image = background,
    description
  } = variables;

  return (
    <>
      <Background src={image} />
      <Fade />
      <Content>
        <Logo />
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Content>
    </>
  );
}
