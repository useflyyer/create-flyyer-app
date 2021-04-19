import React from 'react';
import {TemplateProps} from '@flayyer/flayyer-types';
import clsx from 'clsx';

import '../styles/tailwind.css';

import background from '../static/background.jpeg';
import logo from '../static/logo.svg';

function Layer({className, ...props}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx('absolute inset-0 w-full h-full', className)}
    />
  );
}

// Make sure to 'export default' a React component
export default function MainTemplate(props: TemplateProps) {
  const {width, height, variables} = props;
  const {
    title = 'Created with React.js',
    image = background,
    description
  } = variables;

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
