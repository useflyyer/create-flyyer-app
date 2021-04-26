import React from 'react';
import clsx from 'clsx';

export function Layer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx('absolute inset-0 w-full h-full', className)}
    />
  );
}
