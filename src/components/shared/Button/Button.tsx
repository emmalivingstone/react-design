import { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClasses } from '../../../utilities';
import './Button.scss';

export type ButtonProps = {
  /**
   * Button type. Required to avoid browser inconsistencies with the default value.
   */
  type: 'button' | 'submit' | 'reset';
  /**
   * Required, pick the button style type.
   */
  variant: 'primary' | 'secondary';
  /**
   * Size of button, defaults to auto. Block will span the full width of it's parent.
   */
  size?: 'block' | 'auto';
  /**
   * Note: setting disabled to true will apply aria-disabled on the button instead of the 'disabled' attribute for better accessibility.
   */
  disabled?: boolean;
  /**
   * Click event handler
   */
  onClick: () => void;
} & ComponentPropsWithRef<'button'>;

export const Button: FunctionComponent<ButtonProps> = ({
  variant,
  className,
  disabled = false,
  onClick,
  size = 'auto',
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={joinClasses([
        'button',
        `button--${variant}`,
        `button--${size}`,
        disabled && 'button--disabled',
        className,
      ])}
      aria-disabled={disabled}
      onClick={(e) => {
        !disabled && onClick(e);
      }}
    >
      {children}
    </button>
  );
};
