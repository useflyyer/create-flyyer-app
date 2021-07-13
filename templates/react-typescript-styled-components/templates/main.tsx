import React from 'react';

import {Variable as V, Validator, Static} from '@flyyer/variables';
import {TemplateProps} from '@flyyer/types';
import {proxy} from '@flyyer/proxy';

import {Background, Fade, Content} from '../components/layers';
import {Title, Description} from '../components/elements';
import {Logo} from '../components/logo';

import logo from '../static/logo.svg';
import background from '../static/background.jpeg';
import alternative from '../static/alternative.jpeg';

/**
 * Export to enable variables UI on Flyyer.io
 */
export const schema = V.Object({
  title: V.String({default: 'Created with React.js'}),
  description: V.Optional(V.String()),
  image: V.Image({
    title: 'Background image URL',
    examples: [alternative],
    default: background
  }),
  logo: V.Image({default: logo})
});
type Variables = Static<typeof schema>;

const validator = new Validator(schema);

// Make sure to 'export default' a React component
export default function MainTemplate(props: TemplateProps<Variables>) {
  const {width, height, variables, locale = 'en'} = props;

  const {
    data: {title, description, image, logo},
    isValid,
    errors
  } = validator.parse(variables);
  if (!isValid) {
    console.error('[Flyyer Variables]:', errors);
  }

  return (
    <>
      <Background src={proxy(image)} />
      <Fade />
      <Content>
        <Logo src={proxy(logo)} />
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Content>
    </>
  );
}
