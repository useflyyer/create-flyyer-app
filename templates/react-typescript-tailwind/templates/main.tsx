import React from 'react';
import {Variable as V, Validator, Static} from '@flayyer/variables';
import {TemplateProps} from '@flayyer/flayyer-types';

import '../styles/tailwind.css';

import logo from '../static/logo.svg';
import background from '../static/background.jpeg';
import alternative from '../static/alternative.jpeg';

import {Layer} from '../components/layers';

/**
 * Export to enable variables UI on Flayyer.com
 */
export const schema = V.Object({
  title: V.String({default: 'Created with React.js and Tailwind'}),
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
    return <img className="w-full h-full object-cover" src={background} />; // Fallback for invalid variables
  }

  const {title, description, image} = variables;
  return (
    <>
      <Layer>
        <img className="w-full h-full object-cover" src={image} />
      </Layer>
      <Layer className="bg-gradient-to-t from-black opacity-0 banner:opacity-60" />
      <Layer className="flex flex-col justify-center items-center px-4 py-4 text-white text-center">
        <img src={logo} className="w-26 filter brightness-0 invert" />
        <h1 className="hidden banner:block text-2xl font-extrabold tracking-tight leading-tight mt-1">
          {title}
        </h1>
        {description && (
          <h2 className="hidden banner:block text-gray-50 tracking-tight">
            {description}
          </h2>
        )}
      </Layer>
    </>
  );
}
