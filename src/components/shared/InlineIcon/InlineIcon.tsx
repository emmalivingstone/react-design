import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { joinClasses } from '../../../utilities';
import './InlineIcon.scss';

export type InlineIconProps = {
  /**
   * Icon from react-icons package.
   */
  icon: IconType;
  /**
   * Optionally add a custom class to the icon
   */
  iconClassName?: string;
  /**
   * Optional, adds a margin to either the left or right side of the icon.
   * Used to leave a gap between the icon and any adjacent text.
   */
  gap?: 'right' | 'left';
};

/**
 * Component to render an icon from the react-icons package.
 * Centers the icon vertically to match any adjacent text & provides option to include a left/right gap.
 */
export const InlineIcon: FunctionComponent<InlineIconProps> = ({
  icon: ReactIcon,
  iconClassName,
  gap,
}) => {
  return (
    <span
      className={joinClasses(['inline-icon', gap && `inline-icon--${gap}-gap`])}
    >
      <ReactIcon className={iconClassName} />
    </span>
  );
};
