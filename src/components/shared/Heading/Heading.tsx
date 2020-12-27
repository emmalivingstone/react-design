import { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClasses } from '../../../utilities';
import './Heading.scss';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
  /**
   * Heading content
   */
  children: string;
  /**
   * Which level the heading should be.
   * e.g. 3 will render a <h3> tag.
   */
  level: HeadingLevel;
  /**
   * Used for situations where semantically you need a certain heading level,
   * but the style needs to be bigger/smaller than the default for that level.
   * e.g. <Heading level={2} styleAs={6}> will render a small heading in a <h2> tag.
   */
  styleAs?: HeadingLevel;
  /**
   * Optionally remove the default bottom margin.
   */
  noMargin?: boolean;
  /**
   * Optionally limit the heading to one line, and provide an ellipses for any text-overflow.
   */
  noWrap?: boolean;
} & ComponentPropsWithRef<'h1'>;

export const Heading: FunctionComponent<HeadingProps> = ({
  level,
  styleAs,
  noMargin = false,
  noWrap = false,
  children,
  className,
  ...props
}) => {
  const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return (
    <HeadingTag
      {...props}
      className={joinClasses([
        'heading',
        `heading--${styleAs || level}`,
        noMargin && 'heading--no-margin',
        noWrap && 'heading--no-wrap',
        className,
      ])}
      title={children}
    >
      {children}
    </HeadingTag>
  );
};
