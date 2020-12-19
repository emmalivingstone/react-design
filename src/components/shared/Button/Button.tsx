import React, { ComponentPropsWithRef, FunctionComponent } from 'react';

export type ButtonProps = {
  /**
   * Button type. Required to avoid browser inconsistencies with default type
   */
  type: 'submit' | 'reset' | 'button';
} & ComponentPropsWithRef<'button'>;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};
