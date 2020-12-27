import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Shared/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => (
  <Heading {...args}>
    This is a very long sample heading to demonstrate the heading component
  </Heading>
);

export const Heading1 = Template.bind({});
const h1Props: Omit<HeadingProps, 'children'> = {
  level: 1,
};
Heading1.args = h1Props;

export const Heading2 = Template.bind({});
const h2Props: Omit<HeadingProps, 'children'> = {
  level: 2,
};
Heading2.args = h2Props;

export const Heading3 = Template.bind({});
const h3Props: Omit<HeadingProps, 'children'> = {
  level: 3,
};
Heading3.args = h3Props;

export const Heading4 = Template.bind({});
const h4Props: Omit<HeadingProps, 'children'> = {
  level: 4,
};
Heading4.args = h4Props;

export const Heading5 = Template.bind({});
const h5Props: Omit<HeadingProps, 'children'> = {
  level: 5,
};
Heading5.args = h5Props;

export const Heading6 = Template.bind({});
const h6Props: Omit<HeadingProps, 'children'> = {
  level: 6,
};
Heading6.args = h6Props;

export const Heading4StyledAs1 = Template.bind({});
const h4StyledAs1Props: Omit<HeadingProps, 'children'> = {
  level: 4,
  styleAs: 1,
};
Heading4StyledAs1.args = h4StyledAs1Props;

export const NoMargin = Template.bind({});
const noMarginProps: Omit<HeadingProps, 'children'> = {
  level: 1,
  noMargin: true,
};
NoMargin.args = noMarginProps;

export const NoWrap = Template.bind({});
const noWrapProps: Omit<HeadingProps, 'children'> = {
  level: 1,
  noWrap: true,
};
NoWrap.args = noWrapProps;
