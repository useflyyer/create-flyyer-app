import React from 'react';
import {TemplateProps} from '@flayyer/flayyer-types';

import '../styles/style.css';

import background from '../static/background.jpeg';
import logo from '../static/logo.svg';

/**
 * Make sure to default export a React component
 * @param {TemplateProps} [props] - Flayyer props.
 */
export default function MainTemplate(props) {
  const {width, height, variables} = props;
  const {
    title = 'Created with React.js',
    img = background,
    description
  } = variables;

  return (
    <div>
      <div
        className="layer background"
        style={{backgroundImage: `url("${img}")`}}
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
