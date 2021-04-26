import React from 'react';
import {Variable as V, Validator} from '@flayyer/variables';
import {TemplateProps} from '@flayyer/flayyer-types';

import {Background, Fade, Content} from '../components/layers.js';
import {Title, Description} from '../components/elements.js';
import {Logo} from '../components/logo.js';

import background from '../static/background.jpeg';
import alternative from '../static/alternative.jpeg';

/**
 * Export to enable variables UI on Flayyer.com
 */
export const schema = V.Object({
  title: V.String({default: 'Created with React.js'}),
  description: V.Optional(V.String()),
  image: V.Image({
    title: 'Background image URL',
    examples: [alternative],
    default: background
  })
});

const validator = new Validator(schema);

/**
 * Make sure to default export a React component
 * @param {TemplateProps} [props] - Flayyer props.
 */
export default function MainTemplate(props) {
  const {width, height, variables} = props;
  const {
    data: {title, description, image},
    isValid,
    errors
  } = validator.parse(variables);

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
