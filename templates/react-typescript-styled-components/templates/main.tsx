import React from 'react';

import {Variable as V, Validator, Static} from '@flyyer/variables';
import {TemplateProps} from '@flyyer/types';

import {Background, Fade, Content} from '../components/layers';
import {Title, Description} from '../components/elements';
import {Logo} from '../components/logo';

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
  })
});
type Variables = Static<typeof schema>;

const validator = new Validator(schema);

// Make sure to 'export default' a React component
export default function MainTemplate(props: TemplateProps<Variables>) {
  const {width, height, variables} = props;
  if (!validator.validate(variables)) {
    return <Background src={background} />; // Fallback for invalid variables
  }

  const {title, description, image} = variables;
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
