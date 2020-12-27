import React, { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClasses } from '../../../utilities';
import './Card.scss';

/**
 * Simple component for wrapping content with a standard card-style container.
 */
export const Card: FunctionComponent<ComponentPropsWithRef<'div'>> = ({
  children,
  className,
  ...props
}) => (
  <div {...props} className={joinClasses(['card', className])}>
    {children}
  </div>
);
