import React from 'react';
import {TemplateProps} from '@flyyer/types';
import {Variable as V, Validator} from '@flyyer/variables';

import '../styles/style.css';

import background from '../static/background.jpeg';
import alternative from '../static/alternative.jpeg';
import logo from '../static/logo.svg';

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

const validator = new Validator(schema);

/**
 * Make sure to default export a React component
 * @param {TemplateProps} [props] - Flyyer props.
 */
export default function MainTemplate(props) {
  const {width, height, variables} = props;
  const {
    data: {title, description, image},
    isValid,
    errors
  } = validator.parse(variables);

  return (
    <div>
      <div
        className="layer background"
        style={{backgroundImage: `url("${image}")`}}
      />
      <div className="layer fade" />
      <div className="layer content">
        <img className="logo" src={logo} />

        <h1 className="title">{title}</h1>

        {description && <p className="description">{description}</p>}
      </div>
    </div>
  );
}
